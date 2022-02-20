import React from "react";

import styles from "./TableComponent.module.css";

interface ITableComponentProps {
  headers: IColumnHeader[];
  dataSource: ITableData[];
}
interface ITableData {
  value: string;
  key: string;
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
      {props.dataSource.map((data) => {
        return generateRow(data.value);
      })}
    </div>
  );
};

export default TableComponent;
