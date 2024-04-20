import { Router } from "express";
import { createOrder, getOrders, putOrder, getOrder, deleteOrder, } from "../controllers/order.controller";

const orderRouter = Router();

orderRouter.post("/", createOrder);
orderRouter.get("/", getOrders);
orderRouter.put("/:id", putOrder);
orderRouter.get("/:id", getOrder);
orderRouter.delete("/:id", deleteOrder);

export default orderRouter;