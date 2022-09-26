import React from 'react';
import Link from 'next/link';

import styles from '../../styles/components/navigation/Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_border}>
        <div className={styles.footer_border_display}></div>
      </div>
      <div className={styles.footer_wrapper}>
        <Link href="/">
          <a className={styles.footer_logo}>Todo Next Nest App</a>
        </Link>
        <nav>
          <Link href="/login">
            <button className="btn-secondary">Logga in</button>
          </Link>
          <Link href="/signup">
            <button className="btn-primary">Registrera</button>
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
