import mongoose from "mongoose";
import RefundRequest from "../model/RefundPayment.model";

// Get all refund requests

export const getRefundRequests = async (req, res) => {
  try {
    const refundRequests = await RefundRequest.find();
    res.status(200).json(refundRequests);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// insert refund request

export const insertRefundRequest = async (req, res) => {
  const {
    refundRequestId,
    refundType,
    refundAmount,
    refundDate,
    paymentDate,
    description,
  } = req.body;
  const newRefundRequest = new RefundRequest({
    refundRequestId,
    refundType,
    refundAmount,
    refundDate,
    paymentDate,
    description,
  });
  try {
    await newRefundRequest.save();
    res.status(201).json(newRefundRequest);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Get a refund request by id

export const getRefundRequestById = async (req, res) => {
  const { id } = req.params;
  try {
    const refundRequest = await RefundRequest.findById(id);
    res.status(200).json(refundRequest);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a refund request by id

export const updateRefundRequestById = async (req, res) => {
  const { id } = req.params;
  const {
    refundRequestId,
    refundType,
    refundAmount,
    refundDate,
    paymentDate,
    description,
  } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No refund request with id: ${id}`);
  const updatedRefundRequest = {
    refundRequestId,
    refundType,
    refundAmount,
    refundDate,
    paymentDate,
    description,
    _id: id,
  };
  await RefundRequest.findByIdAndUpdate(id, updatedRefundRequest, {
    new: true,
  });
  res.json(updatedRefundRequest);
};

// Delete a refund request by id

export const deleteRefundRequestById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No refund request with id: ${id}`);
  await RefundRequest.findByIdAndDelete(id);
  res.json({ message: "Refund request deleted successfully." });
};
