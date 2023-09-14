import React from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Block from 'components/block';

import taken from './taken.jpg';

/* Types */
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const cx = classnames.bind(styles);

/**
 * The Skills component is used to display the main 'Skills' section of my portfolio
 */
export const Skills: React.FC<Props> = ({ className, ...props }: Props) => {
  return (
    <Block name="skills" className={cx(styles['skills'], className)} {...props}>
      <h2 className={styles.h2}>
        You&apos;ll be <em>taken</em> with my skills (sorry)
      </h2>
      <div className={styles.content}>
        <Image
          className={styles.image}
          src={taken}
          alt="Liam Neeson speaking on the phone saying 'I will find you and I will help you build a top-tier web application'"
        />
        <p>
          I unfortunately, don’t (yet) have a robot who will bring me pizza. but
          what I do have are a very particular set of skills; skills I have
          acquired over a very long career. Skills that make me an asset for
          people like you.
        </p>
        <p>
          You can use the nifty little widget on the left to view a list of my
          skills. The colours represent how much skill and experience I have in
          them.
        </p>
      </div>
      <div>I HAZ SKILLZ</div>
    </Block>
  );
};

export default Skills;
