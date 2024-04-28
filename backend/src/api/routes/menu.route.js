import { Router } from "express";
import {createMenu, getMenus, putMenu, getMenu, deleteMenu} from "../controllers/menu.controller"

const menuRouter = Router();

menuRouter.post("/", createMenu);
menuRouter.get("/", getMenus);
menuRouter.put("/:id", putMenu);
menuRouter.get("/:id", getMenu);
menuRouter.delete("/:id", deleteMenu);

export default menuRouter;