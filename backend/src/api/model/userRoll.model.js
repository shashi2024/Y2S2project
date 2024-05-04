// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const UserRollSchema = new mongoose.Schema({
  rollName: {
    type: String,
    required: true,
  },
  rID: {
    type: Number,
    required: true,
  },
});

// Create the model from the schema and export it
const UserRoll = mongoose.model("userRoll", UserRollSchema);
export default UserRoll;