import React from 'react';
import { useSelector } from 'react-redux';

import './TransactionsComponent.scss';

const TransactionsComponent = () => {
  const { transactions } = useSelector((state) => state.transactions);

  const rounder = (amount) => {
    let value = Math.ceil(amount) - amount;
    value = value.toFixed(2);
    return value;
  };

  return (
    <div className="transactions">
      <div className="transactions__header">
        <h1>Your filtered transactions</h1>
      </div>
      {transactions.transactions.map((transaction) => {
        return (
          <div className="transaction__item" key={transaction.transaction_id}>
            <div className="item__left">
              <p>{transaction.date}</p>
              <h3>{transaction.merchant_name}</h3>
            </div>
            <div className="item__center">
              <h2>{transaction.amount}</h2>
            </div>
            <div className="item__right">
              <h2>+ {rounder(transaction.amount)}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionsComponent;
