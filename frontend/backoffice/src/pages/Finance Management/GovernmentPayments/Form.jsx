import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import axios from "axios";

const CreateGovernmentPaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(JSON.stringify(data));

      const response = await axios.post(
        "http://localhost:5000/government-payments",
        data
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h1 className="text-2xl font-bold">Create Government Payment</h1>
      <hr className="border-t border-second_background mt-2 mb-12" />

      <div>
        <label className="block text-sm font-medium">Payment ID</label>
        <input
          {...register("PaymentId", { required: "Payment ID is required" })}
          placeholder="Enter Payment ID"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.PaymentId && (
          <p className="text-red-500">{errors.PaymentId.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Payment type</label>
        <select
          {...register("paymentType", { required: "Payment type is required" })}
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        >
          <option value="">-Select -</option>
          <option value="Income Tax">Income Tax</option>
          <option value="VAT">VAT</option>
          <option value="Property Tax">Property Tax</option>
          <option value="Others">Others</option>
        </select>
        {errors.paymentType && (
          <p className="text-red-500">{errors.paymentType.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Payment Date</label>
        <input
          {...register("paymentDate", { required: "Payment Date is required" })}
          placeholder="Enter Payment Date"
          type="date"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.paymentDate && (
          <p className="text-red-500">{errors.paymentDate.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Amount</label>
        <input
          {...register("paymentAmount", { required: "Amount is required" })}
          placeholder="Enter Amount"
          type="number"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.paymentAmount && (
          <p className="text-red-500">{errors.paymentAmount.message}</p>
        )}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};
export default CreateGovernmentPaymentForm;
