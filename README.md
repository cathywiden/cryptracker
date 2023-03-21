CrypTracker is a single-page application (SPA) built with React that allows you to track your cryptocurrency transactions. It's like a personal assistant for your crypto portfolio, but without the snarky comments. It won't judge you for how much you've spent on Dogecoin. It just displays rather innocent stats. Even that only so that I can learn me some React.

The SPA is built as a learning project focusing on how state can be shared between components and how changes in one component can update the state and trigger re-rendering of other components.

The app features a main component CryptoTransactionsApp that manages the state of the app, including the cryptocurrency transactions data and the localStorage retrieval and storage (I'm using localStorage in lack of better alternatives, for now.) The state is passed down as props to child components, such as CryptoList, Crypto, and Statistics that will handle the display of the data.

With the Crypto component, you can add and delete transactions for each cryptocurrency like a pro. And with the CryptoList component, you can easily view a list of all your cryptocurrencies and their transactions. CryptoList also updates the lastTransactionDates and totalTransactions props in the Statistics component using the useEffect hook.

The Statistics component displays the last transaction date for each cryptocurrency and the total number of transactions. 

Finally, there is a Footer. You can't have an SPA without one.
