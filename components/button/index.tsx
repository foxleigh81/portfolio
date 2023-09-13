import React from 'react';
import cx from 'classnames';

/* Import Stylesheet */
import styles from './styles.module.scss';

export const variants = ['primary', 'secondary', 'availability'] as const;

/* Types */
export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The button variant
   * @default 'primary'
   */
  variant?: (typeof variants)[keyof typeof variants];
}

/**
 * The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 * It can also be used to navigate to a new page.
 */
export const Button: React.FC<Props> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <button
      className={cx(styles.button, styles[`button-${variant}`], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
