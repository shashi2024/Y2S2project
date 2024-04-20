import { Router } from "express";
import {
  createTask,
  getTasks,
} from "../controllers/maintenanceTask.controller";

const maintenanceTaskRouter = Router();

maintenanceTaskRouter.post("/", createTask);
maintenanceTaskRouter.get("/", getTasks);

export default maintenanceTaskRouter;
