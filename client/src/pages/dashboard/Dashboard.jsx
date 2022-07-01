import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Dashboard.scss';
import Spinner from '../../components/spinner/Spinner';
import Navbar from '../../components/navbar/Navbar';
import Link from '../../components/link/Link';
import TransactionsComponent from '../../components/transactionsComponent/TransactionsComponent';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { transactions, isLoading } = useSelector(
    (state) => state.transactions
  );

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [dispatch, navigate, user]);

  console.log(transactions);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="dashboard">
          {transactions.length < 1 ? (
            <div className="dashboard__link">
              <Link />
            </div>
          ) : (
            <div className="dashboard__transactions">
              <div className="donation">
                <h2>You should donate</h2>
                <p>{transactions.donation}</p>
              </div>
              <TransactionsComponent />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
