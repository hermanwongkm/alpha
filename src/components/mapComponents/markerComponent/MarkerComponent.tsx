import React from "react";

import styles from "./MarkerComponent.module.css";
import ModalComponent from "../modalComponent/ModalComponent";
import FoodIconComponent from "../foodIconComponent/FoodIconComponent";

const MarkerComponent = (props: any) => {
  return (
    <div className={styles.wrapper}>
      <ModalComponent></ModalComponent>
      <FoodIconComponent></FoodIconComponent>
    </div>
  );
};

export default MarkerComponent;
