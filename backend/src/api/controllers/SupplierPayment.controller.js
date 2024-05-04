import mongoose from "mongoose";
import SupplierPayment from "../model/supplierPayment.Model";

// Get all supplier payments

export const getSupplierPayments = async (req, res) => {
  try {
    const supplierPayments = await SupplierPayment.find();
    res.status(200).json(supplierPayments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// insert supplier payment

export const insertSupplierPayment = async (req, res) => {
  const {
    PaymentId,
    supplierId,
    supplierName,
    email,
    contactNumber,
    paymentDate,
    paymentAmount,
    description,
    quality,
  } = req.body;
  const newSupplierPayment = new SupplierPayment({
    PaymentId,
    supplierId,
    supplierName,
    email,
    contactNumber,
    paymentDate,
    paymentAmount,
    description,
    quality,
  });
  try {
    await newSupplierPayment.save();
    res.status(201).json(newSupplierPayment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Get a supplier payment by id

export const getSupplierPaymentById = async (req, res) => {
  const { id } = req.params;
  try {
    const supplierPayment = await SupplierPayment.findById(id);
    res.status(200).json(supplierPayment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a supplier payment by id

export const updateSupplierPaymentById = async (req, res) => {
  const { id } = req.params;
  const {
    PaymentId,
    supplierId,
    supplierName,
    email,
    contactNumber,
    paymentDate,
    paymentAmount,
    description,
    quality,
  } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No supplier payment with id: ${id}`);
  const updatedSupplierPayment = {
    PaymentId,
    supplierId,
    supplierName,
    email,
    contactNumber,
    paymentDate,
    paymentAmount,
    description,
    quality,
    _id: id,
  };
  await SupplierPayment.findByIdAndUpdate(id, updatedSupplierPayment, {
    new: true,
  });
  res.json(updatedSupplierPayment);
};

// Delete a supplier payment by id

export const deleteSupplierPaymentById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No supplier payment with id: ${id}`);
  await SupplierPayment.findByIdAndDelete(id);
  res.json({ message: "supplier payment deleted successfully." });
};
