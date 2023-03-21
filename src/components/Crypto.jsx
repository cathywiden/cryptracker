import React from "react";

const Crypto = ({ name, transactions, addTransaction, deleteTransaction }) => {
const handleSubmit = (event) => {
  event.preventDefault();

  // Check if amount and date are filled in
  const amount = event.target.amount.value.trim();
  const date = event.target.date.value.trim();

  if (amount === "" || date === "") {
    alert("Please fill in both amount and date.");
    return;
  }

  // Check if amount is greater than zero
  if (parseFloat(amount) <= 0) {
    alert("Please enter an amount greater than zero.");
    return;
  }

  // Check if date is in a valid format (dd/mm/yyyy)
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const matches = date.match(dateRegex);
  if (!matches) {
    alert("Please enter a valid date in the format dd/mm/yyyy.");
    return;
  }

  // Check if date is valid
  const day = parseInt(matches[1]);
  const month = parseInt(matches[2]) - 1;
  const year = parseInt(matches[3]);
  const inputDate = new Date(year, month, day);
  const currentDate = new Date();
  if (
    inputDate.getDate() !== day ||
    inputDate.getMonth() !== month ||
    inputDate.getFullYear() !== year
  ) {
    alert("Please enter a valid date.");
    return;
  }

  // Check if date is not in the future
  if (inputDate > currentDate) {
    alert("Please enter a date that is not in the future.");
    return;
  }

  const transaction = {
    amount: amount,
    date: date,
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
            placeholder="Enter amount"
            style={{ marginLeft: "4px", marginRight: "8px" }}
          />
          <input
            type="text"
            name="date"
            placeholder="Enter date (dd/mm/yyyy)"
            style={{ marginLeft: "4px", marginRight: "8px" }}
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default Crypto;
