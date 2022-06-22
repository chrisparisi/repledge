import React, { useState, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';
const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:5000';

const Login = () => {
  const [token, setToken] = useState('');
  const [transactions, setTransactions] = useState({});

  useEffect(() => {
    const fetchLinkToken = async () => {
      const response = await axios.get('/api/v1/link/create-link-token', {
        proxy: { host: 'localhost', port: '5000' },
      });

      const { link_token } = await response.data;
      setToken(link_token);
    };
    fetchLinkToken();
  }, []);

  const { open } = usePlaidLink({
    token: token,
    onSuccess: async (publicToken, metadata) => {
      console.log(publicToken);
      console.log(metadata);
      const transResponse = await axios.post('/api/v1/link/token-exchange', {
        proxy: { host: 'localhost', port: '5000' },
        publicToken,
      });
      setTransactions(transResponse);
      console.log(transResponse);
    },
  });

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => open()}>Use Plaid</button>
    </div>
  );
};

export default Login;
