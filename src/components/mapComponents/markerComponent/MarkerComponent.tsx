import React from "react";

import ModalComponent from "../modalComponent/ModalComponent";
import FoodIconComponent from "../foodIconComponent/FoodIconComponent";

import styles from "./MarkerComponent.module.css";

interface MarkerComponentProps {
  isModalOpen: boolean;
  lat: number;
  lng: number;
  entry: any;
}

const MarkerComponent = (props: MarkerComponentProps) => {
  return (
    <div className={styles.wrapper}>
      {props.isModalOpen ? <ModalComponent entry={props.entry} /> : null}
      <FoodIconComponent />
    </div>
  );
};

export default MarkerComponent;
