const getStockTransactions = `
  query { 
    stockTransaction {
        symbol
        price
        date
        type
        size
        profitOrLoss
        stockTransactionStream {
            version,
            type
        }
    } 
  }
`;

export default getStockTransactions;
