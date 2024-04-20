import { Router } from "express";
import {createFoodItem, getFoodItems, putFoodItem, getFoodItem,} from "../controllers/foodItem.controller"

const foodItemRouter = Router();

foodItemRouter.post("/", createFoodItem);
foodItemRouter.get("/", getFoodItems);
foodItemRouter.put("/:uniqueId", putFoodItem);
foodItemRouter.get("/:uniqueId", getFoodItem);

export default foodItemRouter;

