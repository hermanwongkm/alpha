import { useQuery } from "urql";
import React, { useEffect } from "react";

import TableComponent from "../../simpleComponents/tableComponent/TableComponent";
import { Fields } from "../addTransaction/addTransaction";
import getStockStreams from "../../../graphql/queries/stocks/getStockStreams";
import getStocksTransactionsBySymbol from "../../../graphql/queries/stocks/getStocksTransactionsBySymbol";

const tableColumnConfig = [
  {
    value: "",
    key: "",
    width: "0.1fr",
  },
  {
    value: "Date",
    key: Fields.DATE,
    width: "1fr",
  },
  {
    value: "Type",
    key: Fields.TYPE,
    width: "1fr",
  },
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
    key: Fields.AVERAGE_PRICE,
    width: "1fr",
  },
  {
    value: "Size",
    key: Fields.POSITION_SIZE,
    width: "1fr",
  },
];

const StocksTable = () => {
  const [stockTransactionsSymbol, setStockTransactionsSymbol] = React.useState<
    string | null
  >(null);

  //urql is a GraphQL client that exposes a set of React components and hooks
  const [stockStreams] = useQuery({
    query: getStockStreams,
    pause: false,
  });

  const [stockTransactionsBySymbol, reexecuteQuery] = useQuery({
    query: getStocksTransactionsBySymbol,
    variables: { symbol: stockTransactionsSymbol },
    pause: true,
  });

  useEffect(() => {
    reexecuteQuery();
  }, [stockTransactionsSymbol]);

  const { data: stockTransactionsData, fetching: fetching3 } =
    stockTransactionsBySymbol;
  const { data: stockStreamsData, fetching, error } = stockStreams;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <div style={{ marginTop: "20px", marginBottom: "5rem" }}>
        <TableComponent
          headers={tableColumnParentConfig}
          isFetching={fetching}
          dataSource={stockStreamsData.stockTransactionStreamSchema}
          expandTableHeaders={tableColumnConfig}
          expandTableCallback={setStockTransactionsSymbol}
          expandTableCallbackData={stockTransactionsData?.stockTransactions}
          isExpandTableDataFetching={fetching3}
        />
      </div>
    </div>
  );
};

export default StocksTable;

// const [result2, getStockTransactionsForStream] = useQuery({
//   query: getStockTransactions,
//   pause: false,
// });
// const { data: data2, fetching2, error2 } = result2;

// const [resultAggregate, refetch] = useQuery({
//   query: getStocksAggregate,
//   variables: { symbol: "AAPL" },
//   pause: true,
// });
