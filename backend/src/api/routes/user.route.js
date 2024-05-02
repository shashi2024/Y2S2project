import { Router } from "express";
import { getHelloMessage, addUser, getById, updateUser, deleteUser, getAllUsers } from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/", getHelloMessage);
userRouter.post("/", addUser);
userRouter.get("/:id", getById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);



export default userRouter; 
