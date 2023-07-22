import React, { useState, useEffect } from 'react';
import TransactionsTable from './components/TransactionsTable';

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

  return (
    <div>
      {/* Render the TransactionsTable component and pass the 'transactions' as a prop */}
      <TransactionsTable transactions={transactions} />
    </div>
  );
};

export default App;
