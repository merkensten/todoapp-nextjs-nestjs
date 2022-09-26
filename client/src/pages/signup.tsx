import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';

import styles from '../styles/pages/Signup.module.scss';

function Signup() {
  const router = useRouter();
  const { isUserAuthenticated } = React.useContext(AuthContext);

  React.useEffect(() => {
    // checks if the user is authenticated
    if (isUserAuthenticated === true) {
      router.push('/app');
    }
  }, [router, isUserAuthenticated]);

  // Lokalt state
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

    if (password.length < 6) {
      setFormError(true);
      setFormErrorMessage('Lösenordet behöver vara minst 6 tecken långt');
    }

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    axios
      .post(`${API_URL}/auth/register`, {
        username,
        password,
      })
      .then(function (response) {
        console.log(response);
        setFormSucess(true);
        clearFormFields();
      })
      .catch(function (error) {
        console.log(error);
      });

    setTimeout(() => {
      if (formSucess) {
        router.push('/login');
      }
    }, 2000);
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
        <button type="submit">Sign up</button>

        {formError && (
          <div>
            <p>{formErrorMessage}</p>
          </div>
        )}
        {formSucess && (
          <div>
            <p>
              Registrering lyckades! Du kommer snart navigeras till login sidan.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Signup;
