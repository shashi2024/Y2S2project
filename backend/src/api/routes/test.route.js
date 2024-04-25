import { Router } from "express";
import { createTest, getTests, getTest } from "../controllers/test.controller";

const testRouter = Router();

// testRouter.get("/", getHelloMessage);
testRouter.post("/", createTest);
testRouter.get("/", getTests);
testRouter.get("/:id", getTest);

export default testRouter;
