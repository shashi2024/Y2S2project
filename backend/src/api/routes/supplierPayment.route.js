import express from "express";
import SupplierPayment from "../model/supplierPayment.Model";
import {
  getSupplierPayments,
  insertSupplierPayment,
  getSupplierPaymentById,
  updateSupplierPaymentById,
  deleteSupplierPaymentById,
} from "../controllers/SupplierPayment.controller";

const router = express.Router();

router.get("/", getSupplierPayments);
router.post("/", insertSupplierPayment);
router.get("/:id", getSupplierPaymentById);
router.put("/:id", updateSupplierPaymentById);
router.delete("/:id", deleteSupplierPaymentById);

export default router;
