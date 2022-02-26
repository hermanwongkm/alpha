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
  expandTableHeaders?: IExpandColumnHeader[];
  isExpandTableDataFetching: boolean;
  expandTableCallbackData: any;
  setExpandedCallback: (index: number | null) => void;
  expandTableCallback: (symbol: string) => void;
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
    if (props.expanded) {
      props.expandTableCallback(props.row.symbol);
    }
  }, [props.expanded]);

  return (
    <div>
      <div
        onClick={() => {
          if (props.expanded) {
            props.setExpandedCallback(null);
          } else {
            props.setExpandedCallback(props.index);
          }
        }}
        className={styles.wrapper}
        style={{
          gridTemplateColumns: `${generateColumn(props.headers)}`,
        }}
      >
        {generateRow(props.row, props.headers)}
      </div>
      {props.expanded && (
        <div>
          <TableComponent
            headers={props.expandTableHeaders}
            dataSource={props.expandTableCallbackData}
            isFetching={props.isExpandTableDataFetching}
          />
        </div>
      )}
    </div>
  );
};

export default RowComponent;
