import mongoose from 'mongoose';

const rawMaterialRequestSchema = new mongoose.Schema({
    itemName: String,
    quantity: Number,
    expectedDeliveryDate: Date,
    status: String
  });

const RawMaterialRequest = mongoose.model("RawMaterialRequest", rawMaterialRequestSchema);
export default RawMaterialRequest;