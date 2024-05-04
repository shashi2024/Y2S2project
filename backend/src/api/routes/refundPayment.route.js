import express from "express";
import RefundRequest from "../model/RefundPayment.model";
import {
  getRefundRequests,
  insertRefundRequest,
  getRefundRequestById,
  updateRefundRequestById,
  deleteRefundRequestById,
} from "../controllers/refundPayment.controller";

const router = express.Router();

router.get("/", getRefundRequests);
router.post("/", insertRefundRequest);
router.get("/:id", getRefundRequestById);
router.put("/:id", updateRefundRequestById);
router.delete("/:id", deleteRefundRequestById);

export default router;
