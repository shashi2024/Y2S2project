/* eslint-disable import/named */
import { Router } from "express";
import { createFinancialReport } from "../controllers/genarateReports.controller";

const genarateReportsRouter = Router();

// Define routes
genarateReportsRouter.get("/", createFinancialReport);

export default genarateReportsRouter;
