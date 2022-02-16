const getStockTransactions = `
  query { 
    stockTransaction {
        symbol
        price
        date
        type
        size
        stockTransactionStream {
            version,
            type
        }
    } 
  }
`;

export default getStockTransactions;
