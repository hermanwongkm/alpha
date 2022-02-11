import React from "react";

import ModalComponent from "../modalComponent/ModalComponent";
import FoodIconComponent from "../foodIconComponent/FoodIconComponent";

import styles from "./MarkerComponent.module.css";

const MarkerComponent = (props: any) => {
  return (
    <div className={styles.wrapper}>
      <FoodIconComponent></FoodIconComponent>
      <ModalComponent></ModalComponent>
    </div>
  );
};

export default MarkerComponent;
