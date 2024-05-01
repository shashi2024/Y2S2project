import mongoose from "mongoose";

const CampShema = new mongoose.Schema({
  campName: {
    type: String,
  },
  budget: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  platform: {
    type: String,
  },
  description: {
    type: String,
  },
  tasks: {
    type: String,
  },
  status: {
    type: String,
  },
});

export default mongoose.model("Camp", CampShema);
