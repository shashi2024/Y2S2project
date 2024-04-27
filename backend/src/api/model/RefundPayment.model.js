import mongoose from "mongoose";

const refundPaymentSchema = new mongoose.Schema({
  refundId: {
    type: String,
    required: true,
    unique: true,
  },
  customerId: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  refundDate: {
    type: Date,
    required: true,
  },
  refundAmount: {
    type: Number,
    required: true,
  },
  refundDescription: {
    type: String,
    required: true,
  },
});
export default mongoose.model("RefundPayment", refundPaymentSchema);
