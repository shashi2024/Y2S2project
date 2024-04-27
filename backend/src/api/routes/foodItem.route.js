import { Router } from "express";
import {createFoodItem, getFoodItems, putFoodItem, getFoodItem, deleteFoodItem} from "../controllers/foodItem.controller"

const foodItemRouter = Router();

foodItemRouter.post("/", createFoodItem);
foodItemRouter.get("/", getFoodItems);
foodItemRouter.put("/:id", putFoodItem);
foodItemRouter.get("/:id", getFoodItem);
foodItemRouter.delete("/:id", deleteFoodItem);

export default foodItemRouter;

