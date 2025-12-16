import React from 'react';
import cx from 'classnames';

import { variants as miniMeVariants } from '../mini-me';

/* Import Stylesheet */
import styles from './styles.module.scss';

/* Import helpers */

/* Import Components */
import { MiniMe } from '../mini-me';
import { NavBar } from '../nav-bar';

/* Types */

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The mini-me to use
   */
  miniMeVariant?: (typeof miniMeVariants)[number];

}
/**
 * The Masthead component is used to display the top section of the page
 */
export const Masthead: React.FC<Props> = ({
  miniMeVariant = 'available',
  className,
  ...props
}: Props) => {
  return (
    <div {...props} className={cx(styles['masthead'], className)}>
      <div className={styles.foreground}>
        <NavBar />
        <div className={styles['content']}>
          <div className={styles['headers']}>
            <h1>
              Alexander
              <br />
              Foxleigh
            </h1>
            <h2>King of the nerds!</h2>
          </div>
          <MiniMe variant={miniMeVariant} className={styles['mini-me']} />
        </div>
      </div>
    </div>
  );
};

export default Masthead;
