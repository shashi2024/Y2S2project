import { Router } from "express";
import { getHelloMessage, createDepartment } from "../controllers/department.controller";

const departmentRouter = Router();

departmentRouter.get("/", getHelloMessage);
departmentRouter.post("/", createDepartment);

export default departmentRouter;
