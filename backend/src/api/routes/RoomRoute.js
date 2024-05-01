const express = require("express");
const roomsrouter = express.Router();
//insert Model
const Room = require("../model/RoomModel");
//insert controller
const RoomController = require("../controllers/RoomController");

roomsrouter.get("/", RoomController.getAllRooms);
roomsrouter.post("/", RoomController.addRooms);
roomsrouter.get("/:id", RoomController.getById);
roomsrouter.put("/:id", RoomController.updateRooms);
roomsrouter.delete("/:id", RoomController.deleteRooms);

//export
module.exports = roomsrouter;
