// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const TestSchema = new mongoose.Schema({
  randomNo: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create the model from the schema and export it
const Test = mongoose.model("Test", TestSchema);
export default Test;
