import { Router } from "express";
import { getHelloMessage, createAttendence } from "../controllers/attendence.controller";

const attendenceRouter = Router();

attendenceRouter.get("/", getHelloMessage);
attendenceRouter.post("/", createAttendence);

export default attendenceRouter;
