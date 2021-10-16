import { FormControl, FormLabel, Input, NumberInput, NumberInputField, NumberDecrementStepper, NumberIncrementStepper, NumberInputStepper, Button, useRadioGroup, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from './addTransaction.module.css'
import RadioGroup from './radioGroup';

const AddPositionForm = () => {
    const { register, handleSubmit, control } = useForm();
    const onSubmit = (data) => {
        console.log(data);

    };

    return (
        <div className={styles.wrapper}>
            <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <div>
                        <Controller
                            control={control}
                            name="action"
                            render={
                                ({ field: { onChange, onBlur, value, ref } }) =>
                                (
                                    <RadioGroup
                                        name="action"
                                        control={control}
                                        onChange={onChange}
                                    />
                                )}
                        />
                    </div>
                    <div className={styles.rowGroup}>
                        <div className={styles.formItem}>
                            <FormLabel>Stock Name</FormLabel>
                            <Input type='text' placeholder='AAPL' {...register("symbol")} />
                        </div>
                        <div className={styles.formItem}>
                            <FormLabel>Date</FormLabel>
                            <Controller
                                control={control}
                                name="ReactDatepicker"
                                render={
                                    ({ field: { onChange, onBlur, value, ref } }) =>
                                    (
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
                        </div>
                    </div>
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