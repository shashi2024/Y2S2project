import mongoose from "mongoose";

const salaryPaymentSchema = new mongoose.Schema({
  PaymentId: {
    type: String,
    required: true,
    unique: true,
  },
  EmployeeId: {
    type: String,
    required: true,
    unique: true,
  },
  EmployeeName: {
    type: String,
    required: true,
  },
  basicSalary: {
    type: Number,
    required: true,
  },
  attendence: {
    type: Number,
    required: true,
  },
  otHours: {
    type: Number,
    required: true,
  },
  bankName: {
    type: String,
    required: false,
  },
  AccountNum: {
    type: Number,
    required: true,
  },
  PaymenentDate: {
    type: Date,
    required: true,
  },
  discription: {
    type: String,
    required: false,
  },
  totalSalary: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("SalaryPayment", salaryPaymentSchema);

// { bufferCommands: false, bufferMaxEntries: 0 }
