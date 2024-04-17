/* eslint-disable import/no-unresolved */
import { Router } from "express";
import {
  createGovernmentPayment,
  displayAllGovernmentPayments,
} from "../controllers/govPayment.controller";

const governmentPaymentRouter = Router();

// Route to create a new government payment
governmentPaymentRouter.post("/", createGovernmentPayment);

// Route to display all government payments
governmentPaymentRouter.get("/", displayAllGovernmentPayments);

export default governmentPaymentRouter;
