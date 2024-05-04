import mongoose from "mongoose";
import UtilityPayment from "../model/utilityPayment.Model";

// Get all utility payments

export const getUtilityPayments = async (req, res) => {
  try {
    const utilityPayments = await UtilityPayment.find();
    res.status(200).json(utilityPayments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// insert utility payment

export const insertUtilityPayment = async (req, res) => {
  const { PaymentId, utilityType, paymentDate, paymentAmount, description } =
    req.body;
  const newUtilityPayment = new UtilityPayment({
    PaymentId,
    utilityType,
    paymentDate,
    paymentAmount,
    description,
  });
  try {
    await newUtilityPayment.save();
    res.status(201).json(newUtilityPayment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Get a utility payment by id

export const getUtilityPaymentById = async (req, res) => {
  const { id } = req.params;
  try {
    const utilityPayment = await UtilityPayment.findById(id);
    res.status(200).json(utilityPayment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a utility payment by id

export const updateUtilityPaymentById = async (req, res) => {
  const { id } = req.params;
  const { PaymentId, utilityType, paymentDate, paymentAmount, description } =
    req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No UtilityPayment with id: ${id}`);
  const updatedUtilityPayment = {
    PaymentId,
    utilityType,
    paymentDate,
    paymentAmount,
    description,
    _id: id,
  };
  await UtilityPayment.findByIdAndUpdate(id, updatedUtilityPayment, {
    new: true,
  });
  res.json(updatedUtilityPayment);
};

// Delete a utility payment by id

export const deleteUtilityPaymentById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No UtilityPayment with id: ${id}`);
  await UtilityPayment.findByIdAndDelete(id);
  res.json({ message: "Utility Payment deleted successfully." });
};
