const getStockStreams = `
query { 
  stockTransactionStreamSchema {
      symbol
      averagePrice
      size
  } 
}
`;

export default getStockStreams;
