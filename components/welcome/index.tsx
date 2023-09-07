import React from 'react';
import { capitalize } from 'lodash';
import cx from 'classnames';

/* Types */

export interface Props {
  /**
   * My current availability status
   */
  status: 'available' | 'unavailable';
  /**
   * The date I expect my status to change
   */
  nextDate?: string;
  /**
   * The mini-me to use
   */
  miniMeName:
    | 'available'
    | 'at-desk'
    | 'blushing'
    | 'skills'
    | 'phone'
    | 'smile'
    | 'beach';
  /**
   * The width of the mini-me
   * @default 'regular'
   */
  miniMeWidth?: 'narrow' | 'regular' | 'wide';
  /**
   * The hour of day in 24 hour format. Used to force a specific time setting
   */
  hour?: number;
}

/* Import Stylesheet */
import styles from './styles.module.scss';

/* Import helpers */
import salutation from './helpers/salutation';

/* Import Components */
import MiniMe from '../mini-me';
import Status from '../status';
import AlphaBanner from '../alpha-banner';

/* Render component */
export const Welcome: React.FC<Props> = ({
  status,
  nextDate,
  miniMeName,
  miniMeWidth,
  hour
}: Props) => {
  const { segment, lightLevel } = salutation(hour || undefined);
  return (
    <div
      className={cx(
        styles['block'],
        styles[lightLevel],
        styles[`status-${status}`]
      )}
    >
      <AlphaBanner />
      <div className={styles.foreground}>
        <MiniMe
          name={miniMeName}
          width={miniMeWidth || 'regular'}
          classes={'mini-me'}
        />
        <div className={cx(styles['greeting'], styles['salutation'])}>
          <h1>{capitalize(segment)}</h1>
          <h2>I'm Alex, I like to make things</h2>
        </div>
        <div className={styles['status-container']}>
          <Status status={status} date={nextDate} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
