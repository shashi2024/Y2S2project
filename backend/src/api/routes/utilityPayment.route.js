import express from "express";
import { createUtilityPayment } from "../controllers/utilityPayment.controller";

const utilityPaymentrouter = express.Router();

// Route for creating a new utility payment
utilityPaymentrouter.post("/", createUtilityPayment);

export default utilityPaymentrouter;
