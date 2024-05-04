import mongoose from "mongoose";
import GovernmentPayment from "../model/GovernmentPayment.model";

// Get all GovernmentPayments

export const getGovernmentPayments = async (req, res) => {
  try {
    const governmentPayments = await GovernmentPayment.find();
    res.status(200).json(governmentPayments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// insert GovernmentPayment

export const insertGovernmentPayment = async (req, res) => {
  const { PaymentId, paymentType, paymentDate, paymentAmount } = req.body;
  const newGovernmentPayment = new GovernmentPayment({
    PaymentId,
    paymentType,
    paymentDate,
    paymentAmount,
  });
  try {
    await newGovernmentPayment.save();
    res.status(201).json(newGovernmentPayment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Get a GovernmentPayment by id

export const getGovernmentPaymentById = async (req, res) => {
  const { id } = req.params;
  try {
    const governmentPayment = await GovernmentPayment.findById(id);
    res.status(200).json(governmentPayment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a GovernmentPayment by id

export const updateGovernmentPaymentById = async (req, res) => {
  const { id } = req.params;
  const { PaymentId, paymentType, paymentDate, paymentAmount } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No GovernmentPayment with id: ${id}`);
  const updatedGovernmentPayment = {
    PaymentId,
    paymentType,
    paymentDate,
    paymentAmount,
    _id: id,
  };
  await GovernmentPayment.findByIdAndUpdate(id, updatedGovernmentPayment, {
    new: true,
  });
  res.json(updatedGovernmentPayment);
};

// Delete a GovernmentPayment by id

export const deleteGovernmentPaymentById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No GovernmentPayment with id: ${id}`);
  await GovernmentPayment.findByIdAndDelete(id);
  res.json({ message: "GovernmentPayment deleted successfully." });
};
