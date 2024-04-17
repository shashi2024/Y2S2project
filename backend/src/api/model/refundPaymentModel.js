// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const refundPaymentSchema = new mongoose.Schema({
  customerId: {
    type: String, // Data type of the schema
    required: true, // validation - if the feild should be filled or not
    uneque: true,
  },
  PaymentId: {
    type: String,
    required: true,
    unique: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  PaymenentDate: {
    type: Date,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
});

// Create the model from the schema and export it
const RefundPayment = mongoose.model("UtilityPayment", refundPaymentSchema);
export default RefundPayment;
