import moment from "moment";
import React from "react";
import { Fields } from "../../../stocksComponents/addTransaction/addTransaction";
import { IColumnHeader, ITableData } from "../TableComponent";

import styles from "./RowComponent.module.css";

export interface IRowComponentProps {
  headers: IColumnHeader[];
  row: ITableData;
}

const generateColumn = (columnHeaders: IColumnHeader[]) => {
  return columnHeaders.reduce((acc, curr) => {
    return acc + `${curr.width} `;
  }, "");
};

const generateEntry = (value: string) => {
  return <div className={styles.entry}>{value}</div>;
};

const generateRow = (row: ITableData, headers: IColumnHeader[]) => {
  return headers.map((header) => {
    {
      if (header.key === Fields.DATE) {
        //Todo Handle date properly
        return generateEntry(
          moment
            .utc(parseInt(row[header.key as keyof ITableData]))
            .format("DD-MM-YYYY"),
        );
      } else {
        return generateEntry(row[header.key as keyof ITableData]);
      }
    }
  });
};

const RowComponent = (props: IRowComponentProps) => {
  const [isExpanded, setExpandTable] = React.useState<boolean>(false);

  const test = async () => {
    const x = await props.expandTableCallback();
    console.log("Hello");
  };

  console.log("Row");
  const { data, fetching, error } = props.expandTableCallbackData;
  console.log(data);
  console.log(error);
  return (
    <div>
      <div
        onClick={() => {
          setExpandTable(!isExpanded);
          isExpanded && test();
        }}
        className={styles.wrapper}
        style={{
          gridTemplateColumns: `${generateColumn(props.headers)}`,
        }}
      >
        {generateRow(props.row, props.headers)}
      </div>
      {isExpanded && (
        <div>{data && data.stockTransactionsAggregateSchema.symbol}</div>
      )}
    </div>
  );
};

export default RowComponent;
