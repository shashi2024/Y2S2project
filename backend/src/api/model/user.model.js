// Import the mongoose module
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

  name: String,
  rID: Number,
  uID: Number,
  email: String,
  dID: Number,
  userRole: { type: mongoose.Schema.Object.Id.ObjectId, ref: "Role" },
});

// Create the model from the schema and export it
const User = mongoose.model("User", UserSchema);
export default User;
