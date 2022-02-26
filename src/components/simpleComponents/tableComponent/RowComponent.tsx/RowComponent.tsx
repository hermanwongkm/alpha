import moment from "moment";
import React, { useEffect } from "react";
import { Fields } from "../../../stocksComponents/addTransaction/addTransaction";
import TableComponent, { IColumnHeader, ITableData } from "../TableComponent";

import styles from "./RowComponent.module.css";

export interface IRowComponentProps {
  headers: IColumnHeader[];
  row: ITableData;
}

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

  const test = () => {
    console.log("Called change of state");
    const x = props.expandTableCallback("AMD");
  };

  useEffect(() => {
    console.log("HELLO");
    console.log({ isExpanded });
    if (isExpanded) {
      test();
    }
  }, [isExpanded]);

  console.log(props.expandTableCallbackData);

  return (
    <div>
      <div
        onClick={() => {
          setExpandTable(!isExpanded);
        }}
        className={styles.wrapper}
        style={{
          gridTemplateColumns: `${generateColumn(props.headers)}`,
        }}
      >
        {generateRow(props.row, props.headers)}
      </div>
      {isExpanded &&
        (props.isFetchingExpandTable ? (
          <div>Loading</div>
        ) : (
          <div>
            <TableComponent
              headers={tableColumnConfig}
              dataSource={props.expandTableCallbackData.stockTransactions}
            />
          </div>
        ))}
    </div>
  );
};

export default RowComponent;
