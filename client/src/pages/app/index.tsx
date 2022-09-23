import React from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/AuthContext';
import jwt_decode from 'jwt-decode';

// components
import GetTodo from '../../components/todos/GetTodo';

// Utils
import { getTokenInfo } from '../../utils';

// type DecodedTokenType = {
//   exp: number;
//   iat: number;
//   user: {
//     id: string;
//     username: string;
//     userLevel: number;
//   };
// };s

function App() {
  const router = useRouter();
  const { isUserAuthenticated, getToken, logoutUser } =
    React.useContext(AuthContext);

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

  function logout() {
    logoutUser();
    router.push('/login');
  }

  return (
    <div>
      <h1>Homepage för appen</h1>
      <GetTodo userId={userId} token={userToken} />
    </div>
  );
}

export default App;
