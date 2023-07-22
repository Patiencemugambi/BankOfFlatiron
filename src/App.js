// App.js
import React, { useState, useEffect } from 'react';
import TransactionsTable from './components/TransactionsTable';
import TransactionsForm from './components/TransactionForm';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from API and store it in the 'transactions' state
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to handle adding a new transaction
  const addTransaction = (newTransaction) => {
    // Assume newTransaction is an object containing properties like id, description, and amount
    // Add the new transaction to the existing transactions list using the spread operator
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      {/* Render the TransactionsForm component and pass the 'addTransaction' function */}
      <TransactionsForm addTransaction={addTransaction} />

      {/* Render the TransactionsTable component and pass the 'transactions' as a prop */}
      <TransactionsTable transactions={transactions} />
    </div>
  );
};

export default App;
