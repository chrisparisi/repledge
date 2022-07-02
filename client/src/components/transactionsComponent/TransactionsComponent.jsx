import React from 'react';
import { useSelector } from 'react-redux';

import './TransactionsComponent.scss';

const TransactionsComponent = () => {
  const { transactions } = useSelector((state) => state.transactions);

  return (
    <div className="transactions">
      <div className="transactions__header">
        <h1>Your filtered transactions</h1>
      </div>
      {transactions.transactions.map((transaction) => {
        return (
          <div className="transaction__item" key={transaction.transaction_id}>
            <h3>{transaction.merchant_name}</h3>
            <p>{transaction.date}</p>
            <h2>{transaction.amount}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionsComponent;
