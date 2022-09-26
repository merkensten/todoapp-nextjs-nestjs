import React from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';

function NotFound() {
  const router = useRouter();
  const { isUserAuthenticated } = React.useContext(AuthContext);
  return (
    <div>
      <h1>404 - sidan hittades inte</h1>
    </div>
  );
}

export default NotFound;
