import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Block from 'components/block';

import testimonials from 'lib/mocks/testimonials';
import Image from 'next/image';

/* Types */
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const cx = classnames.bind(styles);

/**
 * The Testimonials component is used to display the main 'Testimonials' section of my portfolio
 */
export const Testimonials: React.FC<Props> = ({
  className,
  ...props
}: Props) => {
  return (
    <Block
      name="testimonials"
      className={cx(styles['testimonials'], className)}
      {...props}
    >
      <div className={styles.content}>
        <div className={styles.top}>
          <h2>I seem to be liked</h2>

          <p>
            I’ve had some great feedback from clients over the years. Here is a
            small selection of some of my favourites, you can also see a more
            complete list on my{' '}
            <a href="https://www.linkedin.com/in/alexfoxleigh/">
              LinkedIn page
            </a>
            .
          </p>
        </div>

        <div className={styles.testimonials}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonial}>
              <svg
                className={styles.quoteicon}
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 106 75.5"
              >
                <g>
                  <g id="Layer_1">
                    <path d="M106,2.9c-.4.8-1,1.3-1.7,1.7-2.5,1.4-4.9,2.8-7.4,4.3-3.7,2.3-7.1,4.8-10.1,7.9-1.8,1.9-3.4,3.9-4.6,6.1-.2.4-.4.8-.5,1.2-.2.6,0,.8.6.9,1.2.2,2.5.3,3.7.5,8,1.8,13.7,6.4,17.4,13.6,3.6,7.2,3.6,14.7.2,21.9-3.6,7.6-9.8,12.5-18.2,14-10.8,1.9-20.3-2.8-25.8-11.3-2.2-3.4-3.4-7.3-3.7-11.3-.6-7.2.7-14.2,3.1-21,4.3-11.8,12.3-20.3,23.5-25.7,6-2.9,12.3-4.7,18.9-5.6.5,0,1-.1,1.5-.2.3,0,.5,0,.8,0,1.2.2,2,.8,2.4,2v.9Z" />
                    <path d="M48.5,0c1.2.4,1.9,1.3,1.9,2.5,0,.8-.3,1.4-1,1.9-1.1.6-2.1,1.2-3.2,1.8-3.5,2-7,4-10.1,6.5-3.2,2.6-6.3,5.4-8.5,9-.5.8-1,1.8-1.4,2.6-.2.4,0,.7.4.7,1.2.2,2.3.3,3.5.5,6.2,1.2,11.1,4.4,15,9.3,2.7,3.4,4.6,7.3,5.1,11.7.4,4,.5,8.1-1,12-2.1,5.6-5.4,10.2-10.6,13.3-5,3.1-10.4,4.2-16.2,3.6-7.9-.9-13.9-4.8-18.3-11.4-2.2-3.3-3.3-7-3.8-10.8C.2,52.6,0,52,0,51.5c0-1.3,0-2.6,0-3.9,0-.4,0-.8.1-1.2.5-5.1,1.5-10.1,3.2-14.9,3.5-9.6,9.5-17.3,18.2-22.8C28.7,4.2,36.5,1.7,44.8.3c.8-.1,1.5-.2,2.3-.3.5,0,.9,0,1.4,0Z" />
                  </g>
                </g>
              </svg>
              <div className={styles.quote}>{testimonial.quote}</div>
              <div className={styles.author}>
                <Image className={styles.photo} src={testimonial.photo} alt={`Photo of ${testimonial.name}`} width={80} height={80} />
                <div className={styles.details}>
                  <div className={styles.name}>{testimonial.name}</div>
                  <div className={styles.role}>
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Block>
  );
};

export default Testimonials;
