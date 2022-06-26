import React from 'react';
import { useSelector } from 'react-redux';

const TransactionsComponent = () => {
  const { transactions } = useSelector((state) => state.transactions);

  console.log(transactions);

  return (
    <div>
      {transactions.map((transaction) => {
        return (
          <div key={transaction.transaction_id}>
            <h3>{transaction.merchant_name}</h3>
            <h1>{transaction.amount}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionsComponent;
