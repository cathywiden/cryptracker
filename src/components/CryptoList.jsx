import React, { useState, useEffect } from "react";
import Crypto from "./Crypto";
import Statistics from "./Statistics";

function CryptoList(props) {
  const { cryptos, addTransaction, deleteTransaction } = props;

  const [lastTransactionDates, setLastTransactionDates] = useState([]);
  const [totalTransactions, setTotalTransactions] = useState(0);

  useEffect(() => {
    // Update lastTransactionDates
    const dates = cryptos.map((crypto) => {
      const transactions = crypto.transactions;
      return transactions.length > 0
        ? transactions[transactions.length - 1].date
        : "";
    });
    setLastTransactionDates(dates);

    // Update totalTransactions
    const total = cryptos.reduce(
      (accumulator, crypto) => accumulator + crypto.transactions.length,
      0
    );
    setTotalTransactions(total);
  }, [cryptos]);

  const handleAddTransaction = (cryptoName, transaction) => {
    addTransaction(cryptoName, transaction);
  };

  const handleDeleteTransaction = (cryptoName, updatedTransactions) => {
    deleteTransaction(cryptoName, updatedTransactions);
  };

  return (
    <div>
      <Statistics
        cryptos={cryptos}
        lastTransactionDates={lastTransactionDates}
        totalTransactions={totalTransactions}
      />
      {cryptos.map((crypto) => (
        <Crypto
          key={crypto.name}
          name={crypto.name}
          transactions={crypto.transactions}
          addTransaction={handleAddTransaction}
          deleteTransaction={handleDeleteTransaction}
        />
      ))}
    </div>
  );
}

export default CryptoList;
