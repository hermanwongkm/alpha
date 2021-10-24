import { FormControl, FormLabel, Input, NumberInput, NumberInputField, NumberDecrementStepper, NumberIncrementStepper, NumberInputStepper, Button, useRadioGroup, Select, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";
import { useMutation } from 'urql';

import "react-datepicker/dist/react-datepicker.css";
import styles from './addTransaction.module.css'
import RadioGroup from '../radioButton/radioGroup';
import moment from 'moment';

//Expiry date, call or put, strike
const AddPositionForm = (props) => {
    const { register, handleSubmit, control, watch } = useForm({
        defaultValues: {
            action: "buy",
            type: "stock",
        }
    });

    const createTransaction = `
        mutation($symbol: String, $price: Float){
            addStockTransaction(
            symbol:$symbol,
            openPrice: $price
            ){
            symbol,
            openPrice
            }
        }`

    const [result1, executeMutation] = useMutation(createTransaction)


    const isOption = watch("type") === "option"
    const actionOptions = [{ value: "Buy", color: "#28A745" }, { value: "Sell", color: "#DC3545" }]
    const onSubmit = (data: any) => {
        executeMutation({ symbol: "abc", price: 5 })
        const transformedData = {
            ...data,
            date: moment.utc(data.date).format(),
            expiryDate: data.expiryDate ? moment.utc(data.expiryDate).format() : null
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
                        {isOption && <div className={styles.formItem}>
                            <FormLabel>Option type</FormLabel>
                            <Select placeholder="Select type"  {...register("optionType")} >
                                <option value="call">Call</option>
                                <option value="put">Put</option>
                            </Select>
                        </div>}
                    </div>
                    {isOption && <div className={styles.rowGroup}>
                        <div className={styles.formItem}>
                            <FormLabel>Date</FormLabel>
                            <Controller
                                control={control}
                                name="expiryDate"
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
                        <div className={styles.formItem}>
                            <FormLabel>Strike Price</FormLabel>
                            <NumberInput min={1}>
                                <NumberInputField placeholder='$100' {...register("strike")} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </div>
                    </div>}
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
                                    ({ field: { onChange, onBlur, value, ref } }) => (
                                    <DatePicker
                                        wrapperClassName={styles.datePicker}
                                        dateFormat="dd/MM/yyyy"
                                        todayButton="Today"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        selected={value}
                                        />
                                    )
                                }
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