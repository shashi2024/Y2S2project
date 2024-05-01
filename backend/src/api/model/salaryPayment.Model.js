import mongoose from "mongoose";

const SalaryPaymentSchema = new mongoose.Schema({
  PaymentId: {
    type: String,
    required: true,
    unique: true,
  },
  employeeId: {
    type: String,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
  basicSalary: {
    type: Number,
    required: true,
  },
  Attendance: {
    type: Number,
    required: true,
  },
  overtime: {
    type: Number,
    required: true,
  },
  totalSalary: {
    type: Number,
    required: true,
  },
  bankAccount: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
});

export default mongoose.model("SalaryPayment", SalaryPaymentSchema);
