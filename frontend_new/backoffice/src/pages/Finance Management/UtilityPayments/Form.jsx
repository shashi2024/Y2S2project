import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import axios from "axios";

const CreateUtilityPaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      console.log(JSON.stringify(data));

      const response = await axios.post(
        "http://localhost:5000/utility-payments",
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
      <h1 className="text-2xl font-bold">Create Utility Payment</h1>
      <hr className="border-t border-second_background mt-2 mb-12" />
      <div>
        <label className="block text-sm font-medium">Utility Payment ID</label>
        <input
          {...register("PaymentId", {
            required: "Utility Payment ID is required",
          })}
          placeholder="Enter Utility Payment ID"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.PaymentId && (
          <p className="text-red-500">{errors.PaymentId.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Utility type</label>
        <select
          {...register("utilityType", { required: "Utility type is required" })}
          placeholder="Select Utility Type"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        >
          <option value="">-Select-</option>
          <option value="Electricity">Electricity</option>
          <option value="Water">Water</option>
          <option value="Gas">Gas</option>
          <option value="Internet">Internet</option>
          <option value="Telephone">Telephone</option>
        </select>
      </div>
      <div>
        <div>
          <label className="block text-sm font-medium">Payment Date</label>
          <input
            {...register("paymentDate", {
              required: "Payment Date is required",
            })}
            type="date"
            placeholder="Enter Payment Date"
            className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
          />
          {errors.paymentDate && (
            <p className="text-red-500">{errors.paymentDate.message}</p>
          )}
        </div>
        <label className="block text-sm font-medium">Amount</label>
        <input
          {...register("paymentAmount", {
            required: "Amount is required",
            pattern: { value: Number, message: "Please enter valid amount" },
          })}
          placeholder="Enter Amount"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.paymentAmount && (
          <p className="text-red-500">{errors.paymentAmount.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Payment Description</label>
        <textarea
          {...register("description", {
            required: "Payment Description is required",
          })}
          placeholder="Enter Payment Description"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
export default CreateUtilityPaymentForm;
