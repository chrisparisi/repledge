import React from 'react';
import { usePlaidLink } from 'react-plaid-link';

const Login = () => {
  const fetchLinkToken = async () => {
    const response = await fetch('/create-link-token');
    const { linkToken } = await response.json();
    return linkToken;
  };

  const { open, ready } = usePlaidLink({
    token: fetchLinkToken(),
    onSuccess: (publicToken, metadata) => {
      console.log(publicToken);
      console.log(metadata);
      fetch('/token-exchange', {
        method: 'POST',
        body: JSON.stringify({ publicToken }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
  });

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => open()} disabled={!ready}>
        Use Plaid
      </button>
    </div>
  );
};

export default Login;
