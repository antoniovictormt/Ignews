import { signIn, signOut, useSession } from 'next-auth/client';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
  const [session] = useSession();
 
  return session ? (
    <button className={styles.signInButton} type="button" onClick={() => signOut()}>
      <FaGithub color="#04D361" />
      <h5>
        {session.user.name}
      </h5>
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ): (
    <button className={styles.signInButton} type="button" onClick={() => signIn('github')}>
      <FaGithub color="#EBA417" />
      <h5>
        Sign in with GitHub
      </h5>
    </button>
  )
}
