import React from 'react';
import classnames from 'classnames';
import { format } from 'date-fns';

/* Types */
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /* The name of the client */
  name: string;
  /* The date the project started */
  date_started: string;
  /* The date the project ended (defaults to 'Present') */
  date_ended?: string;
  /* A description of the project */
  description: string;
  /* My role in the project */
  role: string;
  /** The logo for the client */
  logo?: string;
}

/* Import Stylesheet */
import styles from './styles.module.scss';
import Image from 'next/image';

const cx = classnames.bind(styles);

/**
 * The ClientDescription component is used to display the an overlay containing a description of the client
 * and the work I did for them
 */
export const ClientDescription: React.FC<Props> = ({
  name,
  date_started,
  date_ended,
  description,
  role,
  logo,
  className
}: Props) => {
  return (
    <section className={cx(styles['client-description'], className)}>
      {
        logo && (
          <div className={styles.logo}>
            <Image
              src={logo}
              alt={`${name} logo`}
              width={250}
              height={250}
            />
          </div>
        )
      }
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.meta}>
          <span className={styles.role}>{role}</span>
          <span className={styles.date}>
            {date_started && format(new Date(date_started), 'MMM yyyy')} -{' '}
            {date_ended ? format(new Date(date_ended), 'MMM yyyy') : 'Present'}
          </span>
        </div>
        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </section>
  );
};

export default ClientDescription;
