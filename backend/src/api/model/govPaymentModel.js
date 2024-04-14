// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const governmentPaymentSchema = new mongoose.Schema({
  paymentType: {
    type: String, // Data type of the schema
    required: true, // validation - if the feild should be filled or not
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
  discription: {
    type: String,
    required: false,
  },
});

// Create the model from the schema and export it
const GovernmentPayment = mongoose.model(
  "GovernmentPayment",
  governmentPaymentSchema
);
export default GovernmentPayment;
