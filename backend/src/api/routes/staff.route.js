import { Router } from "express";
import { getHelloMessage, addStaff, getById, updateStaff, deleteStaff, getAllStaff } from "../controllers/staff.controller";

const staffRouter = Router();

staffRouter.get("/", getAllStaff);
staffRouter.get("/", getHelloMessage);
staffRouter.post("/", addStaff);
staffRouter.get("/:id", getById);
staffRouter.put("/:id", updateStaff);
staffRouter.delete("/:id", deleteStaff);

export default staffRouter;
