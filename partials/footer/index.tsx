import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

/* Types */
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const cx = classnames.bind(styles);

const currentYear = new Date().getFullYear();
/**
 * The Footer component is used to display the footer of the page
 */
export const Footer: React.FC<Props> = ({ className, ...props }: Props) => {
  return (
    <footer className={cx(styles['footer'], className)} {...props}>
      <div className={styles['content']}>
        <p>
          This site was built using <a href="https://nextjs.org">Next.js</a> and
          is hosted on <a href="https://vercel.com">Vercel</a>. The source code
          is available on{' '}
          <a href="http://github.com/foxleigh81/portfolio">GitHub</a>.
        </p>
        <p>
          {' '}
          You can see the roadmap for this site on{' '}
          <a href="http://github.com/foxleigh81/portfolio/issues">
            Github Issues
          </a>
          .
        </p>
      </div>
      <p className={styles['copy']}>
        The content of this site is &copy; {currentYear} Alex Foxleigh. <br />{' '}
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
