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
    const token = localStorage.getItem(TOKEN);

    if (token) {
      return true;
    }

    return false;
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
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
