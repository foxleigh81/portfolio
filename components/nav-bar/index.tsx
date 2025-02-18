import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

/* Import Stylesheet */
import styles from './styles.module.scss';

import GitHub from './images/github.svg';
import LinkedIn from './images/linkedin.svg';
import Link from 'next/link';

const cx = classNames.bind(styles);

const buttons = [
  {
    label: 'Download CV',
    url: 'https://www.dropbox.com/scl/fi/2inpdkwsncc4kkb3vkw06/alex-foxleigh-tech-lead.docx?rlkey=zwxk53c9nynx63kh8dv5omkxt&dl=0',
    variant: 'primary'
  },
  {
    label: 'Get in touch',
    url: '#contact',
    variant: 'secondary'
  }
] as const;

// const navLinks = [
//   {
//     label: 'Home',
//     url: '#home'
//   },
//   {
//     label: 'About',
//     url: '#about'
//   },
//   {
//     label: 'Skills',
//     url: '#skills'
//   },
//   {
//     label: 'Clients',
//     url: '#clients'
//   },
//   {
//     label: 'Testimonials',
//     url: '#testimonials'
//   },
// {
//   label: 'Blog',
//   url: '/blog'
// }
// ];

const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/foxleigh81',
    icon: GitHub
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alexfoxleigh',
    icon: LinkedIn
  }
];

export type Props = React.HTMLAttributes<HTMLDivElement>;

/**
 * The NavBar component is used to display the top navigation bar
 */
export const NavBar: React.FC<Props> = ({ className }: Props) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* <div
        className={cx(
          styles['burger'],
          styles[`burger-${isMenuOpen ? 'open' : 'closed'}`]
        )}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        title={`${isMenuOpen ? 'Close' : 'Open'} menu`}
      >
        <div className={styles['burger-bar']} />
        <div className={styles['burger-bar']} />
        <div className={styles['burger-bar']} />
      </div> */}
      <nav
        className={cx(
          styles['nav-bar'],
          // styles[`menu-${isMenuOpen ? 'open' : 'closed'}`],
          className
        )}
      >
        {/* <ul className={styles['nav-links']}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a className={styles.link} href={link.url}>
                {link.label}
              </a>
            </li>
          ))}
        </ul> */}
        <ul className={styles['social-links']}>
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a className={styles.link} href={link.url} title={link.label}>
                <Image
                  className={styles.icon}
                  priority
                  src={link.icon}
                  alt={link.label}
                />
              </a>
            </li>
          ))}
        </ul>
        <ul className={styles['button-links']}>
          {buttons.map((button) => (
            <li key={button.label}>
              <Link className={styles.button} href={button.url}>
                {button.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
