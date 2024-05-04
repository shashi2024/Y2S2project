import express from "express";
import {
  getGovernmentPaymentById,
  getGovernmentPayments,
  deleteGovernmentPaymentById,
  updateGovernmentPaymentById,
  insertGovernmentPayment,
} from "../controllers/GovernmentPayment.controller";

const router = express.Router();

router.get("/", getGovernmentPayments);
router.post("/", insertGovernmentPayment);
router.get("/:id", getGovernmentPaymentById);
router.put("/:id", updateGovernmentPaymentById);
router.delete("/:id", deleteGovernmentPaymentById);

export default router;
