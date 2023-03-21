import React from "react";

const Crypto = ({ name, transactions, addTransaction, deleteTransaction }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const transaction = {
      amount: event.target.amount.value,
      date: event.target.date.value,
    };
    addTransaction(name, transaction);
    event.target.reset();
  };

  const handleDelete = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    deleteTransaction(name, updatedTransactions);
  };

  return (
    <div>
      <h2>{name} Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <span>
              Amount: {transaction.amount}, Date: {transaction.date}
            </span>
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "8px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="text"
            name="amount"
            style={{ marginLeft: "4px", marginRight: "8px" }}
          />
        </label>
        <label>
          Date:
          <input
            type="text"
            name="date"
            style={{ marginLeft: "4px", marginRight: "8px" }}
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default Crypto;
