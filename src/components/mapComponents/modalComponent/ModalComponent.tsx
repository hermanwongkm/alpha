import React from "react";

import styles from "./ModalComponent.module.css";

interface ModalComponentProps {
  entry: IModalEntry;
}

export interface IModalEntry {
  title: string;
  address: string;
  description: string;
  rating: number;
}

const ModalComponent = (props: ModalComponentProps) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>{props.entry.title}</div>
        <div className={styles.address}>
          Block 487 Segar Road #06-554, 670487
        </div>
        <div className={styles.description}>
          Bacio was smooth and dense. Apple pie was a bit water and icy. Waffle
          was nie and savoury, but texture was a bit too dense and cakey.
        </div>
        <p className={styles.ratingTitle}>Rating:</p>
        <div className={styles.rating}>4.7 ★★★★★</div>
        <div className={styles.modalTail}></div>
      </div>
    </>
  );
};

export default ModalComponent;
