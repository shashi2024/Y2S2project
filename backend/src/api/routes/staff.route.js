import { Router } from "express";
import { getHelloMessage, addStaff, getById, updateStaff, deleteStaff } from "../controllers/staff.controller";

const staffRouter = Router();

staffRouter.get("/", getHelloMessage);
staffRouter.post("/", addStaff);
staffRouter.get("/:id", getById);
staffRouter.put("/:id", updateStaff);
staffRouter.delete("/:id", deleteStaff);

export default staffRouter;
