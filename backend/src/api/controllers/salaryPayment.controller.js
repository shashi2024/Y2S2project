import mongoose from "mongoose";
import SalaryPayment from "../model/salaryPayment.Model";

// Get all salary payments

export const getSalaryPayments = async (req, res) => {
  try {
    const salaryPayments = await SalaryPayment.find();
    res.status(200).json(salaryPayments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// insert salary payment

export const insertSalaryPayment = async (req, res) => {
  const {
    PaymentId,
    employeeId,
    paymentDate,
    basicSalary,
    Attendance,
    overtime,
    totalSalary,
    bankAccount,
    bankName,
  } = req.body;
  const newSalaryPayment = new SalaryPayment({
    PaymentId,
    employeeId,
    paymentDate,
    basicSalary,
    Attendance,
    overtime,
    totalSalary,
    bankAccount,
    bankName,
  });
  try {
    await newSalaryPayment.save();
    res.status(201).json(newSalaryPayment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Get a salary payment by id

export const getSalaryPaymentById = async (req, res) => {
  const { id } = req.params;
  try {
    const salaryPayment = await SalaryPayment.findById(id);
    res.status(200).json(salaryPayment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// Update a salary payment by id

export const updateSalaryPaymentById = async (req, res) => {
  const { id } = req.params;
  const {
    PaymentId,
    employeeId,
    paymentDate,
    basicSalary,
    Attendance,
    overtime,
    totalSalary,
    bankAccount,
    bankName,
  } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No SalaryPayment with id: ${id}`);
  const updatedSalaryPayment = {
    PaymentId,
    employeeId,
    paymentDate,
    basicSalary,
    Attendance,
    overtime,
    totalSalary,
    bankAccount,
    bankName,
    _id: id,
  };
  await SalaryPayment.findByIdAndUpdate(id, updatedSalaryPayment, {
    new: true,
  });
  res.json(updatedSalaryPayment);
};

// Delete a salary payment by id

export const deleteSalaryPaymentById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No SalaryPayment with id: ${id}`);
  await SalaryPayment.findByIdAndDelete(id);
  res.json({ message: "SalaryPayment deleted successfully." });
};
