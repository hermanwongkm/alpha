import { useQuery } from "urql";
import React from "react";

import AddTransaction from "./addTransaction/addTransaction";
import getStockTransactions from "../../graphql/queries/stocks/getStocksTransactions";
import StocksTable from "./stockTable/stockTable";

const StocksPage = () => {
  const [result, reexecuteQuery] = useQuery({
    query: getStockTransactions,
    pause: false,
  });

  const { data, fetching, error } = result;
  console.log(data);
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <AddTransaction execute={reexecuteQuery} />
      <StocksTable />
    </div>
  );
};

export default StocksPage;
