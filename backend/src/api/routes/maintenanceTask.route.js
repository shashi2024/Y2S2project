import { Router } from "express";
import {
  createTask,
  getTasks,
  putTask
} from "../controllers/maintenanceTask.controller";

const maintenanceTaskRouter = Router();

maintenanceTaskRouter.post("/", createTask);
maintenanceTaskRouter.get("/", getTasks);
maintenanceTaskRouter.put("/:id", putTask);

export default maintenanceTaskRouter;
