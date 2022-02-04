import {
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  FormLabel,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface INumberComponentProps {
  name: string;
}

const NumberComponent = (props: INumberComponentProps) => {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <>
      <FormLabel>{props.name}</FormLabel>
      <Controller
        control={control}
        name={props.name}
        rules={{
          required: `This field is required.`,
        }}
        render={({ field: { onChange, value } }) => (
          <NumberInput min={1} onChange={onChange} value={value}>
            <NumberInputField placeholder="100" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
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

export default NumberComponent;
