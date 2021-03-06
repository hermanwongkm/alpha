import { background } from "@chakra-ui/react";
import moment from "moment";
import React, { useEffect } from "react";
import { Fields } from "../../../stocksComponents/addTransaction/addTransaction";
import TableComponent, {
  IColumnHeader,
  IExpandColumnHeader,
  ITableData,
} from "../TableComponent";

import styles from "./RowComponent.module.css";

export interface IRowComponentProps {
  headers: IColumnHeader[];
  row: ITableData;
  expanded: boolean;
  index: number;
  expandTableHeaders?: IExpandColumnHeader[] | null;
  isExpandTableDataFetching?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expandTableCallbackData?: any;
  setExpandedCallback: (index: number | null) => void;
  expandTableCallback?: (symbol: string | null) => void;
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
  //I did not set expanded state here as i will do that eventually when i get redux
  useEffect(() => {
    if (props.expanded && props.expandTableCallback) {
      props.expandTableCallback(props.row.symbol);
    }
  }, [props.expanded]);

  return (
    <div className={`${props.expanded ? "expanded" : "cow"}`}>
      <div
        onClick={() => {
          if (props.expanded && props.expandTableCallback) {
            props.setExpandedCallback(null);
            props.expandTableCallback(null);
          } else {
            props.setExpandedCallback(props.index);
          }
        }}
        className={`${styles.wrapper}  ${props.expanded ? styles.expanded : styles.cow
          }`}
        style={{
          gridTemplateColumns: `${generateColumn(props.headers)}`,
        }}
      >
        {generateRow(props.row, props.headers)}
      </div>
      {props.expanded && props.expandTableHeaders && (
        <div className={styles.expandedWrapper}>
          <TableComponent
            headers={props.expandTableHeaders}
            dataSource={props.expandTableCallbackData}
            isFetching={props.isExpandTableDataFetching || false}
          />
        </div>
      )}
    </div>
  );
};

export default RowComponent;
