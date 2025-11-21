import React from 'react';
import cx from 'classnames';
import Image from 'next/image';

/* Import Stylesheet */
import styles from './styles.module.scss';

/* Types */
export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

/**
 * The FoxysLabBanner component displays a black bar with white text
 */
export const FoxysLabBanner: React.FC<Props> = ({ className, ...props }) => {
  return (
    <a
      href="https://www.youtube.com/@foxyslab"
      target="_blank"
      rel="noopener noreferrer"
      className={cx(styles.banner, className)}
      {...props}
    >
      <div className={styles.grid}>
        <div>
          <Image
            src="/images/logos/foxys-lab-logo.png"
            alt="Foxys Lab Logo"
            width={100}
            height={100}
          />
        </div>
        <div>
          I now have a YouTube channel about IoT, Networking and Smarthome tech!
        </div>
      </div>
    </a>
  );
};

export default FoxysLabBanner;
