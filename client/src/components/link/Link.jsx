import React, { useState, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { getNewTransactions } from '../../features/transactions/transactionSlice';
import './Link.scss';

// const axios = require('axios');

// axios.defaults.baseURL = 'http://localhost:5000';

const Link = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [token, setToken] = useState('');
  const { transactions } = useSelector((state) => state.transactions);

  useEffect(() => {
    const fetchLinkToken = async () => {
      try {
        const response = await axios.post('/api/v1/link/create-link-token', {
          userId: user._id,
        });

        const { link_token } = await response.data;
        setToken(link_token);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLinkToken();
  }, [user, dispatch]);

  const { open } = usePlaidLink({
    token: token,
    onSuccess: async (publicToken, metadata) => {
      const transResponse = await axios.post('/api/v1/link/token-exchange', {
        publicToken,
      });
      dispatch(getNewTransactions(transResponse));
      console.log(transactions);
    },
  });

  return (
    <div className="link">
      <h1 className="link__heading">Login to your bank account</h1>
      <p>
        Once you link your bank account to Repledge, together we can see which
        transactions in the last 30 days you may want to offset with a donation
        to one of your favorite charities!
      </p>
      <button className="btn btn-block" onClick={() => open()}>
        Get Your Transactions
      </button>
    </div>
  );
};

export default Link;
