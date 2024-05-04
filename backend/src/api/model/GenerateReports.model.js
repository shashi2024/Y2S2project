import mongoose from "mongoose";

const generateReportsSchema = new mongoose.Schema({
  reportType: {
    type: String,
    required: true,
  },
  reportId: {
    type: String,
    required: true,
    unique: true,
  },
  reportDate: {
    type: Date,
    required: true,
  },
  reportDescription: {
    type: String,
    required: true,
  },
});

export default mongoose.model("GenerateReports", generateReportsSchema);
