import mongoose from "mongoose";
import RefundPayment from "../model/RefundPayment.model";

// Get all Refund Payments

export const getRefundPayments = async (req, res) => {
  try {
    const refundPayments = await RefundPayment.find();
    res.status(200).json(refundPayments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get a refund payment by ID

export const getRefundPaymentById = async (req, res) => {
  const { id } = req.params;
  try {
    const refundPayment = await RefundPayment.findById(id);
    res.status(200).json(refundPayment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// insert a new Refund Payment

export const insertRefundPayment = async (req, res) => {
  const { paymentType, paymentId, paymentDate, paymentDescription } = req.body;
  const newRefundPayment = new RefundPayment({
    paymentType,
    paymentId,
    paymentDate,
    paymentDescription,
  });
  try {
    await newRefundPayment.save();
    res.status(201).json(newRefundPayment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
// Update a Refund Payment by ID

export const updateRefundPaymentById = async (req, res) => {
  const { id } = req.params;
  const { paymentType, paymentId, paymentDate, paymentDescription } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Refund Payment with that id");
  const updatedRefundPayment = {
    paymentType,
    paymentId,
    paymentDate,
    paymentDescription,
    _id: id,
  };
  await RefundPayment.findByIdAndUpdate(id, updatedRefundPayment, {
    new: true,
  });
  res.json(updatedRefundPayment);
};

// delete a refund payment by ID
export const deleteRefundPaymentById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Refund Payment with that id");
  await RefundPayment.findByIdAndDelete(id);
  res.json({ message: "Refund Payment deleted successfully." });
};
