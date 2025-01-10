import React from 'react';
import cx from 'classnames';
import Image from 'next/image';

/* Import Stylesheet */
import styles from './styles.module.scss';

/* Types */
export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The text to display in the badge
   */
  text: string;
  /**
   * The icon to display in the badge (uses https://simpleicons.org/)
   */
  icon?: string;
  /**
   * The foreground color of the badge (defaults to white)
   */
  foreground?: string;
  /**
   * The background color of the badge (defaults to grey)
   */
  background?: string;
  /**
   * Optional alt text for the icon
   */
  altText?: string;
}

/**
 * The Badge component displays a bit of text alongside an icon with a background color
 */
export const Badge: React.FC<Props> = ({
  text,
  icon,
  foreground = '#fff', // Default foreground
  background = '#444', // Default background
  altText,
  className,
  ...props
}) => {
  return (
    <span
      className={cx(styles.badge, { 
        [styles['no-icon']]: !icon
      }, className)}
      style={{ backgroundColor: background, color: foreground }}
      {...props}
    >
      {icon && (<Image
        className={styles.icon}
        src={`https://cdn.simpleicons.org/${icon}/${foreground.replace('#', '')}`}
        alt={altText || `${text} icon`}
        width={18} // Adjust width as needed
        height={18} // Adjust height as needed
        unoptimized // Since we're using an external URL
      />)}
      {text}
    </span>
  );
};

export default Badge;