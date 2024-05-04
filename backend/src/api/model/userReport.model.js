// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const userReportSchema = new mongoose.Schema({
  uId: {
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
const userReport = mongoose.model("userReport", userReportSchema);
export default userReport;