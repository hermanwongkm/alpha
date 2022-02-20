import { useQuery } from "urql";
import React from "react";
import getStockTransactions from "../../../graphql/queries/stocks/getStocksTransactions";

import TableComponent from "../../simpleComponents/tableComponent/TableComponent";
import { Fields } from "../addTransaction/addTransaction";

const tableColumnConfig = [
  {
    value: "Size",
    key: Fields.POSITION_SIZE,
    width: "1fr",
  },
  {
    value: "Price",
    key: Fields.PRICE,
    width: "1fr",
  },
];

const tableData = [
  {
    value: "123",
    key: Fields.POSITION_SIZE,
  },
  {
    value: "456",
    key: Fields.PRICE,
  },
  {
    value: "123",
    key: Fields.POSITION_SIZE,
  },
  {
    value: "456",
    key: Fields.PRICE,
  },
];

const StocksTable = () => {
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
      <div style={{ marginTop: "20px", marginBottom: "5rem" }}>
        <TableComponent headers={tableColumnConfig} dataSource={tableData} />
      </div>
    </div>
  );
};

export default StocksTable;
