import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import axios from "axios";

const CreateSupplierPaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      console.log(JSON.stringify(data));

      // Convert the date to remove the timestamp
      const formattedDate = new Date(data.paymentDate)
        .toISOString()
        .split("T")[0];
      // Update the data object with the formatted date
      data.paymentDate = formattedDate;

      const response = await axios.post(
        "http://localhost:5000/supplier-payments  ",
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
      <h1 className="text-2xl font-bold">Create Supplier Payment</h1>
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
        <label className="block text-sm font-medium">Supplier ID</label>
        <input
          {...register("supplierId", { required: "Supplier ID is required" })}
          placeholder="Enter Supplier ID"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.supplierId && (
          <p className="text-red-500">{errors.supplierId.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Supplier Name</label>
        <input
          {...register("supplierName", {
            required: "Supplier Name is required",
          })}
          placeholder="Enter Supplier Name"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.supplierName && (
          <p className="text-red-500">{errors.supplierName.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          {...register("email", { required: "Email is required" })}
          placeholder="Enter Email"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Contact Number</label>
        <input
          {...register("contactNumber", {
            required: "Contact Number is required",
          })}
          placeholder="Enter Contact Number"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.contactNumber && (
          <p className="text-red-500">{errors.contactNumber.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Payment Date</label>
        <input
          {...register("paymentDate", {
            required: "Payment Date is required",
          })}
          placeholder="Enter Payment Date"
          type="date"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.paymentDate && (
          <p className="text-red-500">{errors.paymentDate.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Quality</label>
        <select
          {...register("quality", {
            required: "Quality is required",
          })}
          placeholder="Enter Quality"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        >
          <option value="">-Select-</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium">Payment Amount</label>
        <input
          {...register("paymentAmount", {
            required: "Payment Amount is required",
          })}
          placeholder="Enter Payment Amount"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.paymentAmount && (
          <p className="text-red-500">{errors.paymentAmount.message}</p>
        )}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Enter Description"
            className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default CreateSupplierPaymentForm;
