import React from 'react';
import cx from 'classnames';

/* Types */
export interface Props {
  /**
   * The name of the mini-me to use
   */
  name:
    | 'available'
    | 'at-desk'
    | 'blushing'
    | 'skills'
    | 'phone'
    | 'smile'
    | 'beach';
  /**
   * The width (in pixels) of the mini-me
   * @default: 200
   */
  width?: 'narrow' | 'regular' | 'wide';
  /**
   * The position of the mini-me, can be one of 'left', 'right' or 'none'
   * @default: 'right'
   */
  position?: 'left' | 'right' | 'none';
  /**
   * The ability to add custom classes
   */
  classes?: string;
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

/* Render component */
export const MiniMe: React.FC<Props> = ({
  name,
  width,
  position,
  classes
}: Props) => {
  const selectMiniMe = (name: string): any => {
    switch (name) {
      case 'available':
        return <img src={Available} />;
      case 'at-desk':
        return <img src={AtDesk} />;
      case 'blushing':
        return <img src={Blushing} />;
      case 'skills':
        return <img src={Skills} />;
      case 'phone':
        return <img src={Phone} />;
      case 'beach':
        return <img src={Beach} />;
      case 'smile':
      default:
        return <img src={Smile} />;
    }
  };

  return (
    <div className={cx(styles['mini-me'], styles[`w-${width}`], classes)}>
      {selectMiniMe(name)}
    </div>
  );
};

export default MiniMe;
