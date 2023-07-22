// TransactionsForm.js
import React, { useState } from 'react';

const TransactionsForm = ({ addTransaction }) => {
  // State to hold the form input values
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the description, amount, and date are not empty before adding the transaction
    if (description.trim() === '' || amount.trim() === '' || date.trim() === '') {
      return;
    }

    // Create a new transaction object with a unique ID (you can use any logic to generate a unique ID)
    const newTransaction = {
      id: Date.now(), // Just using the current timestamp as an example
      description: description,
      amount: +amount, // Convert the amount to a number
      date: new Date(date).toISOString(), // Convert the date to an ISO string
    };

    // Call the 'addTransaction' function from the parent component (App.js) to add the new transaction
    addTransaction(newTransaction);

    // Clear the form input values after submission
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionsForm;
