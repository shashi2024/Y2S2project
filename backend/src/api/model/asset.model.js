import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
  assetCode: {
    type: String,
    required: true,
  },
  assetName: {
    type: String,
    required: true,
  },
  lastServiceDate: {
    type: Date,
    required: true,
  },
  nextServiceDate: {
    type: Date,
    required: true,
  },
  serviceDuration: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  location: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  assetType: {
    type: String,
    enum: ["TypeA", "TypeB", "TypeC"],
    required: true,
  },
  serviceRequired: {
    type: Boolean,
    default: false,
  },
});

const Asset = mongoose.model("Asset", assetSchema);

export default Asset;
