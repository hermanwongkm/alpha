import React from "react";
import { useRadioGroup, FormControl, } from "@chakra-ui/react";
import RadioCard from "./radioCard";


import styles from './radioButton.module.css'

const RadioGroup = (props: any) => {
    var { isRequired, onChange } = props

    const { getRadioProps, getRootProps } = useRadioGroup({
        defaultValue: "Buy",
        onChange: onChange,
        isDisabled: true
    });

    const group = getRootProps()
    const options = ["Buy", "Sell"]

    return (
        <FormControl isRequired={isRequired} >
            <div className={styles.radioGroup}>
                {options.map((value) => {
                    const radio = getRadioProps({ value });
                    return (
                        <RadioCard key={value} {...radio} >
                            {value}
                        </RadioCard>
                    );
                })}
            </div>

        </FormControl >
    );
};

export default RadioGroup;
