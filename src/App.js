// App.js

import React, { useState, useEffect } from 'react';
import TransactionsTable from './components/TransactionsTable';
import TransactionsForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from API and store it in the 'transactions' state
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data); // Set initial filteredTransactions to all transactions
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
    // Also update the filteredTransactions to include the new transaction if it matches the filter
    if (newTransaction.description.includes(filteredTerm)) {
      setFilteredTransactions([...filteredTransactions, newTransaction]);
    }
  };

  // State and function to handle filtering transactions
  const [filteredTerm, setFilteredTerm] = useState('');

  const handleFilter = (term) => {
    setFilteredTerm(term);
    const filteredData = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTransactions(filteredData);
  };

  return (
    <div>
      {/* Render the TransactionsForm component and pass the 'addTransaction' function */}
      <TransactionsForm addTransaction={addTransaction} />

      {/* Render the SearchBar component and pass the 'handleFilter' function */}
      <SearchBar onFilter={handleFilter} />

      {/* Render the TransactionsTable component and pass the 'filteredTransactions' as a prop */}
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
