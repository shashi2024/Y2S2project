import mongoose from "mongoose";

const GovernmentPaymentSchema = new mongoose.Schema({
  PaymentId: {
    type: String,
    required: true,
    unique: true,
  },
  paymentType: {
    type: String,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
  paymentAmount: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("GovernmentPayment", GovernmentPaymentSchema);
