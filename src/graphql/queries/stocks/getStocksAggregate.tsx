const getStocksAggregate = `
query($symbol: String) { 
  stockTransactionsAggregateSchema(symbol: $symbol) {
      symbol
      averagePrice
      size
  } 
}
`;

export default getStocksAggregate;
