'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import classnames from 'classnames';

import ClientDescription from 'components/client-description';
/* Types */
export interface Client {
  name: string;
  date_started: string;
  date_ended: string;
  description: string;
  role: string;
  logo?: string;
  included: boolean;
}

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  clients: Client[];
}

/* == Local GlowBorder Component (Reverted to simple version) == */
const GlowBorder: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className} // Apply passed className
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="rainbowGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="hsl(0, 100%, 50%)" />
          <stop offset="16%" stopColor="hsl(60, 100%, 50%)" />
          <stop offset="33%" stopColor="hsl(120, 100%, 50%)" />
          <stop offset="50%" stopColor="hsl(180, 100%, 50%)" />
          <stop offset="66%" stopColor="hsl(240, 100%, 50%)" />
          <stop offset="83%" stopColor="hsl(300, 100%, 50%)" />
          <stop offset="100%" stopColor="hsl(360, 100%, 50%)" />
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="6s"
            repeatCount="indefinite"
          />
        </linearGradient>
        <filter id="blurMe">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <rect
        x="2.5"
        y="2.5"
        width="95"
        height="95"
        rx="17.5"
        fill="none"
        stroke="url(#rainbowGradient)"
        strokeWidth="10"
        filter="url(#blurMe)"
      />
    </svg>
  );
};
/* == End Local GlowBorder Component == */

/* Import Stylesheet */
import styles from './styles.module.scss';

const cx = classnames.bind(styles);

/**
 * The component to display my clients in a nice way
 */
export const ClientGrid: React.FC<Props> = ({ clients, className, ...props }: Props) => {
  const [activeClient, setActiveClient] = useState<Client | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleDialogOpen = (client: Client) => {
    setActiveClient(client);
    dialogRef.current?.showModal();
  };

  const handleDialogClose = () => {
    dialogRef.current?.close();
  };

  return (
    <section className={cx(styles['client-grid'], className)} {...props}>
      <ul className={styles.clients_list}>
        {clients
          .filter(client => client.included)
          .map(client => (
            <li
              key={client.name}
              className={cx(styles.client, activeClient?.name === client.name && styles.active)}
              onClick={() => handleDialogOpen(client)}
              onKeyUp={e => e.key === 'Enter' && handleDialogOpen(client)}
              tabIndex={0}
            >
              {/* Keep two identical instances */}
              <GlowBorder className={styles.glowBorder} />
              <GlowBorder className={styles.glowBorder} />
              <div className={styles.contentWrapper}>
                {client.logo ? (
                  <Image
                    className={styles.logo}
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 768px) 162px, 185px"
                  />
                ) : (
                  client.name
                )}
              </div>
            </li>
          ))}
      </ul>

      <dialog className={styles['modal']} ref={dialogRef}>
        <button
          autoFocus
          onClick={handleDialogClose}
          onKeyUp={e => e.key === 'Esc' && handleDialogClose()}
          className={styles.close}
        >
          Close
        </button>
        <ClientDescription {...(activeClient as Client)} className={styles['client-overlay']} />
      </dialog>
    </section>
  );
};

export default ClientGrid;
