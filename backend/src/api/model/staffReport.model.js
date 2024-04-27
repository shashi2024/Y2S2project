// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const StaffReportSchema = new mongoose.Schema({
  sId: {
    type: Number,
    required: true,
  },
  noHrs: {
    type: Number,
    required: true,
  },
  activites: {
    type: String,
    required: true,
  }
});

// Create the model from the schema and export it
const StaffReport = mongoose.model("StaffReport", StaffReportSchema);
export default StaffReport;