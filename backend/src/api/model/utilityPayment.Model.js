import mongoose from "mongoose";

const UtilityPaymentSchema = new mongoose.Schema({
  PaymentId: {
    type: String,
    required: true,
    unique: true,
  },
  utilityType: {
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
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("UtilityPayment", UtilityPaymentSchema);
