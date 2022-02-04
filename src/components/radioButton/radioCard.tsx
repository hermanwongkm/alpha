import React from "react";
import { useRadio, Box, UseRadioProps } from "@chakra-ui/react";

import styles from "./radioButton.module.css";

//In some cases, you might need to create components that work like radios but don't look like radios.
// Chakra exports useRadio, and useRadioGroup hooks to help with this scenario
//UseRadioGroup is a wrapper around useRadio, and it's used to create a group of radio buttons
//It is inside the radioGroup class

// We are extending UseRadioProps as we need theses in useRadio method
interface IRadioCardProps extends UseRadioProps {
  buttonColor: string;
  children?: React.ReactNode;
}

// 1. Create a component that consumes the `useRadio` hook
const RadioCard = (props: IRadioCardProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const inputControllerProps = getInputProps(); // This is all your controlled input props like onChange, onBlur, etc.
  const checkbox = getCheckboxProps();

  const buttonColor = props.buttonColor;
  return (
    //In normal HTML, you would put a input inside your label, so that
    //if a user clicks on the text within the <label> element, it toggles the control
    //That's why the box has a as label. It is a chakra thing where a box can be a label
    <Box className={styles.radioButton} as="label">
      <input {...inputControllerProps} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        textAlign="center"
        _checked={{
          bg: buttonColor,
          color: "white",
          borderColor: buttonColor,
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {/* This is the stuff that we put inside the radioCard Component. We could technically type "Whatever" if we want */}
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioCard;
