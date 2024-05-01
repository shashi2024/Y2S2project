import mongoose from "mongoose";

const GenerateReportsSchema = new mongoose.Schema({
  reportId: {
    type: String,
    required: true,
    unique: true,
  },
  reportType: {
    type: String,
    required: true,
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("GenerateReports", GenerateReportsSchema);
