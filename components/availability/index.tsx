import React from 'react';
import { format } from 'date-fns';
import classnames from 'classnames';
import Link from 'next/link';

export const statuses = ['available', 'unavailable', 'available-soon', 'freelance'] as const;

/* Types */
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * My current work status
   * @default 'available'
   */
  status: (typeof statuses)[number];
  /**
   * The date I expect to be available again
   */
  date?: string;
}

/* Import Stylesheet */
import styles from './styles.module.scss';

const cx = classnames.bind(styles);

const returnStatus = (status: string, date?: string) => {
  const prettyDate = date ? format(new Date(date), 'do MMMM yyyy') : null;
  switch (status) {
    case 'available':
      return "Good news! I'm currently available.";
    case 'unavailable':
      return "Sorry, I'm currently unavailable.";
    case 'available-soon':
      return `I'll be available for a new role on ${prettyDate}.`;
    case 'freelance':
      return 'I am currently accepting small freelance projects.';
    default:
      return 'Available';
  }
};

/* Render component */
export const Availability: React.FC<Props> = ({ status = 'available', date, className }: Props) => {
  return (
    <div className={cx(styles['availability'], styles[`status-${status}`], className)}>
      <div className={styles.content}>
        <p>{returnStatus(status, date)}</p>
        <Link href="#contact" className={styles['button']}>
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default Availability;
