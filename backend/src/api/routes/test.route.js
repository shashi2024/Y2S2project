import { Router } from "express";
import { getHelloMessage, createTest } from "../controllers/test.controller.js";

const testRouter = Router();

testRouter.get("/", getHelloMessage);
testRouter.post("/", createTest);

export default testRouter;
