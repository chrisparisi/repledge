import React, { useState, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { useSelector, useDispatch } from 'react-redux';

import { getNewTransactions } from '../../features/transactions/transactionSlice';
import { reset } from '../../features/transactions/transactionSlice';
import './Link.scss';

const axios = require('axios');

axios.defaults.baseURL = 'http://localhost:5000';

const Link = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [token, setToken] = useState('');
  // const [transactions, setTransactions] = useState({});
  const { transactions } = useSelector((state) => state.transactions);

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
  }, [user, dispatch]);

  const { open } = usePlaidLink({
    token: token,
    onSuccess: async (publicToken, metadata) => {
      const transResponse = await axios.post('/api/v1/link/token-exchange', {
        proxy: { host: 'localhost', port: '5000' },
        publicToken,
      });
      dispatch(getNewTransactions(transResponse));
      console.log(transactions);
      // setTransactions(transResponse);
      // console.log(transResponse.data);
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
