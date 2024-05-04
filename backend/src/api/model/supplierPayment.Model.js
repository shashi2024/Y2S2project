import mongoose from "mongoose";

const SupplierPaymentSchema = new mongoose.Schema({
  PaymentId: {
    type: String,
    required: true,
    unique: true,
  },
  supplierId: {
    type: String,
    required: true,
  },
  supplierName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
  paymentAmount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quality: {
    type: String,
    required: true,
  },
});

export default mongoose.model("SupplierPayment", SupplierPaymentSchema);
