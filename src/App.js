import React, { useState, useEffect } from 'react'; 
import TransactionsTable from './components/TransactionsTable';
import TransactionsForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';
import '../src/App.css'

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  // Function for new transaction
  const addTransaction = (newTransaction) => {

    setTransactions([...transactions, newTransaction]);
    
    //update the filteredTransactions to include the new transaction if it matches the filter
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
      {}
      <TransactionsForm addTransaction={addTransaction} />

      {}
      <SearchBar onFilter={handleFilter} />

      {}
      <TransactionsTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
