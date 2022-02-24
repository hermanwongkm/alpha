import moment from "moment";
import React from "react";
import { Fields } from "../../stocksComponents/addTransaction/addTransaction";
import RowComponent from "./RowComponent.tsx/ROwComponent";

import styles from "./TableComponent.module.css";

export interface ITableComponentProps {
  headers: IColumnHeader[];
  dataSource: ITableData[];
}
export interface ITableData {
  [Fields.SYMBOL]: string;
  [Fields.PRICE]: string;
  [Fields.POSITION_SIZE]: string;
}
export interface IColumnHeader {
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

const TableComponent = (props: ITableComponentProps) => {
  return (
    <>
      <div>
        <div
          className={styles.wrapper}
          style={{ gridTemplateColumns: `${generateColumn(props.headers)}` }}
        >
          {props.headers.map((header) => {
            return generateHeaders(header.value);
          })}
        </div>
        {props.dataSource.map((row, index) => {
          return <RowComponent key={index} headers={props.headers} row={row} />;
        })}
      </div>
    </>
  );
};

export default TableComponent;
