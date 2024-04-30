import { Router } from "express";
import {
  createTask,
  getTasks,
  putTask,
  deleteTask
} from "../controllers/maintenanceTask.controller";

const maintenanceTaskRouter = Router();

maintenanceTaskRouter.post("/", createTask);
maintenanceTaskRouter.get("/", getTasks);
maintenanceTaskRouter.put("/:id", putTask);
maintenanceTaskRouter.delete("/:id", deleteTask);

export default maintenanceTaskRouter;
