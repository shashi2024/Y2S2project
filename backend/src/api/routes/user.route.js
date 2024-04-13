import { Router } from "express";
import { getHelloMessage, createUser } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", getHelloMessage);
userRouter.post("/", createUser);

export default userRouter;
