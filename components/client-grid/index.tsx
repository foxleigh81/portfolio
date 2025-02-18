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
export const ClientGrid: React.FC<Props> = ({
  clients,
  className,
  ...props
}: Props) => {
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
          .filter((client) => client.included)
          .map((client) => (
            <li
              key={client.name}
              className={cx(
                styles.client,
                activeClient?.name === client.name && styles.active
              )}
              onClick={() => handleDialogOpen(client)}
              onKeyUp={(e) => e.key === 'Enter' && handleDialogOpen(client)}
              tabIndex={0}
            >
              {client.logo && (
                <Image
                  className={styles.logo}
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                />
              )}
              {client.name}
            </li>
          ))}
      </ul>

      <dialog className={styles['modal']} ref={dialogRef}>
        <button
          autoFocus
          onClick={handleDialogClose}
          onKeyUp={(e) => e.key === 'Esc' && handleDialogClose()}
          className={styles.close}
        >
          Close
        </button>
        <ClientDescription
          {...(activeClient as Client)}
          className={styles['client-overlay']}
        />
      </dialog>
    </section>
  );
};

export default ClientGrid;
