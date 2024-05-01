import { Router } from "express";
import {
  getAllReservations,
  addReservations,
  getById,
  updateReservations,
  deleteReservations,
} from "../controllers/ReservationController";

const reservationsrouter = Router();

reservationsrouter.get("/", getAllReservations);
reservationsrouter.post("/", addReservations);
reservationsrouter.get("/:id", getById);
reservationsrouter.put("/:id", updateReservations);
reservationsrouter.delete("/:id", deleteReservations);

export default reservationsrouter;
