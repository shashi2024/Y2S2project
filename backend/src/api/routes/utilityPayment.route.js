import express from "express";
import {
  getUtilityPayments,
  insertUtilityPayment,
  getUtilityPaymentById,
  updateUtilityPaymentById,
  deleteUtilityPaymentById,
} from "../controllers/utilityPayment.controller";

const router = express.Router();

router.get("/", getUtilityPayments);
router.post("/", insertUtilityPayment);
router.get("/:id", getUtilityPaymentById);
router.put("/:id", updateUtilityPaymentById);
router.delete("/:id", deleteUtilityPaymentById);

export default router;
