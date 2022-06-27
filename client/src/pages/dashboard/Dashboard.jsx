import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Dashboard.scss';
import Navbar from '../../components/navbar/Navbar';
import Link from '../../components/link/Link';
import TransactionsComponent from '../../components/transactionsComponent/TransactionsComponent';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { transactions } = useSelector((state) => state.transactions);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [dispatch, navigate, user]);

  console.log(transactions);

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        {transactions.length < 1 ? (
          <div className="dashboard__link">
            <Link />
          </div>
        ) : (
          <div className="dashboard__transactions">
            <TransactionsComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
