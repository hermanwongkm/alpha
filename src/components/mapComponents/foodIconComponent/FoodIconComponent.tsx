import React from "react";

import styles from "./FoodIconComponent.module.css";

const FoodIconComponent = (props: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <img
          src="./bbq_icon.svg"
          alt="next"
          style={{ height: 18, width: 18 }}
        />
      </div>
    </div>
  );
};

export default FoodIconComponent;
