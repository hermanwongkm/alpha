import React from "react";

import type { Image } from "next";
import styles from "./FoodIconComponent.module.css";
import ModalComponent from "../modalComponent/ModalComponent";

const FoodIconComponent = (props: any) => {
  return (
    <div className={styles.wrapper}>
      <ModalComponent></ModalComponent>
      <div className={styles.iconWrapper}>
        <img
          src="./bbq_icon.svg"
          alt="next"
          style={{ height: 20, width: 20 }}
        />
      </div>
    </div>
  );
};

export default FoodIconComponent;
