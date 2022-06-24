import React, { useState, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { useSelector } from 'react-redux';

import './Link.scss';

const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:5000';

const Link = () => {
  const { user } = useSelector((state) => state.auth);
  const [token, setToken] = useState('');
  const [transactions, setTransactions] = useState({});

  useEffect(() => {
    const fetchLinkToken = async () => {
      const response = await axios.post('/api/v1/link/create-link-token', {
        proxy: { host: 'localhost', port: '5000' },
        userId: user._id,
      });

      const { link_token } = await response.data;
      setToken(link_token);
    };
    fetchLinkToken();
  }, [user]);

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
      console.log(transResponse.data);
    },
  });

  return (
    <div>
      <h1 className="link__heading">Login</h1>
      <button className="btn" onClick={() => open()}>
        Use Plaid
      </button>
    </div>
  );
};

export default Link;
