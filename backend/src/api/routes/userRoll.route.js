import { Router } from "express";
import { getHelloMessage, addUserRoll, getById, updateUserRoll, deleteUserRoll } from "../controllers/userRoll.controller";

const userRollRouter = Router();

userRollRouter.get("/", getHelloMessage);
userRollRouter.post("/", addUserRoll);
userRollRouter.get("/:id", getById);
userRollRouter.put("/:id", updateUserRoll);
userRollRouter.delete("/:id", deleteUserRoll);

export default userRollRouter;