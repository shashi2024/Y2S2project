import {
  RoutineMaintenanceTask,
  HousekeepingTask,
  EmergencyMaintenanceTask,
} from "../model/maintenanceTask.model";
import logger from "../../utils/logger";

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

export const getTasks = (req, res) => {
  logger.info("get tasks");
};
