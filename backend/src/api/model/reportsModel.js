// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const genarateReportsSchema = new mongoose.Schema({
  Type: {
    // utility bill / tax / salary etc.
    type: String, // Data type of the schema
    required: true, // validation - if the feild should be filled or not
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },    
});

// Create the model from the schema and export it
const GenarateReports = mongoose.model(
  "GovernmentPayment",
  genarateReportsSchema
);
export default GenarateReports;
