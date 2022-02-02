import {
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";

//Expiry date, call or put, strike
const NumberComponent = (props: any) => {
  const { formState } = useFormContext();

  useEffect(() => {
    console.log(formState.errors);
  }, [formState.errors]);
  return (
    <>
      <NumberInput min={1} onChange={props.onChange} value={props.value}>
        <NumberInputField placeholder="100" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </>
  );
};

export default NumberComponent;
