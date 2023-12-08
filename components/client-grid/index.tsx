import React, { useState } from 'react';
import classnames from 'classnames';

import ClientDescription from 'components/client-description';
/* Types */
export interface Client {
  name: string;
  date_started: string;
  date_ended: string;
  description: string;
  role: string;
  logo_url?: string;
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

  return (
    <section className={styles['client-grid']} {...props}>
      <ul className={styles.clients_list}>
        {clients.map((client) => (
          <li
            key={client.name}
            className={cx(
              styles.client,
              activeClient?.name === client.name && styles.active
            )}
            onClick={() => setActiveClient(client)}
          >
            <span className={styles.client__name}>{client.name}</span>
          </li>
        ))}
      </ul>
      {activeClient && (
        <ClientDescription
          {...activeClient}
          className={styles['client_overlay']}
        />
      )}
    </section>
  );
};

export default ClientGrid;
