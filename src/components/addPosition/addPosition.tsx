import { FormControl, FormLabel, Input, NumberInput, NumberInputField, NumberDecrementStepper, NumberIncrementStepper, NumberInputStepper, Button, useRadioGroup, Select, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import { useMutation } from 'urql';

import "react-datepicker/dist/react-datepicker.css";
import styles from './addTransaction.module.css'
import RadioGroup from '../radioButton/radioGroup';
import moment from 'moment';

//Expiry date, call or put, strike, premium
const AddPositionForm = (props) => {
    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            action: "buy",
            type: "stock",
        }
    });

    const actionOptions = [{ value: "Buy", color: "#28A745" }, { value: "Sell", color: "#DC3545" }]
    const onSubmit = (data: any) => {
        const transformedData = {
            ...data,
            date: moment.utc(data.date).format()
        }
        props.execute()
        console.log(transformedData)
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
                                        options={actionOptions}
                                    />
                                )}
                        />
                    </div>
                    <div className={styles.rowGroup}>
                        <div className={styles.formItem}>
                            <FormLabel>Type</FormLabel>
                            <Select placeholder="Select type"  {...register("type")} >
                                <option value="stock">Stock</option>
                                <option value="option">Options</option>
                            </Select>
                        </div>

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
                                name="date"
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
                    <div className={styles.rowGroup}>
                        <div className={styles.formItem}>
                    <FormLabel>Quantity</FormLabel>
                    <NumberInput min={1}>
                        <NumberInputField placeholder='100' {...register("quantity")} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                        </div>
                        <div className={styles.formItem}>
                    <FormLabel>Price</FormLabel>
                    <NumberInput min={1}>
                        <NumberInputField placeholder='$100' {...register("price")} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                        </div>
                    </div>
                </FormControl>
                <Button className={styles.submitButton}
                    mt={4}
                    colorScheme="teal"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}>
                    Submit
                </Button>
            </form>
        </div>
    )
}
export default AddPositionForm