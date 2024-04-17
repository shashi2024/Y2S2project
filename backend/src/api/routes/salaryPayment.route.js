import express from "express";
import { createSalaryPayment } from "../controllers/salaryPayment.controller";

const salaryPaymentrouter = express.Router();

// Route for creating a new salary payment
salaryPaymentrouter.post("/", createSalaryPayment);

export default salaryPaymentrouter;
