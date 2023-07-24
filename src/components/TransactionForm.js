import React from 'react';

const TransactionsForm = ({ addTransaction }) => {
  const descriptionRef = React.createRef();
  const amountRef = React.createRef();
  const dateRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const description = descriptionRef.current.value;
    const amount = amountRef.current.value;
    const date = dateRef.current.value;

    if (description.trim() === '' || amount.trim() === '' || date.trim() === '') {
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description: description,
      amount: +amount,
      date: date,
    };

    addTransaction(newTransaction);

    descriptionRef.current.value = '';
    amountRef.current.value = '';
    dateRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          ref={descriptionRef}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          ref={amountRef}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          ref={dateRef}
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionsForm;
