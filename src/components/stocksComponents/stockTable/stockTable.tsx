import { useQuery } from "urql";
import React from "react";
import getStockTransactions from "../../../graphql/queries/stocks/getStocksTransactions";

import TableComponent from "../../simpleComponents/tableComponent/TableComponent";
import { Fields } from "../addTransaction/addTransaction";
import moment from "moment";

const tableColumnConfig = [
  {
    value: "Date",
    key: Fields.DATE,
    width: "1fr",
  },
  {
    value: "Symbol",
    key: Fields.SYMBOL,
    width: "1fr",
  },
  {
    value: "Type",
    key: Fields.TYPE,
    width: "1fr",
  },
  {
    value: "Price",
    key: Fields.PRICE,
    width: "1fr",
  },
  {
    value: "Size",
    key: Fields.POSITION_SIZE,
    width: "1fr",
  },
];

const StocksTable = () => {
  //urql is a GraphQL client that exposes a set of React components and hooks
  const [result, reexecuteQuery] = useQuery({
    query: getStockTransactions,
    pause: false,
  });

  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  console.log(data);
  console.log(moment.utc(1645366985055).format());
  return (
    <div>
      <div style={{ marginTop: "20px", marginBottom: "5rem" }}>
        <TableComponent
          headers={tableColumnConfig}
          dataSource={data.stockTransaction}
        />
      </div>
    </div>
  );
};

export default StocksTable;
