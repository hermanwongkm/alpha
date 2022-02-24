import { useQuery } from "urql";
import React from "react";
import getStockTransactions from "../../../graphql/queries/stocks/getStocksTransactions";

import TableComponent from "../../simpleComponents/tableComponent/TableComponent";
import { Fields } from "../addTransaction/addTransaction";
import getStocksAggregate from "../../../graphql/queries/stocks/getStocksAggregate";
import getStockStreams from "../../../graphql/queries/stocks/getStockStreams";

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
  {
    value: "Profit Or Loss",
    key: Fields.PNL,
    width: "1fr",
  },
];

const tableColumnParentConfig = [
  {
    value: "Symbol",
    key: Fields.SYMBOL,
    width: "1fr",
  },
  {
    value: "Average Price",
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
  const [result] = useQuery({
    query: getStockStreams,
    pause: false,
  });
  console.log(result);

  const [result2] = useQuery({
    query: getStockTransactions,
    pause: false,
  });
  console.log(result2);

  const [resultAggregate, refetch] = useQuery({
    query: getStocksAggregate,
    variables: { symbol: "AAPL" },
    pause: true,
  });
  const { data: data2, fetching2, error2 } = result2;
  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  console.log(data);
  console.log(data2);

  return (
    <div>
      <div style={{ marginTop: "20px", marginBottom: "5rem" }}>
        <>
          <TableComponent
            headers={tableColumnConfig}
            dataSource={data2.stockTransaction}
          />
        </>
      </div>
    </div>
  );
};

export default StocksTable;
