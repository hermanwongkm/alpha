import React, { FC } from "react";
import { useRadio, Box } from "@chakra-ui/react";

import styles from './addTransaction.module.css'

const RadioCard: FC = (props: any) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    console.log(props.children)
    const input = getInputProps();
    const checkbox = getCheckboxProps();

    const buttonColor = props.children == "Buy" ? "green.500" : "red.500"

    return (
        <Box className={styles.radioButton} as="label">
            < input {...input} />
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
                    borderColor: buttonColor
                }}
                _focus={{
                    boxShadow: "outline"
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    );
};

export default RadioCard;
