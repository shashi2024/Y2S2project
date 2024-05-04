const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const uuid = require('uuid').v4
const dotenv = require("dotenv")
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;


app.use(cors());

app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
   
    useNewUrlParser: true
    
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongodb connection success!");
})

const requestRouter = require("./routes/requests.js");
const supplierRouter = require("./routes/suppliers.js");
const orderRouter = require("./routes/orders.js");


app.use("/request",requestRouter);
app.use("/supplier",supplierRouter);
app.use("/order",orderRouter);



app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
})

