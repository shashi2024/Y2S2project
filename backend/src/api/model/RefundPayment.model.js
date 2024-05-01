import mongoose from "mongoose";

const RefundRequestSchema = new mongoose.Schema({
  refundRequestId: {
    type: String,
    required: true,
    unique: true,
  },
  refundType: {
    type: String,
    required: true,
  },
  refundAmount: {
    type: Number,
    required: true,
  },
  refundDate: {
    type: Date,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("RefundRequest", RefundRequestSchema);
