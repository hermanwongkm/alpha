import React from "react";

import ModalComponent from "../modalComponent/ModalComponent";
import FoodIconComponent from "../foodIconComponent/FoodIconComponent";

import styles from "./MarkerComponent.module.css";

const MarkerComponent = (props: any) => {
  return (
    <div className={styles.wrapper}>
      <ModalComponent></ModalComponent>
      <FoodIconComponent></FoodIconComponent>
    </div>
  );
};

export default MarkerComponent;
