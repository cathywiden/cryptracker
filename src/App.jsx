import React, { useState, useEffect } from "react";
import "./App.css";
import CryptoList from "./components/CryptoList";
import Footer from "./components/Footer";

const CryptoTransactionsApp = () => {
  const [cryptoTransactions, setCryptoTransactions] = useState(() => {
    // Retrieve data from localStorage or use default value
    const savedData = localStorage.getItem("cryptos");
    return savedData
      ? JSON.parse(savedData)
      : [
          { name: "Bitcoin", transactions: [] },
          { name: "Ethereum", transactions: [] },
          { name: "Litecoin", transactions: [] },
          { name: "Ripple", transactions: [] },
        ];
  });

  const handleAddTransaction = (cryptoName, transaction) => {
    setCryptoTransactions((prevCryptoTransactions) =>
      prevCryptoTransactions.map((crypto) =>
        crypto.name === cryptoName
          ? { ...crypto, transactions: [...crypto.transactions, transaction] }
          : crypto
      )
    );
  };

  const handleDeleteTransaction = (cryptoName, updatedTransactions) => {
    setCryptoTransactions((prevCryptoTransactions) =>
      prevCryptoTransactions.map((crypto) =>
        crypto.name === cryptoName
          ? { ...crypto, transactions: updatedTransactions }
          : crypto
      )
    );
  };

  useEffect(() => {
    // Save data to localStorage
    localStorage.setItem("cryptos", JSON.stringify(cryptoTransactions));
  }, [cryptoTransactions]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>CrypTracker</h1>
        <h1 className="refl">CrypTracker</h1>
      </header>
      <main style={{ marginBottom: "16px" }}>
        <CryptoList
          cryptos={cryptoTransactions}
          addTransaction={handleAddTransaction}
          deleteTransaction={handleDeleteTransaction}
        />
      </main>
      <Footer />
    </div>
  );
};

export default CryptoTransactionsApp;
