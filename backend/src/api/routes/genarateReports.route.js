import { Router } from "express";
import {
  SalaryReports,
  SupplierReports,
  RefundReports,
  UtilityReports,
  GovtReports,
} from "../controllers/GenerateReports.controller";

const reportRouter = Router();

reportRouter.get("/salaries", SalaryReports);
reportRouter.get("/suppliers", SupplierReports);
reportRouter.get("/refunds", RefundReports);
reportRouter.get("/utilities", UtilityReports);
reportRouter.get("/govt", GovtReports);

export default reportRouter;
