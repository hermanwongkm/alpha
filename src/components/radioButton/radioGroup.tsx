import React from 'react';
import { useRadioGroup, FormControl } from '@chakra-ui/react';
import RadioCard from './radioCard';

import styles from './radioButton.module.css';

const RadioGroup = (props: any) => {
  const { isRequired, onChange, options, test } = props;

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: options[0].value,
    onChange: onChange,
    isDisabled: true,
  });

  const group = getRootProps();

  return (
    <FormControl isRequired={isRequired}>
      <div className={styles.radioGroup}>
        {options.map((value) => {
          const radio = getRadioProps({ value: value.value });
          return (
            <RadioCard buttonColor={value.color} key={value.value} {...radio}>
              {value.value}
            </RadioCard>
          );
        })}
      </div>
    </FormControl>
  );
};

export default RadioGroup;
