import React from 'react';
import { capitalize } from 'lodash';
import cx from 'classnames';

import { variants as miniMeVariants } from '../mini-me';

/* Import Stylesheet */
import styles from './styles.module.scss';

/* Import helpers */
import salutation from './helpers/salutation';

/* Import Components */
import { MiniMe } from '../mini-me';
import { NavBar } from '../nav-bar';
import { Availability, statuses } from '../availability';

/* Types */

export interface Props {
  /**
   * The mini-me to use
   */
  miniMeVariant?: (typeof miniMeVariants)[number];
  /**
   * The hour of day in 24 hour format. Used to force a specific time setting
   */
  hour?: number;
  /**
   * My current work status
   */
  availability?: (typeof statuses)[number];
  /**
   * The date I will be available from
   */
  date?: string;
}
/**
 * The Masthead component is used to display the top section of the page
 */
export const Masthead: React.FC<Props> = ({
  miniMeVariant = 'available',
  hour,
  availability = 'available',
  date
}: Props) => {
  const { segment, lightLevel } = salutation(hour || undefined);
  return (
    <div className={cx(styles['masthead'], styles[lightLevel])}>
      <div className={styles.foreground}>
        <NavBar />
        <div className={styles['content']}>
          <div className={styles['headers']}>
            <h1>
              Alexander
              <br />
              Foxleigh
            </h1>
            <h2>Professional web-dude since 1998</h2>
          </div>
          <MiniMe variant={miniMeVariant} className={styles['mini-me']} />
        </div>
      </div>
      <Availability
        className={styles.status}
        status={availability}
        date={date}
      />
    </div>
  );
};

export default Masthead;
