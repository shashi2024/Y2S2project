import express from "express";
import {
  getReports,
  getReportById,
  insertReport,
  updateReportById,
  deleteReportById,
} from "../controllers/GenerateReports.controller";

const router = express.Router();

router.get("/", getReports);
router.post("/", insertReport);
router.get("/:id", getReportById);
router.put("/:id", updateReportById);
router.delete("/:id", deleteReportById);

export default router;
