import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import axios from "axios";

const CreateRefundPaymentForm = () => {
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
        "http://localhost:5000/refund-payments",
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
      <h1 className="text-2xl font-bold">Create Refund Payment</h1>
      <hr className="border-t border-second_background mt-2 mb-12" />
      <div>
        <label className="block text-sm font-medium">Refund Payment ID</label>
        <input
          {...register("refundRequestId", {
            required: "Refund Payment ID is required",
          })}
          placeholder="Enter Refund Payment ID"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.refundRequestId && (
          <p className="text-red-500">{errors.refundRequestId.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Refund type</label>
        <select
          {...register("refundType", { required: "Refund type is required" })}
          placeholder="Select Refund Type"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        >
          <option value="">-Select-</option>
          <option value="potion 1">option 1</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Refund Amount</label>
        <input
          {...register("refundAmount", {
            required: "Refund Amount is required",
          })}
          placeholder="Enter Refund Amount"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.refundAmount && (
          <p className="text-red-500">{errors.refundAmount.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Refund Date</label>
        <input
          {...register("refundDate", {
            required: "Refund Date is required",
          })}
          type="date"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.refundDate && (
          <p className="text-red-500">{errors.refundDate.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">
          Customer Payment Date
        </label>
        <input
          {...register("paymentDate", {
            required: "Customer payment Date is required",
          })}
          type="date"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.paymentDate && (
          <p className="text-red-500">{errors.paymentDate.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Refund Description</label>
        <textarea
          {...register("description", {
            required: "Refund Reason is required",
          })}
          placeholder="Enter the Description of the Refund Payment"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      <div>
        <Button type="submit">Create Refund Payment</Button>
      </div>
    </form>
  );
};

export default CreateRefundPaymentForm;
