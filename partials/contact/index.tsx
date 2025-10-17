'use client';

import React, { useState, useEffect } from 'react';
import {
  GoogleReCaptchaProvider,
  GoogleReCaptchaCheckbox
} from '@google-recaptcha/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classnames from 'classnames';
import Block from 'components/block';
import {
  MdOutlineEmail,
  MdOutlineLocalPhone,
  MdOutlineCheckBox
} from 'react-icons/md';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { LuBird } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa';

import styles from './styles.module.scss';

/* Types */
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export type Inputs = {
  name: string;
  email?: string;
  contactNumber?: string;
  message: string;
  noSale?: boolean;
};

type FormMessage = {
  message: string;
  status: 'error' | 'success' | 'warning';
};

const cx = classnames.bind(styles);

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

/* Schema */
const schema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  email: yup.string().email('Please enter a valid email address'),
  contactNumber: yup.string().when('email', {
    is: (val: string | undefined) => !val,
    then: (schema) =>
      schema
        .required('Contact number is required when email is not provided')
        .matches(
          /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/,
          'Please enter a valid UK phone number with no spaces'
        ),
    otherwise: (schema) => schema.notRequired()
  }),
  message: yup
    .string()
    .required(
      "If you're contacting me, you should probably have something to say"
    ),
  noSale: yup.boolean().oneOf([true], "Sorry, I'm not buying.")
});

const Required = () => <span className={styles.required}>*</span>;

/**
 * The Contact component is used to display the main 'contact' section of my portfolio
 */
