import React from 'react';

// TransactionsTable component receives the transactions array as a prop
const TransactionsTable = ({ transactions }) => {
  return (
    // The component renders a table to display the list of transactions.

<table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        {/*map function on the component to iterate over each transaction in the transactions array.  (how to comment here**) */}
        {transactions.map((transaction) => (
          // For each transaction, a table row (tr) is rendered with a unique key attribute using the transaction's id.  NB When you render a list of elements using a loop or map function in React, each item in the list should have a unique key prop. 

          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
