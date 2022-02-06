import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

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

const generateRow = (value: string) => {
  return <div>{value}</div>;
};

const TableComponent = (props: ITableComponentProps) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        gridTemplateColumns: `${generateColumn(props.headers)}`,
      }}
    >
      {props.headers.map((header) => {
        return generateRow(header.value);
      })}
      {props.dataSource.map((data) => {
        return generateRow(data.value);
      })}
    </div>
  );
};

export default TableComponent;
