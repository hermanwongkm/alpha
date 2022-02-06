import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

import styles from "./TableComponent.module.css";

interface ITableComponentProps {
  name: string;
  headers: IColumnHeader[];
}

interface IColumnHeader {
  title: string;
  key: string;
  width: string;
}

const generateColumn = () => {
  return "1fr 1fr 2fr 1fr";
};

const x = 4;
const TableComponent = (props: ITableComponentProps) => {
  return (
    <div
      className={styles.wrapper}
      style={{ gridTemplateColumns: generateColumn() }}
    >
      <div className={styles.entry}>1</div>
      <div className={styles.entry}>2</div>
      <div className={styles.entry}>3</div>
      <div className={styles.entry}>4</div>
      <div className={styles.entry}>5</div>
      <div className={styles.entry}>6</div>
      <div className={styles.entry}>7</div>
    </div>
  );
};

export default TableComponent;
