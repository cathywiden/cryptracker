const Statistics = ({ cryptos, lastTransactionDates, totalTransactions }) => {
  // Check if cryptos is null or undefined, or if there are no transactions
  if (!cryptos || cryptos.length === 0 || totalTransactions === 0) {
    return <p>No transactions to display.</p>;
  }

  return (
    <div className="statistics">
      <p>Last addition:</p>
      <ul>
        {cryptos.map((crypto, index) => (
          <li key={index}>
            {crypto.name}: {lastTransactionDates[index]}
          </li>
        ))}
      </ul>
      <p>Total number of transactions: {totalTransactions}</p>
    </div>
  );
};

export default Statistics;
