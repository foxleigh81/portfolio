import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Block from 'components/block';
import FoxysLabBanner from 'components/foxys-lab-banner';

/* Types */
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const cx = classnames.bind(styles);

/**
 * The About component is used to display the main 'About me' section of my portfolio
 */
export const About: React.FC<Props> = ({ className, ...props }: Props) => {
  return (
    <>
      <FoxysLabBanner />
      <Block name="about" className={cx(styles['about'], className)} {...props}>
        <div className={styles.content}>
          <h2>About Me</h2>

          <p>
            Im a senior front-end engineer and technical lead, with a focus on
            building scalable, high-performance web apps and helping the teams
            behind them to do their best work. I care just as much about the
            architecture and developer experience as I do about the final
            product.
          </p>

          <p>
            React, Next.js, Node.js, and Storybook are my tools of choice, I
            love to create design systems and reusable component libraries that
            actually make life easier for the whole team. I like to get stuck in
            from start to finish, shaping the technical direction, mentoring
            devs, and making sure what we&apos;re building is fast, maintainable
            and enjoyable to use.
          </p>
          <p>
            I&apos;m big on accessibility, usability, and keeping things up to
            proper web standards — basically, building things that work well for
            everyone, while keeping an eye on both the tech needs and the bigger
            business goals.
          </p>
        </div>
        <div className={styles.accomplishments}>
          <h3>Notable accomplishments</h3>
          <ul>
            <li>
              Architected, designed and supported a suite of developer tools for
              a major UK Intelligence Agency. Allowing developers to build over
              70 applications using the same codebase.
            </li>
            <li>
              Conceived and co-founded the{' '}
              <a href="https://design-system.navy.digital.mod.uk/">
                Royal Navy Design System.
              </a>
            </li>
            <li>
              Saved DEFRA hundreds of thousands of pounds by building the
              &apos;Greenhouse&apos; automatic test generator.
            </li>
            <li>
              Convinced Unilever stakeholders to change their development
              approach, saving them countless staff-hours and potentially
              hundreds of thousands of pounds as well as increasing consumer
              appeal in the final product.
            </li>
          </ul>
        </div>
      </Block>
    </>
  );
};

export default About;
