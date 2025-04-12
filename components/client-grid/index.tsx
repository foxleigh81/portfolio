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
              {/* SVG for hover glow border */}
              <svg
                className={styles.glowBorder}
                viewBox="0 0 100 100" // Use a viewBox for scalable coordinates
                preserveAspectRatio="none" // Allow stretching
              >
                <defs>
                  {/* Define the rainbow gradient */}
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
                    {/* Add SMIL animation to rotate the gradient */}
                    <animateTransform
                      attributeName="gradientTransform"
                      type="rotate"
                      from="0 50 50" // Rotate from 0 degrees around center (50,50)
                      to="360 50 50" // Rotate to 360 degrees around center
                      dur="4s" // Match previous CSS duration
                      repeatCount="indefinite"
                    />
                  </linearGradient>
                  {/* Define the blur filter */}
                  <filter id="blurMe">
                    <feGaussianBlur stdDeviation="3" />
                    {/* Adjust deviation for more/less blur */}
                  </filter>
                </defs>
                {/* Rounded rectangle using the gradient stroke AND blur */}
                <rect
                  x="2.5" // Position inset by half stroke width
                  y="2.5"
                  width="95" // Size adjusted for stroke width
                  height="95"
                  rx="17.5" // Align stroke center (li 20 - stroke 5/2)
                  fill="none"
                  stroke="url(#rainbowGradient)"
                  strokeWidth="5" // Match desired border thickness
                  filter="url(#blurMe)" // Apply the blur filter
                />
              </svg>
              <div className={styles.contentWrapper}>
                {client.logo ? (
                  <Image
                    className={styles.logo}
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
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
