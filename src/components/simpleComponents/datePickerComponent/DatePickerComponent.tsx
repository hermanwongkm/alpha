import React from "react";
import DatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import { FormLabel, Alert, AlertIcon } from "@chakra-ui/react";

import styles from "./DatePickerComponent.module.css";
import "react-datepicker/dist/react-datepicker.css";

interface IDatePickerComponentProps {
  name: string;
  title: string;
}

const DatePickerComponent = (props: IDatePickerComponentProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormLabel>{props.title}</FormLabel>
      <Controller
        control={control}
        name={props.name}
        rules={{
          required: `Please enter ${props.title}`,
          validate: {
            equals: (password) =>
              password !== "this is just" || "an example of validation",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <DatePicker
            wrapperClassName={styles.datePicker}
            dateFormat="dd/MM/yyyy"
            todayButton="Today"
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
          />
        )}
      />
      {errors[props.name] && (
        <Alert
          status="error"
          fontSize="sm"
          marginTop="1rem"
          borderRadius="0.5rem"
        >
          <AlertIcon />
          {errors[props.name].message}
        </Alert>
      )}
    </>
  );
};

export default DatePickerComponent;
