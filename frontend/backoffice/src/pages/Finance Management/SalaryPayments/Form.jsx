import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import axios from "axios";

function CreateSalaryPaymentForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [totalSalary, setTotalSalary] = useState(0); // State variable to store total salary

  const calculateTotalSalary = (basicSalary, overtime) => {
    const overtimePay = overtime * 1000; // Calculate overtime pay
    const newTotalSalary = basicSalary + overtimePay;
    return newTotalSalary; // Return the calculated total salary
  };

  const handleCalculateClick = (data) => {
    const { basicSalary, overtime } = data; // Get values from form data
    const calculatedTotalSalary = calculateTotalSalary(basicSalary, overtime); // Calculate total salary
    setTotalSalary(calculatedTotalSalary); // Update total salary state
  };

  const onSubmit = async (data) => {
    console.log(data);
    data.totalSalary = totalSalary; // Add calculated total salary to data object

    try {
      console.log(JSON.stringify(data));

      const response = await axios.post(
        "http://localhost:5000/salary-payments",
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
      <h1 className="text-2xl font-bold">Create Salary Payment</h1>
      <h1 className="border-t border-second_background mt-2 mb-12"></h1>
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
        <label className="block text-sm font-medium">Employee ID</label>
        <input
          {...register("employeeId", { required: "Employee ID is required" })}
          placeholder="Enter Employee ID"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.employeeId && (
          <p className="text-red-500">{errors.employeeId.message}</p>
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
        <label className="block text-sm font-medium">Overtime</label>
        <input
          {...register("overtime", {
            required: "Overtime is required",
            valueAsNumber: true,
            min: {
              value: 0,
              message: "Overtime must be a positive Number",
            },
            onChange: (event) => {
              const basicSalary = getValues("basicSalary");
              calculateTotalSalary(basicSalary, event.target.value); // Update total salary on overtime change
            },
          })}
          placeholder="Enter Overtime"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.overtime && (
          <p className="text-red-500">{errors.overtime.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Basic Salary</label>
        <input
          {...register("basicSalary", {
            required: "Basic Salary",
            valueAsNumber: true,
            min: {
              value: 0,
              message: "Basic Salary must be a positive Number",
            },
            onChange: (event) => {
              calculateTotalSalary(event.target.value, overtime.value); // Update total salary on basic salary change
            },
          })}
          placeholder="Enter Basic Salary"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.basicSalary && (
          <p className="text-red-500">{errors.basicSalary.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Attendance</label>
        <input
          {...register("Attendance", {
            required: "Attendance is required",
            valueAsNumber: true,
            min: {
              value: 0,
              message: "Attendance must be a positive Number",
            },
          })}
          placeholder="Enter Attendance"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.Attendance && (
          <p className="text-red-500">{errors.Attendance.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Bank Name</label>
        <input
          {...register("bankName", { required: "Bank Name is required" })}
          placeholder="Enter Bank Name"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.bankName && (
          <p className="text-red-500">{errors.bankName.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Account Number</label>
        <input
          {...register("bankAccount", {
            required: "Account Number is required",
          })}
          placeholder="Enter Account Number"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.bankAccount && (
          <p className="text-red-500">{errors.bankAccount.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">Total Salary</label>
        <input
          {...register("totalSalary", {
            required: "Total Salary is required",
            valueAsNumber: true,
            min: {
              value: 0,
              message: "Total Salary must be a positive Number",
            },
          })}
          placeholder="Enter Total Salary"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
          value={totalSalary} // Display the calculated total salary in the input field
          readOnly // Make the total salary field read-only
        />
        {errors.totalSalary && (
          <p className="text-red-500">{errors.totalSalary.message}</p>
        )}
      </div>
      <Button onClick={() => handleCalculateClick(getValues())}>submit</Button>
    </form>
  );
}

export default CreateSalaryPaymentForm;
