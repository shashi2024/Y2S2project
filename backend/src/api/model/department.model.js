// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const DepartmentSchema = new mongoose.Schema({
  dID: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});

// Create the model from the schema and export it
const Department = mongoose.model("Department", DepartmentSchema);
export default Department;