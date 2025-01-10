import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Block from 'components/block';




/* Types */
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const cx = classnames.bind(styles);

/**
 * The Testimonials component is used to display the main 'Testimonials' section of my portfolio
 */
export const Testimonials: React.FC<Props> = ({ className, ...props }: Props) => {
  return (
    <Block
      name="testimonials"
      className={cx(styles['testimonials'], className)}
      {...props}
    >
      <div className={styles.content}>
        <h2>I seem to be liked</h2>

        <p>
        I’ve had some great feedback from clients over the years. Here is a small selection of some of my favourites, you can also see a more complete list on my <a href="https://www.linkedin.com/in/alexfoxleigh/">LinkedIn page</a>.
        </p>

        
        
      </div>
    </Block>
  );
};

export default Testimonials;
