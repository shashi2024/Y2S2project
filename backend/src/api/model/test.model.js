import mongoose from "mongoose";

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

const Test = mongoose.model("Test", TestSchema);
export default Test;
