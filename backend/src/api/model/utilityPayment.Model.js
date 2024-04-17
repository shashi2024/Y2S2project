// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const utilityPaymentSchema = new mongoose.Schema({
  utilityType: {
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
const UtilityPayment = mongoose.model("UtilityPayment", utilityPaymentSchema);
export default UtilityPayment;
