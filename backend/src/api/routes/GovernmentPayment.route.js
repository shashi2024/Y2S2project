import express from "express";
import GovernmentPayment from "../model/GovernmentPayment.model";
import {
  getGovernmentPayments,
  insertGovernmentPayment,
  getGovernmentPaymentById,
  updateGovernmentPaymentById,
  deleteGovernmentPaymentById,
} from "../controllers/GovernmentPayment.controller";

const router = express.Router();

router.get("/", getGovernmentPayments);
router.post("/", insertGovernmentPayment);
router.get("/:id", getGovernmentPaymentById);
router.put("/:id", updateGovernmentPaymentById);
router.delete("/:id", deleteGovernmentPaymentById);

// Export the router
export default router;
