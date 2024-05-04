// Import the mongoose module
import mongoose from "mongoose";

// Define the schema
const RegisterSchema = new mongoose.Schema({
    email: {
    type: String,
    required: true,
  },
  userRoll: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the model from the schema and export it
const Register = mongoose.model("Register", RegisterSchema);
export default Register;