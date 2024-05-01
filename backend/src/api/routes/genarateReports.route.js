import express from "express";
import GenerateReports from "../model/GenerateReports.model";
import {
  getReports,
  insertReport,
  getReportById,
  updateReportById,
  deleteReportById,
} from "../controllers/GenerateReports.controller";

const router = express.Router();

router.get("/", getReports);
router.post("/", insertReport);
router.get("/:id", getReportById);
router.put("/:id", updateReportById);
router.delete("/:id", deleteReportById);

// Export the router
export default router;
