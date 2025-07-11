import React from 'react';
import cx from 'classnames';

import { variants as miniMeVariants } from '../mini-me';

/* Import Stylesheet */
import styles from './styles.module.scss';

/* Import helpers */

/* Import Components */
import { MiniMe } from '../mini-me';
import { NavBar } from '../nav-bar';
import { Availability, statuses } from '../availability';

/* Types */

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The mini-me to use
   */
  miniMeVariant?: (typeof miniMeVariants)[number];
  /**
   * The date I will be available from
   */
  date?: string;
  /**
   * My current work status
   */
  availability?: (typeof statuses)[number];
}
/**
 * The Masthead component is used to display the top section of the page
 */
export const Masthead: React.FC<Props> = ({
  miniMeVariant = 'available',
  date = '2025-07-14',
  availability = 'available',
  className,
  ...props
}: Props) => {
  return (
    <div {...props} className={cx(styles['masthead'], className)}>
      <Availability
        className={styles.status}
        status={availability}
        date={date}
      />
      <div className={styles.foreground}>
        <NavBar />
        <div className={styles['content']}>
          <div className={styles['headers']}>
            <h1>
              Alexander
              <br />
              Foxleigh
            </h1>
            <h2>Lead Frontend Engineer / Tech Lead</h2>
          </div>
          <MiniMe variant={miniMeVariant} className={styles['mini-me']} />
        </div>
      </div>
    </div>
  );
};

export default Masthead;
