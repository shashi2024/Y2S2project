import mongoose from "mongoose";

const supplierPaymentSchema = new mongoose.Schema({
  paymentId: {
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
  supplierEmail: {
    type: String,
    required: true,
  },
  supplierPhone: {
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
  paymentDescription: {
    type: String,
    required: true,
  },
});

export default mongoose.model("SupplierPayment", supplierPaymentSchema);
