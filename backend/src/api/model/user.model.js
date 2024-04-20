import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  rID: Number,
  uID: Number,
  email: String,
  dID: Number,
});

const User = mongoose.model("User", userSchema);

export default User;
