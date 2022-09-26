import React from 'react';
import styles from '../../styles/components/navigation/Header.module.scss';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/AuthContext';
import Link from 'next/link';

function GuestHeader() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.header_logo}>Todo Next.js Nest Js App</a>
      </Link>
      <nav>
        <Link href="/login">
          <button className="btn-secondary">Logga in</button>
        </Link>
        <Link href="/signup">
          <button className="btn-primary">Registrera</button>
        </Link>
      </nav>
    </header>
  );
}
function AppHeader() {
  const { logoutUser } = React.useContext(AuthContext);
  const router = useRouter();
  function logoutUserFunc() {
    logoutUser();
    router.push('/login');
  }
  return (
    <header className={styles.header}>
      <Link href="/app">
        <a className={styles.header_logo}>Todo Next.js Nest Js App</a>
      </Link>
      <nav>
        <Link href="/app/konto">
          <button className="btn-secondary">Mitt konto</button>
        </Link>
        <button className="btn-primary" onClick={logoutUserFunc}>
          Logga ut
        </button>
      </nav>
    </header>
  );
}

function Header() {
  const { logoutUser, isUserAuthenticated } = React.useContext(AuthContext);
  // const router = useRouter();
  // function logoutUserFunc() {
  //   logoutUser();
  //   router.push('/login');
  // }
  return (
    <>
      {isUserAuthenticated && <AppHeader />}
      {!isUserAuthenticated && <GuestHeader />}
    </>
  );
}

export default Header;
