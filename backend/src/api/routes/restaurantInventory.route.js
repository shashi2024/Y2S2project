import { Router } from "express";
import { getInventories, getInventory, putInventory, } from "../controllers/restaurantInventory.controller";

const restaurantInventoryRouter = Router();

restaurantInventoryRouter.get("/", getInventories);
restaurantInventoryRouter.get("/:id", getInventory);
restaurantInventoryRouter.put("/:id", putInventory);

export default restaurantInventoryRouter;