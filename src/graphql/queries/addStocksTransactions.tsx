const addStockTransaction = `
  mutation($symbol: String, $price: Float, $size: Int, $action: String){
      addStockTransaction(
      symbol:$symbol,
      price: $price,
      size: $size,
      type: $action
      ){
      symbol,
      price,
      size,
      type,
      }
  }`;

export default addStockTransaction;
