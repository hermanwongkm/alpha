import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import RadioGroup from "../../radioButton/radioGroup";

export interface IRadioGroupOptions {
  value: string;
  color: string;
}

interface IRadioComponentProps {
  options: IRadioGroupOptions[];
  name: string;
}

const RadioComponent = (props: IRadioComponentProps) => {
  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name={props.name}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <RadioGroup onChange={onChange} options={props.options} />
        )}
      />
    </>
  );
};

export default RadioComponent;
