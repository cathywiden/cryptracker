**CrypTracker**

CrypTracker is a single-page application (SPA) built with React that allows you to track your cryptocurrency transactions. It's like a personal assistant for your crypto portfolio, but without the snarky comments. It won't judge you for how much you've spent on Dogecoin. It just displays rather innocent stats.

**Learning Objectives**

This app was built as a learning project focusing on how state can be shared between components and how changes in one component can update the state and trigger re-rendering of other components. 

*Lifting State Up*

The main component CryptoTransactionsApp manages the state of the entire application, including the cryptocurrency transactions data and the local storage retrieval and storage. This state is then passed down as props to child components such as CryptoList, Crypto, and Statistics to handle the display of the data. 

*Hooks*

useState is used to manage the state of the entire application, including the list of transactions, the name of the currently selected cryptocurrency, and the error message when adding a new transaction.

useEffect is used to update the lastTransactionDates and totalTransactions props in the Statistics component whenever the transactions prop in the CryptoList component changes. It is also used to retrieve the transaction data from the localStorage whenever the component mounts or the transactions prop changes.

**Components**

*CryptoTransactionsApp*
The CryptoTransactionsApp component manages the state of the entire application, including the cryptocurrency transactions data and the localStorage retrieval and storage. It passes down the necessary state and functions as props to the child components. By keeping the logic of the app in CryptoTransactionsApp, it allows the state management to be done at the highest level.

*CryptoList*
The CryptoList component displays a list of all your cryptocurrencies and their transactions. It receives the transactions and deleteTransaction props from CryptoTransactionsApp. It also updates the lastTransactionDates and totalTransactions props in the Statistics component using the useEffect hook.

*Crypto*
The Crypto component allows you to add and delete transactions for each cryptocurrency. It receives the name, transactions, addTransaction, and deleteTransaction props from CryptoList.

*Statistics*
The Statistics component displays the last transaction date for each cryptocurrency and the total number of transactions. It receives the lastTransactionDates and totalTransactions props from CryptoList.

*Footer*
No SPA is complete without one.
