// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const supplierSchema = new mongoose.Schema({
  name: {
    type: String, // Data type of the schema
    required: true, // validation - if the feild should be filled or not
  },
  id: {
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
const Supplier = mongoose.model("Supplier", supplierSchema);
export default Supplier;
