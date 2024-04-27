import { Router } from "express";
import {createFoodItem, getFoodItems, putFoodItem, getFoodItem,} from "../controllers/foodItem.controller"

const foodItemRouter = Router();

foodItemRouter.post("/", createFoodItem);
foodItemRouter.get("/", getFoodItems);
foodItemRouter.put("/:id", putFoodItem);
foodItemRouter.get("/:id", getFoodItem);

export default foodItemRouter;

