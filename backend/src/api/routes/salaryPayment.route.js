import express from "express";
import SalaryPayment from "../model/salaryPayment.Model";
import {
  getSalaryPayments,
  insertSalaryPayment,
  getSalaryPaymentById,
  updateSalaryPaymentById,
  deleteSalaryPaymentById,
} from "../controllers/salaryPayment.controller";

const router = express.Router();

router.get("/", getSalaryPayments);
router.post("/", insertSalaryPayment);
router.get("/:id", getSalaryPaymentById);
router.put("/:id", updateSalaryPaymentById);
router.delete("/:id", deleteSalaryPaymentById);

export default router;
