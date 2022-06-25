import React from 'react';
import { useSelector } from 'react-redux';

const TransactionsComponent = () => {
  const { transactions } = useSelector((state) => state.transactions);

  console.log(transactions);

  return (
    <div>
      {transactions.map((transaction) => {
        return <div key={transaction.transaction_id}>did it work</div>;
      })}
    </div>
  );
};

export default TransactionsComponent;
