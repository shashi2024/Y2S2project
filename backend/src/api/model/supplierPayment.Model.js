// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const supplierPaymentSchema = new mongoose.Schema({
  paymentId: {
    type: Number,
    required: true,
  },
  name: {
    type: String, // Data type of the schema
    required: true, // validation - if the feild should be filled or not
  },
  supplierId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true, // Email is required
    unique: true, // Email must be unique
    lowercase: true, // Convert email to lowercase before saving
  },
  tele: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  AccountNo: {
    type: String,
    required: true, // Account number is required
    unique: true, // Account number must be unique
  },
});

// Create the model from the schema and export it
const SupplierPayment = mongoose.model("Supplier", supplierPaymentSchema);
export default SupplierPayment;
