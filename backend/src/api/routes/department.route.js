import { Router } from "express";
import { getHelloMessage, addDepartment, getById, updateDepartment, deleteDepartment, getAllDepartments } from "../controllers/department.controller";

const departmentRouter = Router();

departmentRouter.get("/", getAllDepartments);
departmentRouter.get("/", getHelloMessage);
departmentRouter.post("/", addDepartment);
departmentRouter.get("/:id", getById);
departmentRouter.put("/:id", updateDepartment);
departmentRouter.delete("/:id", deleteDepartment);


export default departmentRouter;
