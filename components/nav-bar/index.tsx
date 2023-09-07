import React from 'react';
import { kebabCase } from 'lodash';

/* Import Stylesheet */
import styles from './styles.module.scss';

const navLinks = [
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'Roadmap',
    url: '/roadmap'
  }
];

const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/foxleigh81'
  },
  {
    label: 'LinkedIn',
    url: 'https://alexfoxleigh.com'
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/foxleigh81'
  },
  {
    label: 'Behance',
    url: 'https://alexfoxleigh.com'
  },
  {
    label: 'Blog',
    url: 'https://alexfoxleigh.com'
  }
];

/* Render component */
export const NavBar: React.FC = () => (
  <nav className={styles['nav-bar']}>
    <ul className={styles['nav-links']}>
      {navLinks.map((link) => (
        <li>
          <a href={link.url}>{link.label}</a>
        </li>
      ))}
    </ul>
    <ul className={styles['social-links']}>
      {socialLinks.map((link) => (
        <li>
          <a
            className={styles[kebabCase(link.label)]}
            href={link.url}
            title={link.label}
          >
            <span>{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
