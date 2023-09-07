import React from 'react';
import cx from 'classnames';

/* Import Stylesheet */
import styles from './styles.module.scss';

/* Types */
export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * What type of button is this?
   * @default 'lozenge'
   */
  type?: 'lozenge' | 'link';
  /**
   * The ability to add custom classes
   */
  classes?: string;
  /**
   * What does the button do?
   */
  action: any;
}

/* Render component */
export const Button: React.FC<Props> = ({
  children,
  type,
  classes,
  action
}) => {
  const buttonType = type || 'lozenge';

  if (buttonType === 'lozenge') {
    return (
      <button className={cx(styles.button, classes)} onClick={action}>
        {children}
      </button>
    );
  } else {
    return (
      <a className={cx(styles['button-link'], classes)} onClick={action}>
        {children}
      </a>
    );
  }
};

export default Button;
