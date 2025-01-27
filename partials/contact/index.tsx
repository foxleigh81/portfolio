import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import classnames from 'classnames';
import Block from 'components/block';
import { MdOutlineEmail, MdOutlineLocalPhone } from 'react-icons/md';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { LuBird } from 'react-icons/lu';

import styles from './styles.module.scss';

/* Types */
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export type Inputs = {
  name: string;
  email?: string;
  contactNumber?: string;
  message: string;
  noSale?: boolean;
  botCheck?: boolean;
};

const cx = classnames.bind(styles);

/* Schema */
const schema = yup.object().shape({
  name: yup.string().required('Please enter your name'),

  // Just validates for a valid email format, not required unless contactNumber is empty.
  email: yup.string().email('Please enter a valid email address'),

  // Only required if email is empty.
  contactNumber: yup.string().when('email', {
    is: (val: string | undefined) => !val, // i.e. empty or undefined
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
  noSale: yup.boolean().oneOf([true], "Sorry, I'm not buying."),
  botCheck: yup
    .boolean()
    .oneOf([true], "Sorry, I'm not willing to work for robots just yet.")
});

const Required = () => <span className={styles.required}>*</span>;

/**
 * The Contact component is used to display the main 'contact' section of my portfolio
 */
export const Contact: React.FC<Props> = ({ className, ...props }: Props) => {

  const [formMessage, setFormMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: Inputs) => {
    try {
      const response = await fetch('/api/form-handler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the form');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);

      // Optional: Add success feedback to the user
      setFormMessage('Thank you for your message! I will get back to you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optional: Add error feedback to the user
      setFormMessage('There was an issue submitting the form. Please try again.');
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
                <a href="https://www.linkedin.com/in/alexfoxleigh">
                  <span>LinkedIn</span>
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
              {/* TODO: Replace with ReCaptcha */}
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

            <div className={styles['input-container--checkbox']}>
              {/* TODO: Replace with ReCaptcha */}
              <div>
                <input
                  type="checkbox"
                  id="botCheck"
                  {...register('botCheck')}
                />
                <label htmlFor="botCheck">
                  I am not a bot
                  <Required />
                </label>
              </div>
              {errors.botCheck && (
                <div className={styles.error}>{errors.botCheck.message}</div>
              )}
            </div>

            <button className={cx('btn-primary', styles.button)} type="submit">
              Submit
            </button>
            {formMessage && <div className={styles.message}>{formMessage}</div>}
          </form>
        </div>
      </div>
    </Block>
  );
};

export default Contact;
