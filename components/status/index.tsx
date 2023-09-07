import React from 'react';
import format from 'date-fns/format';

/* Types */
export interface Props {
  /**
   * My current work status
   */
  status: string;
  /**
   * The date I expect to be available again
   */
  date?: string;
}

/* Import Stylesheet */
import styles from './styles.module.scss';

/* Import Components */
import { Button } from '../button';

const contactMe = () => window.open('mailto:alex@alexfoxleigh.com');
const downloadCV = () =>
  window.open(
    'https://www.dropbox.com/s/xsoz05u6kvprccx/Alex-Foxleigh-CV.docx?dl=0'
  );

/* Render component */
export const Status: React.FC<Props> = ({ status, date }: Props) => {
  const prettyDate = date ? format(new Date(date), 'do MMMM yyyy') : null;

  let inner;

  switch (status) {
    default:
    case 'available':
      inner = (
        <>
          <p>
            I am currently <strong>available for work.</strong>
          </p>
          <p>For more information, click below:</p>
          <div className={styles.buttons}>
            <Button classes="welcome-button add-shadow" action={contactMe}>
              Get in touch
            </Button>
            <Button classes="add-shadow" action={downloadCV}>
              Download CV
            </Button>
          </div>
        </>
      );
      break;
    case 'unavailable':
      inner = (
        <>
          <p>
            I'm currently <strong>fully-booked.</strong> <br />{' '}
            {date && (
              <>
                I should be available from: <br />{' '}
                <span className={styles.date}>{prettyDate}</span>
              </>
            )}
          </p>
          <div className={styles.buttons}>
            <Button action={downloadCV}>Download CV</Button>
          </div>
        </>
      );
      break;
    case 'holiday':
      inner = (
        <>
          <p>
            I'm currently taking a well-deserved break.{' '}
            {date && <>I should be available again on {prettyDate}</>}
          </p>
        </>
      );
      break;
  }

  return <div className={styles.status}>{inner}</div>;
};

export default Status;
