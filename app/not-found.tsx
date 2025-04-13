import Link from 'next/link';
import Masthead from 'components/masthead';
import styles from './not-found.module.scss'; // We can create a specific style module if needed

export default function NotFound() {
  return (
    <main className={styles.container}>
      {/* Use Masthead with the 'aagh' variant */}
      <Masthead id="not-found" miniMeVariant="aagh" />

      <div className={styles.content}>
        <h1>404 - Page Not Found</h1>
        <p>How did you get in here?! You&apos;re not supposed to be here!</p>
        <p>Stop messing around and go back home.</p>
        <Link href="/">Go back home</Link>
      </div>
    </main>
  );
}
