import { Router } from "express";
import { getHelloMessage, addDepartment, getById, updateDepartment, deleteDepartment } from "../controllers/department.controller";

const departmentRouter = Router();

departmentRouter.get("/", getHelloMessage);
departmentRouter.post("/", addDepartment);
departmentRouter.get("/:id", getById);
departmentRouter.put("/:id", updateDepartment);
departmentRouter.delete("/:id", deleteDepartment);


export default departmentRouter;
