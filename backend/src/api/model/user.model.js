// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rID: {
    type: String,
    required: true,
  },
  uID: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  department:{
    type: String,
    required: true,
  },
});

// Create the model from the schema and export it
const User = mongoose.model("User", UserSchema);
export default User;