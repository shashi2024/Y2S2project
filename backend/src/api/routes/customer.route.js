import { Router } from "express";
import { createCustomer } from "../controllers/customer.controller";

const customerRouter = Router();

customerRouter.post("/", createCustomer);

export default customerRouter;
