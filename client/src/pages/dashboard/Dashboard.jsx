import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Dashboard.scss';
import Navbar from '../../components/navbar/Navbar';
import Link from '../../components/link/Link';
import TransactionsComponent from '../../components/transactionsComponent/TransactionsComponent';
import { reset } from '../../features/transactions/transactionSlice';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { transactions } = useSelector((state) => state.transactions);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, navigate, user]);

  console.log(transactions);

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        {transactions.length < 1 ? (
          <div className="dashboard__left">
            <Link />
          </div>
        ) : (
          <div className="dashboard__right">
            <TransactionsComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
