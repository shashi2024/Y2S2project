import mongoose from "mongoose";

const utilityPaymentSchema = new mongoose.Schema({
  paymentType: {
    // Electricity , Water , Gas
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

export default mongoose.model("UtilityPayment", utilityPaymentSchema);
