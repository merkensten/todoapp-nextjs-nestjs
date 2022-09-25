import React from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/AuthContext';

// components
import { Todos } from '../../components/todos';

// Utils
import { getTokenInfo } from '../../utils';

function App() {
  const router = useRouter();
  const { isUserAuthenticated, getToken } = React.useContext(AuthContext);

  const [userId, setUserId] = React.useState('');
  const [userToken, setUserToken] = React.useState('');

  React.useEffect(() => {
    // checks if the user is authenticated
    if (isUserAuthenticated === false) {
      router.push('/login');
    }

    // Denna if sats körs bara när det finns en autensierad användare
    if (isUserAuthenticated) {
      const token = getToken();
      const decodedToken = getTokenInfo(token);

      setUserId(decodedToken.user.id);
      setUserToken(token);
    }
  }, [router, getToken, isUserAuthenticated]);

  return (
    <div>
      <h1>Homepage för appen</h1>
      <Todos userId={userId} token={userToken} />
    </div>
  );
}

export default App;
