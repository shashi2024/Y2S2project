import { Router } from "express";
import { getHelloMessage, createUserRoll } from "../controllers/userRoll.controller";

const userRollRouter = Router();

userRollRouter.get("/", getHelloMessage);
userRollRouter.post("/", createUserRoll);

export default userRollRouter;