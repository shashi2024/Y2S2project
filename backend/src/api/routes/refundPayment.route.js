import express from "express";
import {
  createRefundPayment,
  displayAllRefundPayments,
} from "../controllers/refundPayment.controller";

const refundPaymentrouter = express.Router();

// Route to create a new refund payment
refundPaymentrouter.post("/", createRefundPayment);

// Route to display all refund payments
refundPaymentrouter.get("/", displayAllRefundPayments);

export default refundPaymentrouter;
