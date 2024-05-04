import express from "express";
import {
  createSalaryPayment,
  getSalaryPayments,
} from "../controllers/salaryPayment.controller";
import SalaryPayment from "../models/salaryPayment.model";

const salaryPaymentrouter = express.Router();

// Route for creating a new salary payment
salaryPaymentrouter.post("/", createSalaryPayment);
salaryPaymentrouter.get("/", getSalaryPayments);

export default salaryPaymentrouter;
