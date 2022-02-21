const addStockTransaction = `
  mutation($symbol: String, $price: Float, $size: Int, $action: String, $date: String){
      addStockTransaction(
      symbol:$symbol,
      price: $price,
      size: $size,
      type: $action,
      date: $date
      ){
      symbol,
      price,
      size,
      type,
      date
      }
  }`;

export default addStockTransaction;
