const express = require("express");
const guestsrouter = express.Router();
//insert Model
const Guest = require("../model/GuestModel");
//insert controller
const GuestController = require("../controllers/GuestController");

guestsrouter.get("/", GuestController.getAllGuests);
guestsrouter.post("/", GuestController.addGuests);
guestsrouter.get("/:id", GuestController.getById);
guestsrouter.put("/:id", GuestController.updateGuests);
guestsrouter.delete("/:id", GuestController.deleteGuests);
guestsrouter.post("/generate-pdf", GuestController.generatePDF);

guestsrouter.post("/login", GuestController.login);

guestsrouter.get("/:passportid/reservations", GuestController.getReservations);

//export
module.exports = guestsrouter;