export const Contact: React.FC<Props> = ({ className, ...props }: Props) => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [formMessage, setFormMessage] = useState<FormMessage | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if (!captchaToken) return;
    // Reset the form message when the token is set
    setFormMessage(null);
    // Set a timeout to invalidate the token after 2 minutes
    const timeout = setTimeout(
      () => {
        setCaptchaToken(null);
        setFormMessage({
          message: 'reCAPTCHA token has expired. Please try again.',
          status: 'warning'
        });
      },
      2 * 60 * 1000
    ); // 2 minutes

    return () => clearTimeout(timeout);
  }, [captchaToken]);

  const onSubmit = async (data: Inputs) => {
    if (RECAPTCHA_SITE_KEY && !captchaToken) {
      setFormMessage({
        message: 'Please complete the reCAPTCHA challenge',
        status: 'error'
      });
      return;
    }

    try {
      const response = await fetch('/api/form-handler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          ...(captchaToken && { recaptchaToken: captchaToken })
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      const result = await response.json();

      setFormMessage({
        message:
          'Thanks for getting in touch! I will get back to you as soon as I can.',
        status: 'success'
      });
    } catch (error) {
      console.error('Error submitting form:', error);

      setFormMessage({
        message:
          'An error occurred while submitting the form. Please try again later.',
        status: 'error'
      });
    }
  };

  return (
    <Block
      name="contact"
      className={cx(styles['contact'], className)}
      {...props}
    >
      <div className={styles.content}>
        <h2>Get in touch!</h2>

        <div className={styles.container}>
          <div className={styles.content}>
            <p>
              If you'd like to get in touch with me, please fill out the form
              and I'll get back to you as soon as possible. Alternatively, you
              can contact me using one of the methods below:
            </p>

            <ul className={styles['contact-list']}>
              <li>
                <span>
                  <MdOutlineEmail />
                  Email:
                </span>
                <a href="mailto:alex@alexfoxleigh.com">
                  <span>alex@alexfoxleigh.com</span>
                </a>
              </li>
              <li>
                <span>
                  <MdOutlineLocalPhone />
                  Phone:
                </span>
                <a href="tel:07480647732">
                  <span>07480 647732</span>
                </a>
              </li>
              <li>
                <span>
                  <PiLinkedinLogoBold />
                  LinkedIn:
                </span>
                <a
                  href="https://www.linkedin.com/in/alexfoxleigh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <span>
                  <FaGithub />
                  GitHub:
                </span>
                <a
                  href="https://github.com/foxleigh81"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>foxleigh81</span>
                </a>
              </li>
              <li>
                <span>
                  <LuBird />
                  Carrier pigeon:
                </span>
                <span>No longer available.</span>
              </li>
            </ul>
          </div>
          {RECAPTCHA_SITE_KEY ? (
            <GoogleReCaptchaProvider
              type="v2-checkbox"
              siteKey={RECAPTCHA_SITE_KEY}
              scriptProps={{
                async: true,
                defer: true,
                appendTo: 'body'
              }}
            >
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles['input-container']}>
                  <label htmlFor="name">
                    Name
                    <Required />
                  </label>
                  <input type="text" id="name" {...register('name')} />
                  {errors.name && (
                    <div className={styles.error}>{errors.name.message}</div>
                  )}
                </div>

                <div className={styles['input-container']}>
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" {...register('email')} />
                  {errors.email && (
                    <div className={styles.error}>{errors.email.message}</div>
                  )}
                </div>

                <div className={styles['input-container']}>
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input
                    type="text"
                    id="contactNumber"
                    {...register('contactNumber')}
                  />
                  {errors.contactNumber && (
                    <div className={styles.error}>
                      {errors.contactNumber.message}
                    </div>
                  )}
                </div>

                <div className={styles['input-container']}>
                  <label htmlFor="message">
                    Message
                    <Required />
                  </label>
                  <textarea id="message" rows={10} {...register('message')} />
                  {errors.message && (
                    <div className={styles.error}>{errors.message.message}</div>
                  )}
                </div>

                <div className={styles['input-container--checkbox']}>
                  <div>
                    <input
                      type="checkbox"
                      id="noSale"
                      {...register('noSale')}
                    />
                    <label htmlFor="noSale">
                      I am not trying to sell you something
                      <Required />
                    </label>
                  </div>
                  {errors.noSale && (
                    <div className={styles.error}>{errors.noSale.message}</div>
                  )}
                </div>

                <div className={styles['input-container']}>
                  {captchaToken ? (
                    <p className={styles['captcha-complete']}>
                      <MdOutlineCheckBox /> ReCaptcha complete
                    </p>
                  ) : (
                    <GoogleReCaptchaCheckbox
                      onChange={(token) => setCaptchaToken(token)}
                    />
                  )}
                </div>

                {formMessage?.status !== 'success' && (
                  <button
                    className={cx('btn-primary', styles.button)}
                    type="submit"
                  >
                    Submit
                  </button>
                )}
                {formMessage && (
                  <div
                    className={cx(
                      styles.message,
                      styles[`${formMessage.status}-status`]
                    )}
                  >
                    {formMessage.message}
                  </div>
                )}
              </form>
            </GoogleReCaptchaProvider>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles['input-container']}>
                <label htmlFor="name">
                  Name
                  <Required />
                </label>
                <input type="text" id="name" {...register('name')} />
                {errors.name && (
                  <div className={styles.error}>{errors.name.message}</div>
                )}
              </div>

              <div className={styles['input-container']}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...register('email')} />
                {errors.email && (
                  <div className={styles.error}>{errors.email.message}</div>
                )}
              </div>

              <div className={styles['input-container']}>
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="text"
                  id="contactNumber"
                  {...register('contactNumber')}
                />
                {errors.contactNumber && (
                  <div className={styles.error}>
                    {errors.contactNumber.message}
                  </div>
                )}
              </div>

              <div className={styles['input-container']}>
                <label htmlFor="message">
                  Message
                  <Required />
                </label>
                <textarea id="message" rows={10} {...register('message')} />
                {errors.message && (
                  <div className={styles.error}>{errors.message.message}</div>
                )}
              </div>

              <div className={styles['input-container--checkbox']}>
                <div>
                  <input type="checkbox" id="noSale" {...register('noSale')} />
                  <label htmlFor="noSale">
                    I am not trying to sell you something
                    <Required />
                  </label>
                </div>
                {errors.noSale && (
                  <div className={styles.error}>{errors.noSale.message}</div>
                )}
              </div>

              {formMessage?.status !== 'success' && (
                <button
                  className={cx('btn-primary', styles.button)}
                  type="submit"
                >
                  Submit
                </button>
              )}
              {formMessage && (
                <div
                  className={cx(
                    styles.message,
                    styles[`${formMessage.status}-status`]
                  )}
                >
                  {formMessage.message}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </Block>
  );
};

export default Contact;
