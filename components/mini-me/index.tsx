import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

export const variants = [
  'available',
  'at-desk',
  'blushing',
  'skills',
  'phone',
  'smile',
  'beach'
] as const;

/* Types */
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The variant of the mini-me to use
   */
  variant: (typeof variants)[number];
}

/* import SVGs */
import Phone from './images/phone.svg';
import AtDesk from './images/at-desk.svg';
import Available from './images/available.svg';
import Blushing from './images/blushing.svg';
import Skills from './images/skills.svg';
import Smile from './images/smile.svg';
import Beach from './images/beach.svg';

/* import styles */
import styles from './styles.module.scss';

/**
 * The MiniMe component is used to display a cartoon version of me
 */
export const MiniMe: React.FC<Props> = ({
  variant = 'available',
  className
}: Props) => {
  switch (variant) {
    case 'available':
      return (
        <Image
          className={cx(styles['mini-me'], className)}
          priority
          src={Available}
          alt="A cartoon of me, waving and smiling"
        />
      );
    case 'at-desk':
      return (
        <Image
          className={cx(styles['mini-me'], className)}
          priority
          src={AtDesk}
          alt="A cartoon of me, sittng at my desk and working"
        />
      );
    case 'blushing':
      return <Image priority src={Blushing} alt="A cartoon of me, blushing" />;
    case 'skills':
      return (
        <Image
          className={cx(styles['mini-me'], className)}
          priority
          src={Skills}
          alt="A cartoon of me, gesturing to a panel"
        />
      );
    case 'phone':
      return (
        <Image
          className={cx(styles['mini-me'], className)}
          priority
          src={Phone}
          alt="A cartoon of me, on the phone"
        />
      );
    case 'beach':
      return (
        <Image
          className={cx(styles['mini-me'], className)}
          priority
          src={Beach}
          alt="A cartoon of me, in a swimsuit with an inflatable duck"
        />
      );
    case 'smile':
    default:
      return (
        <Image
          className={cx(styles['mini-me'], className)}
          priority
          src={Smile}
          alt="A cartoon of me, smiling"
        />
      );
  }
};

export default MiniMe;
