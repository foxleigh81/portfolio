'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';

/* Import Stylesheet */
import styles from './styles.module.scss';

import GitHub from './images/github.svg';
import LinkedIn from './images/linkedin.svg';

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

const navLinks = [
  {
    label: 'Home',
    url: '#home'
  },
  {
    label: 'About',
    url: '#about'
  },
  {
    label: 'Skills',
    url: '#skills'
  },
  {
    label: 'Clients',
    url: '#clients'
  },
  {
    label: 'Testimonials',
    url: '#testimonials'
  },
  {
    label: 'Blog',
    url: 'https://www.foxleigh.me'
  }
];

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

const MEDIUM_BREAKPOINT_PX = 768;
// --------------------------------------------------------------------

export type Props = React.HTMLAttributes<HTMLDivElement>;

/**
 * The NavBar component is used to display the top navigation bar
 */
export const NavBar: React.FC<Props> = ({ className }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [navOffsetTop, setNavOffsetTop] = useState<number>(0);
  const [navHeight, setNavHeight] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState(false); // State for viewport size
  const navWrapperRef = useRef<HTMLDivElement>(null);

  // Effect to check viewport size on mount and resize
  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(
        window.matchMedia(`(min-width: ${MEDIUM_BREAKPOINT_PX}px)`).matches
      );
    };

    checkViewport(); // Initial check
    window.addEventListener('resize', checkViewport);

    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Effect to get initial offset and height
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (navWrapperRef.current) {
        setNavOffsetTop(navWrapperRef.current.offsetTop);
        setNavHeight(navWrapperRef.current.offsetHeight);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  // Effect to handle scroll event (debounced)
  useEffect(() => {
    const handleScroll = () => {
      if (navOffsetTop) {
        setIsFixed(window.scrollY > navOffsetTop);
      }
    };

    let scrollTimeout: NodeJS.Timeout | null = null;
    const debouncedHandleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, [navOffsetTop]);

  return (
    <>
      <div
        ref={navWrapperRef}
        className={cx(
          styles['nav-wrapper'],
          { [styles['fixed']]: isFixed },
          className
        )}
      >
        <div
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
        </div>
        <nav
          className={cx(
            styles['nav-bar'],
            styles[`menu-${isMenuOpen ? 'open' : 'closed'}`]
          )}
        >
          <ul className={styles['nav-links']}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  className={styles.link}
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className={styles['social-links']}>
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  className={styles.link}
                  href={link.url}
                  title={link.label}
                  onClick={() => setIsMenuOpen(false)}
                >
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
                <Link
                  className={styles.button}
                  href={button.url}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {button.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Placeholder div rendered only when fixed AND on desktop */}
      {isFixed && isDesktop && <div style={{ height: `${navHeight}px` }} />}
    </>
  );
};

export default NavBar;
