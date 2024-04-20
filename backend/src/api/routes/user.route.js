import { Router } from "express";
import { createUser, getUsers, getUser } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);

export default userRouter;
