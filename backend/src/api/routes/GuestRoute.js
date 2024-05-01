import { Router } from "express";
import {
  getAllGuests,
  addGuests,
  getById,
  updateGuests,
  deleteGuests,
} from "../controllers/GuestController";

const guestRouter = Router();

guestRouter.get("/", getAllGuests);
guestRouter.post("/", addGuests);
guestRouter.get("/:id", getById);
guestRouter.put("/:id", updateGuests);
guestRouter.delete("/:id", deleteGuests);

export default guestRouter;
