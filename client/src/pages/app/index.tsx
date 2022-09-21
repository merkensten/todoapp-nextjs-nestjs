import React from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/AuthContext';

function App() {
  const router = useRouter();
  const authContext = React.useContext(AuthContext);

  React.useEffect(() => {
    // checks if the user is authenticated
    if (!authContext.isUserAuthenticated()) {
      router.push('/login');
    }
  }, [authContext, router]);

  function logoutUser() {
    authContext.logoutUser();
    router.push('/login');
  }

  return (
    <div>
      <h1>Homepage för appen</h1>
      <button onClick={logoutUser}>Logga ut</button>
    </div>
  );
}

export default App;
