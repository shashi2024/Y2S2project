import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  rID: Number,
  uID: Number,
  email: String,
  dID: Number,
<<<<<<< HEAD
  userRole: { type: mongoose.Schema.Object.Id.ObjectId, ref: "Role" },
=======
>>>>>>> 880c69adf5653c1a2fd43fd1fcc88971da3076c7
});

const User = mongoose.model("User", userSchema);

export default User;
