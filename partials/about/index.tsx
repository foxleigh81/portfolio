import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Block from 'components/block';

/* Types */
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const cx = classnames.bind(styles);

/**
 * The About component is used to display the main 'About me' section of my portfolio
 */
export const About: React.FC<Props> = ({ className, ...props }: Props) => {
  return (
    <Block name="about" className={cx(styles['about'], className)} {...props}>
      <div className={styles.content}>
        <h2>About Me</h2>
        <p>
          I have been a web developer since 1998, I initially started when the
          term was <em>&apos;web master&apos;</em> and we had to build the
          entire site from initial design all the way up to deployment. I have
          since specialised in front-end development and project architecture,
          usually as the development lead.
        </p>

        <p>
          My primary skills centre around JavaScript, primarily the React and
          NextJS frameworks, I have extensive experience with front-end and
          back-end NodeJS. I&apos;m a strong advocate of Web Standards,
          Usability, Accessibility and the DRY principle.
        </p>

        {/*TODO: <p>
            If you are interested in knowing more about my career history, here
            is a full account from 1998 to present.
          </p> */}
      </div>
      <div className={styles.accomplishments}>
        <h3>Notable accomplishments</h3>
        <ul>
          <li>
            Architected, designed and supported a suite of developer tools for a
            major UK Intelligence Agency. Allowing developers to build over 70
            applications using the same codebase.
          </li>
          <li>
            Conceived and co-founded the{' '}
            <a href="https://design-system.digital.mod.uk/">
              MOD UK Design System.
            </a>
          </li>
          <li>
            Saved DEFRA hundreds of thousands of pounds by building the
            &apos;Greenhouse&apos; automatic test generator.
          </li>
          <li>
            Convinced Unilever stakeholders to change their development
            approach, saving them countless staff-hours and potentially hundreds
            of thousands of pounds as well as increasing consumer appeal in the
            final product.
          </li>
        </ul>
      </div>
    </Block>
  );
};

export default About;
