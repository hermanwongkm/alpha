import { FormControl, FormLabel, Input, NumberInput, NumberInputField, NumberDecrementStepper, NumberIncrementStepper, NumberInputStepper, Button, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddPositionForm = () => {
    const { register, handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);

    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <FormLabel>Stock Name</FormLabel>
                    <Input type='text' placeholder='AAPL' {...register("symbol")} />

                    <Controller
                        control={control}
                        name="ReactDatepicker"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <ReactDatePicker
                                onChange={onChange}
                                onBlur={onBlur}
                                selected={value}
                            />
                        )}
                    />
                    <FormLabel>Quantity</FormLabel>
                    <NumberInput min={1}>
                        <NumberInputField placeholder='100' {...register("quantity")} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormLabel>Price</FormLabel>
                    <NumberInput min={1}>
                        <NumberInputField placeholder='$100' {...register("price")} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
                <Button mt={4} colorScheme="teal" type="submit" onClick={handleSubmit(onSubmit)}>
                    Submit
                </Button>
            </form>
        </div>
    )
}
export default AddPositionForm