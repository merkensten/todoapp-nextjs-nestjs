import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';

import styles from '../styles/pages/Login.module.scss';

function Login() {
  const router = useRouter();
  const { setIsUserAuthenticated, setToken, isUserAuthenticated } =
    React.useContext(AuthContext);

  React.useEffect(() => {
    // checks if the user is authenticated
    if (isUserAuthenticated === true) {
      router.push('/app');
    }
  }, [router, isUserAuthenticated]);

  // lokalt state
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [formError, setFormError] = React.useState(false);
  const [formErrorMessage, setFormErrorMessage] = React.useState('');
  const [formSucess, setFormSucess] = React.useState(false);

  function clearFormFields() {
    setUsername('');
    setPassword('');
  }

  function formSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (username.length < 1 || password.length < 1) {
      setFormError(true);
      setFormErrorMessage('Du måste fylla i alla fält');
      return;
    }

    if (password.length < 6) {
      setFormError(true);
      setFormErrorMessage('Lösenordet behöver vara minst 6 tecken långt');
      return;
    }

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (username && password) {
      axios
        .post(`${API_URL}/auth/login`, {
          username,
          password,
        })
        .then(function (response) {
          console.log(response.data);
          setFormSucess(true);
          setToken(response.data.token);
          setIsUserAuthenticated(true);
        })
        .catch(function (error) {
          console.log(error);
          setFormError(true);
          setFormErrorMessage('Fel användarnamn eller lösenord');
        });

      setTimeout(() => {
        clearFormFields();
        router.push('/app');
      }, 2000);
    }
  }
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username..."
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Logga in</button>
        {formError && (
          <div>
            <p>{formErrorMessage}</p>
          </div>
        )}
        {formSucess && (
          <div>
            <p>Inloggning lyckades! Du kommer snart navigeras till appen.</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
