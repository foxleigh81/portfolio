import React from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Block from 'components/block';
import Badge from 'components/badge';

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
        <div className={styles.top}>
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
        </div>
        <div className={styles['skills-container']}>
          {
            skillsMock.map((type) => (
              <div key={type.title} className={styles['skill-type']}>
                <h3>{type.title}</h3>
                <div className={styles['skills-list']}>
                  {
                    type.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        text={skill.name}
                        icon={skill.slug}
                        foreground={skill.foreground}
                        background={skill.background}
                      />
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      
      
    </Block>
  );
};

export default Skills;
