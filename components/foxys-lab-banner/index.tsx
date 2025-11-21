import React from 'react';
import Image from 'next/image';

/* Import Stylesheet */
import styles from './styles.module.scss';

/**
 * The FoxysLabBanner component displays a banner with a purple gradient background and promotional text
 */
export const FoxysLabBanner: React.FC = () => {
  return (
    <a
      href="https://www.youtube.com/@foxyslab"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.banner}
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
