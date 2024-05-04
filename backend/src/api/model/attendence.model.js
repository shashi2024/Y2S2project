// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const AttendenceSchema = new mongoose.Schema({
  sId: {
    type: Number,
    required: true,
  },
  datestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create the model from the schema and export it
const Attendence = mongoose.model("Attendence", AttendenceSchema);
export default Attendence;