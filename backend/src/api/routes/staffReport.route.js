import { Router } from "express";
import { getHelloMessage, createStaffReport } from "../controllers/staffReport.controller";

const staffReportRouter = Router();

staffReportRouter.get("/", getHelloMessage);
staffReportRouter.post("/", createStaffReport);

export default staffReportRouter;
