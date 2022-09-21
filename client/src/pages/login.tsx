import React from 'react';

import styles from '../styles/pages/Login.module.scss';

function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function formSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const loginDetials = {
      username,
      password,
    };
    console.log('form submitted: ', loginDetials);
    // Skriva en post request till backend här: 
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
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
