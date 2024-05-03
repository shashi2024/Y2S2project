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

//export
module.exports = guestsrouter;

