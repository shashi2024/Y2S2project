// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const StaffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sID: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  nic: {
    type: Number,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

// Create the model from the schema and export it
const Staff = mongoose.model("Staff", StaffSchema);
export default Staff;
