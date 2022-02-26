const getStocksTransactionsBySymbol = `
query($symbol: String) { 
  stockTransactions(symbol: $symbol) {
    symbol
    price
    date
    type
    size
    profitOrLoss
  } 
}
`;

export default getStocksTransactionsBySymbol;
