

const express = require('express');
const reservationsrouter = express.Router();
//insert Model
const Reservation = require("../model/ReservationModel");
//insert controller
const ReservationController = require("../controllers/ReservationController");

reservationsrouter.get("/",ReservationController.getAllReservations);
reservationsrouter.post("/",ReservationController.addReservations);
reservationsrouter.get("/:id",ReservationController.getById);
reservationsrouter.put("/:id",ReservationController.updateReservations);
reservationsrouter.delete("/:id",ReservationController.deleteReservations);

//export
module.exports = reservationsrouter;
