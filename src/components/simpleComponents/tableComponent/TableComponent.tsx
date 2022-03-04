import React from "react";
import RowComponent from "./RowComponent.tsx/RowComponent";

import styles from "./TableComponent.module.css";

export interface ITableComponentProps {
  headers: IColumnHeader[];
  dataSource: ITableData[];
  isFetching: boolean;
  expandTableHeaders?: IExpandColumnHeader[];
  expandTableCallback?: (symbol: string | null) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expandTableCallbackData?: any;
  isExpandTableDataFetching?: boolean;
}
export interface ITableData {
  //Type of key-value pair
  [key: string]: string;
}
export interface IColumnHeader {
  value: string;
  key: string;
  width: string;
}

export interface IExpandColumnHeader {
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
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);
  return (
    <div>
      <div
        className={styles.wrapper}
        style={{ gridTemplateColumns: `${generateColumn(props.headers)}` }}
      >
        {props.headers.map((header) => {
          return generateHeaders(header.value);
        })}
      </div>
      {props.isFetching ? (
        <div className={styles.loader}>Loading...</div>
      ) : (
        props.dataSource.map((row, index) => {
          return (
            <RowComponent
              key={index}
              index={index}
              headers={props.headers}
              row={row}
              setExpandedCallback={setExpandedIndex}
              expanded={expandedIndex === index}
              expandTableHeaders={props.expandTableHeaders}
              expandTableCallback={props.expandTableCallback}
              expandTableCallbackData={props.expandTableCallbackData}
              isExpandTableDataFetching={props.isExpandTableDataFetching}
            />
          );
        })
      )}
    </div>
  );
};

export default TableComponent;
