/* eslint-disable import/named */
import { Router } from "express";
import {
  createSupplierPayment,
  displaySupplierPaymentById,
  displayAllSupplierPayments,
} from "../controllers/SupplierPayment.controller";

const supplierPaymentRouter = Router();

// Define routes
supplierPaymentRouter.post("/", createSupplierPayment);
supplierPaymentRouter.get("/", displayAllSupplierPayments);
supplierPaymentRouter.get("/:id", displaySupplierPaymentById);

export default supplierPaymentRouter;
