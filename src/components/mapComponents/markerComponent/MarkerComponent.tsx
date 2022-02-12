import React from "react";

import ModalComponent, { IModalEntry } from "../modalComponent/ModalComponent";
import FoodIconComponent from "../foodIconComponent/FoodIconComponent";

import styles from "./MarkerComponent.module.css";

interface MarkerComponentProps {
  index: number;
  isModalOpen: boolean;
  entry: IModalEntry;
  setOpenModal: (index: number) => void;
  lat: number;
  lng: number;
}

const MarkerComponent = (props: MarkerComponentProps) => {
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        props.setOpenModal(props.index);
      }}
    >
      {props.isModalOpen ? <ModalComponent entry={props.entry} /> : null}
      <FoodIconComponent />
    </div>
  );
};

export default MarkerComponent;
