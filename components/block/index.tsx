import React from 'react';
import classnames from 'classnames';

export const names = [
  'about',
  'skills',
  'clients',
  'testimonials',
  'contact'
] as const;

/* Types */
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * My current work status
   * @default 'available'
   */
  name: (typeof names)[number];
}

/* Import Stylesheet */
import styles from './styles.module.scss';

const cx = classnames.bind(styles);

/**
 * The block component is used to display the main blocks of content of the page
 * It is mainly just a styled wrapper for the content
 */
export const Block: React.FC<Props> = ({
  name,
  className,
  children,
  ...props
}: Props) => {
  return (
    <section
      className={cx(styles['block'], styles[`block-${name}`], className)}
      {...props}
    >
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Block;
