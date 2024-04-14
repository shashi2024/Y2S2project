// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const utilityPaymentSchema = new mongoose.Schema({
  empId: {
    type: String, // Data type of the schema
    unique: true,
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
  attendence: {
    type: Number,
    required: true,
  },
  otHours: {
    type: Number,
    required: true,
  },
  bonus: {
    type: Number,
    required: false,
  },
  bankName: {
    type: String,
    required: false,
  },
  AccountNum: {
    type: Number,
    required: true,
  },
});

// Create the model from the schema and export it
const UtilityPayment = mongoose.model("UtilityPayment", utilityPaymentSchema);
export default UtilityPayment;
