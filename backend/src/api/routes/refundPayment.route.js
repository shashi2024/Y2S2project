import express from "express";
import {
  getRefundPayments,
  getRefundPaymentById,
  updateRefundPaymentById,
  deleteRefundPaymentById,
  insertRefundPayment,
} from "../controllers/RefundPayment.controller";

const router = express.Router();

router.get("/", getRefundPayments);
router.post("/", insertRefundPayment);
router.get("/:id", getRefundPaymentById);
router.put("/:id", updateRefundPaymentById);
router.delete("/:id", deleteRefundPaymentById);

export default router;
