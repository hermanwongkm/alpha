import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import { useMutation } from "urql";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./addTransaction.module.css";
import NumberComponent from "../simpleComponents/numberComponent/NumberComponent";
import RadioComponent from "../simpleComponents/radioComponent/RadioComponent";
import DatePickerComponent from "../simpleComponents/datePickerComponent/DatePickerComponent";

enum Fields {
  positionSize = "size",
  price = "price",
  strike = "strike",
}

const AddPositionForm = (props: any) => {
  const formMethods = useForm({
    defaultValues: {
      action: "buy",
      type: "stock",
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = formMethods;

  const createTransaction = `
        mutation($symbol: String, $price: Float, $size: Int){
            addStockTransaction(
            symbol:$symbol,
            openPrice: $price,
            size: $size,
            ){
            symbol,
            openPrice
            }
        }`;

  const [result1, executeMutation] = useMutation(createTransaction);

  const isOption = watch("type") === "option";

  const actionOptions = [
    { value: "Buy", color: "#28A745" },
    { value: "Sell", color: "#DC3545" },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
    const transformedData = {
      // action: data.action,
      symbol: data.symbol,
      price: parseInt(data.price),
      size: parseInt(data.size),
      // date: moment.utc(data.date).format(),
      // expiryDate: data.expiryDate ? moment.utc(data.expiryDate).format() : null
    };
    // console.log(transformedData);
    executeMutation(transformedData);
    // reset({ size: 2, price: 0, symbol: "Hello" });
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className={styles.wrapper}>
      <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...formMethods}>
          <FormControl>
            <RadioComponent name="action" options={actionOptions} />
            <div className={styles.rowGroup}>
              <div className={styles.formItem}>
                <FormLabel>Type</FormLabel>
                <Select placeholder="Select type" {...register("type")}>
                  <option value="stock">Stock</option>
                  <option value="option">Options</option>
                </Select>
              </div>
              {isOption && (
                <div className={styles.formItem}>
                  <FormLabel>Option type</FormLabel>
                  <Select placeholder="Select type" {...register("optionType")}>
                    <option value="call">Call</option>
                    <option value="put">Put</option>
                  </Select>
                </div>
              )}
            </div>
            <div className={styles.rowGroup}>
              <div className={styles.formItem}>
                <FormLabel>Stock Name</FormLabel>
                <Input type="text" placeholder="AAPL" {...register("symbol")} />
              </div>
              <div className={styles.formItem}>
                <DatePickerComponent title="Date" name="date" />
              </div>
            </div>
            <div className={styles.rowGroup}>
              <div className={styles.formItem}>
                <NumberComponent name={Fields.positionSize} />
              </div>
              <div className={styles.formItem}>
                <NumberComponent name={Fields.price} />
              </div>
            </div>
            {isOption && (
              <div className={styles.rowGroup}>
                <div className={styles.formItem}>
                  <DatePickerComponent title="Expiry Date" name="expiryDate" />
                </div>
                <div className={styles.formItem}>
                  <NumberComponent name={Fields.strike} />
                </div>
              </div>
            )}
          </FormControl>
        </FormProvider>

        <Button
          className={styles.submitButton}
          mt={4}
          colorScheme="teal"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddPositionForm;
