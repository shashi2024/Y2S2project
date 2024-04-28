import mongoose from "mongoose";

const maintenanceTaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  // taskType: {
  //   type: String,
  //   enum: ["Routine", "Housekeeping", "Emergency"],
  //   required: true,
  // },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ["Open", "Assigned", "In Progress", "Escalated", "Completed"],
    default: "Open",
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  assignedAt: { type: Date },
  startTime: { type: Date },
  endTime: { type: Date },
  duration: { type: Number },
});

maintenanceTaskSchema.pre("save", function calcDuration(next) {
  if (this.endTime && this.startTime) {
    this.duration =
      (this.endTime.getTime() - this.startTime.getTime()) / 1000 / 60 / 60;
  }
  next();
});

export const MaintenanceTask = mongoose.model(
  "MaintenanceTask",
  maintenanceTaskSchema
);

const routineMaintenanceTaskSchema = new mongoose.Schema({
  assetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Asset",
    required: true,
  },
});

const housekeepingTaskSchema = new mongoose.Schema({
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rooms",
    required: true,
  },
});

const emergencyMaintenanceTaskSchema = new mongoose.Schema({
  urgencyLevel: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true,
  },
});

export const RoutineMaintenanceTask = MaintenanceTask.discriminator(
  "RoutineMaintenanceTask",
  routineMaintenanceTaskSchema
);

export const HousekeepingTask = MaintenanceTask.discriminator(
  "HousekeepingTask",
  housekeepingTaskSchema
);

export const EmergencyMaintenanceTask = MaintenanceTask.discriminator(
  "EmergencyMaintenanceTask",
  emergencyMaintenanceTaskSchema
);
