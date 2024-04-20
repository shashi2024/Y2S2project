import {
  RoutineMaintenanceTask,
  HousekeepingTask,
  EmergencyMaintenanceTask,
  MaintenanceTask,
} from "../model/maintenanceTask.model";
import logger from "../../utils/logger";

// eslint-disable-next-line consistent-return
export const createTask = async (req, res) => {
  const { taskType, ...taskDetails } = req.body;

  let TaskModel;
  switch (taskType) {
    case "Routine":
      TaskModel = RoutineMaintenanceTask;
      break;
    case "Housekeeping":
      TaskModel = HousekeepingTask;
      break;
    case "Emergency":
      TaskModel = EmergencyMaintenanceTask;
      break;
    default:
      return res.status(400).send({ error: "Invalid task type" });
  }

  try {
    const task = new TaskModel(taskDetails);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    logger.error(error.message);
    res.status(500).send({ error: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await MaintenanceTask.find().populate("userId");
    logger.info(`Fetched ${tasks.length} tasks`);
    res.json(tasks);
  } catch (err) {
    logger.error(`Failed to fetch tasks: ${err.message}`);
    res.status(500).json({ message: err.message });
  }
};
