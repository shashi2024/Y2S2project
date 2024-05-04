import { Router } from "express";
import { getHelloMessage, createUserReport } from "../controllers/userReport.controller";

const userReportRouter = Router();

userReportRouter.get("/", getHelloMessage);
userReportRouter.post("/", createUserReport);

export default userReportRouter;