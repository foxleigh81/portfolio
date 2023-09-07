import React from 'react';

/* Types */
export interface Props {
  /**
   * The name of the thing
   */
  name: string;
  /**
   * The colour of the thing
   */
  colour: string;
}

/* Import Stylesheet */
import styles from './styles.module.scss';

/* Render component */
export const Block: React.FC<Props> = ({ name, colour }: Props) => (
  <div className={styles[colour]}>
    This is an example component, the name provided to it was {name}
  </div>
);

export default Block;
