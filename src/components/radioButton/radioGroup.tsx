import React from "react";
import { useRadioGroup } from "@chakra-ui/react";
import RadioCard from "./radioCard";

import styles from "./radioButton.module.css";
import { IRadioGroupOptions } from "../simpleComponents/RadioComponent";

interface IRadioGrouptProps {
  options: IRadioGroupOptions[];
  onChange: (value: string) => void;
}

const RadioGroup = (props: IRadioGrouptProps) => {
  const { onChange, options } = props;

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: options[0].value,
    onChange: onChange,
    isDisabled: true,
  });

  const group = getRootProps();

  return (
    <div className={styles.radioGroup}>
      {options.map((value) => {
        //This will return various props like `isChecked`, `onChange`, name and value etc.
        const radio = getRadioProps({ value: value.value });
        return (
          <RadioCard buttonColor={value.color} key={value.value} {...radio}>
            {value.value}
          </RadioCard>
        );
      })}
    </div>
  );
};

export default RadioGroup;
