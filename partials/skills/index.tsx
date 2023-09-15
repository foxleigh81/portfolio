import React from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Block from 'components/block';
import { SkillGrid } from 'components/skill-grid';

import taken from './taken.jpg';

// TODO: Replace mock with api call
import skillsMock from 'lib/mocks/skills';

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
        You&apos;ll be <em>taken</em> with my skills
      </h2>
      <div className={styles.content}>
        <Image
          priority
          className={styles.image}
          src={taken}
          alt="Liam Neeson speaking on the phone saying 'I will find you and I will help you build a top-tier web application'"
        />
        <p>
          I unfortunately, don&apos;t (yet) have a robot who will bring me
          pizza. but what I do have are a very particular set of skills; skills
          I have acquired over a very long career. Skills that make me an asset
          for people like you.
        </p>
        <p>
          You can use this nifty little widget to view a list of my skills. The
          longer the bar, the more experience I have with that particular skill.
        </p>
      </div>
      <SkillGrid skills={skillsMock} />
    </Block>
  );
};

export default Skills;
