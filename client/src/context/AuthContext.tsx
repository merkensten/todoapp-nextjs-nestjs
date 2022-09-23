import React from 'react';

// Saker att göra:
// - Uppdatera typesen i denna fil

const AuthContext = React.createContext<any>(null);
const { Provider } = AuthContext;

const TOKEN: 'token' = 'token';

const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = React.useState({
    token: '',
  });

  function setUserAuth(token: string) {
    localStorage.setItem(TOKEN, token);

    setAuthState({
      token,
    });
  }

  // checks if the user is authenticated or not
  function isUserAuthenticated() {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem(TOKEN);

      if (token) {
        return true;
      }

      return false;
    }
  }

  function getToken() {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem(TOKEN);

      if (token) {
        return token;
      }

      return '';
    }
  }

  function logoutUser() {
    localStorage.removeItem(TOKEN);
    setAuthState({
      token: '',
    });
  }

  return (
    <Provider
      value={{
        authState,
        setUserAuth,
        isUserAuthenticated,
        logoutUser,
        getToken,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
