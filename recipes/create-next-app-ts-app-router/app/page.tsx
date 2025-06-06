import styles from './page.module.css';
import {SignInButton, SignedIn, SignOutButton, SignedOut} from '@asgardeo/nextjs';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <SignedOut>
            <SignInButton className={styles.primary}>Sign In</SignInButton>
          </SignedOut>
          <SignedIn>
            <SignOutButton className={styles.secondary}>Sign Out</SignOutButton>
          </SignedIn>
        </div>
      </main>
    </div>
  );
}
