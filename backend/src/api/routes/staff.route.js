import { Router } from "express";
import { getHelloMessage, createStaff } from "../controllers/staff.controller";

const staffRouter = Router();

staffRouter.get("/", getHelloMessage);
staffRouter.post("/", createStaff);

export default staffRouter;
