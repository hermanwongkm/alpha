import React from "react";
import { Fields } from "../../stocksComponents/addTransaction/addTransaction";

import styles from "./TableComponent.module.css";

interface ITableComponentProps {
  headers: IColumnHeader[];
  dataSource: ITableData[];
}
export interface ITableData {
  [Fields.SYMBOL]: string;
  [Fields.PRICE]: string;
  [Fields.POSITION_SIZE]: string;
}
interface IColumnHeader {
  value: string;
  key: string;
  width: string;
}

const generateColumn = (columnHeaders: IColumnHeader[]) => {
  return columnHeaders.reduce((acc, curr) => {
    return acc + `${curr.width} `;
  }, "");
};

const generateHeaders = (value: string) => {
  return <div className={styles.tableHeader}>{value}</div>;
};

const generateRow = (value: string) => {
  return <div className={styles.entry}>{value}</div>;
};

const generateBody = (dataSource: ITableData[], headers: IColumnHeader[]) => {
  return dataSource.flatMap((row) => {
    return headers.map((header) => {
      const value = row[header.key as keyof ITableData];
      return generateRow(value);
    });
  });
};

const TableComponent = (props: ITableComponentProps) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        gridTemplateColumns: `${generateColumn(props.headers)}`,
      }}
    >
      <div style={{ display: "contents" }}>
        {props.headers.map((header) => {
          return generateHeaders(header.value);
        })}
      </div>
      {generateBody(props.dataSource, props.headers)}
    </div>
  );
};

export default TableComponent;
