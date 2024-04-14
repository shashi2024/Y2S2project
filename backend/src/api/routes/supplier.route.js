import { Router } from "express";
import { getHelloMessage, createTest } from "../controllers/supplier.controller";

const supplierRouter = Router();

supplierRouter.get("/", getHelloMessage);
supplierRouter.post("/", createTest);

export default supplierRouter;
