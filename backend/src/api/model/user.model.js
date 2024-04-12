// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rID: {
    type: Number,
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
  dID:{
    type: Number,
    required: true,
  },
});

// Create the model from the schema and export it
const User = mongoose.model("User", UserSchema);
export default User;