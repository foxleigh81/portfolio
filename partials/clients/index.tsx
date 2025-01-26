import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Block from 'components/block';
import { ClientGrid } from 'components/client-grid';

// TODO: Replace mock with api call
import clientsMock from 'lib/mocks/clients';

/* Types */
export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const cx = classnames.bind(styles);

/**
 * The Clients component is used to display the main 'Clients me' section of my portfolio
 */
export const Clients: React.FC<Props> = ({ className, ...props }: Props) => {
  return (
    <Block
      name="clients"
      className={cx(styles['clients'], className)}
      {...props}
    >
      <div className={styles.content}>
        <h2>Who I&apos;ve worked with</h2>

        <p>
          I&apos;ve been incredibly lucky over the years to work with some truly
          excellent clients and have had some amazing opportunities to make a
          difference, from being the co-founder of the Navy&apos;s design system to
          being on the Cabinet Office team who helped to develop the COVID-19
          dashboards for the daily briefing.
        </p>

        <p>Here are just a few of my amazing former clients. </p>

        <ClientGrid clients={clientsMock} />
      </div>
    </Block>
  );
};

export default Clients;
