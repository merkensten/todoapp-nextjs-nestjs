import React from 'react';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';
import { AuthContext } from '../../../context/AuthContext';

function Header() {
  const { logoutUser, isUserAuthenticated } = React.useContext(AuthContext);
  const router = useRouter();
  function logoutUserFunc() {
    logoutUser();
    router.push('/login');
  }
  return (
    <div>
      <h1>Header</h1>
      {isUserAuthenticated && (
        <button onClick={logoutUserFunc}>Logga ut</button>
      )}
    </div>
  );
}

export default Header;
