import React from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/AuthContext';

function Konto() {
  const router = useRouter();
  const { isUserAuthenticated } = React.useContext(AuthContext);

  React.useEffect(() => {
    // checks if the user is authenticated
    if (isUserAuthenticated === false) {
      router.push('/login');
    }
  }, [router, isUserAuthenticated]);
  return (
    <div>
      <h1>Hantera Konto</h1>
    </div>
  );
}

export default Konto;
