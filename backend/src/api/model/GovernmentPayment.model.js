import mongoose from "mongoose";

const governmentPaymentSchema = new mongoose.Schema({
  paymentType: {
    // Tax , Fine , Fee
    type: String,
    required: true,
  },
  PaymentId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  PaymenentDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

export default mongoose.model("GovernmentPayment", governmentPaymentSchema);
