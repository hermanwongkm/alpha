import React from "react";
import { useFormContext } from "react-hook-form";
import { FormLabel, Select } from "@chakra-ui/react";

interface IDropDownComponentProps {
  name: string;
  title: string;
  options: IDropDownOptionProps[];
}

interface IDropDownOptionProps {
  value: string;
  title: string;
}

const DropDownComponent = (props: IDropDownComponentProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormLabel>{props.title}</FormLabel>
      <Select placeholder="Select type" {...register(`${props.name}`)}>
        {props.options.map((option: IDropDownOptionProps) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </Select>
    </>
  );
};

export default DropDownComponent;
