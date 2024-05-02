import "dotenv/config";
import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import connect from "./utils/database.connection";
import testRouter from "./api/routes/test.route";
import foodItemRouter from "./api/routes/foodItem.route";
import menuRouter from "./api/routes/menu.route";
import orderRouter from "./api/routes/order.route";
import restaurantInventoryRouter from "./api/routes/restaurantInventory.route";
import maintenanceTaskRouter from "./api/routes/maintenanceTask.route";
import customerRouter from "./api/routes/customer.route";
import userRouter from "./api/routes/user.route";
import staffRouter from "./api/routes/staff.route";
import reportRouter from "./api/routes/report.route";
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res) => {
  res.send(`Welcome to the backend!`);
});

app.post("/", (req, res) => {
  res.send(`post request to the homepage`);
});

app.use("/test", testRouter);
app.use("/food-item", foodItemRouter);
app.use("/menu", menuRouter);
app.use("/order", orderRouter);
app.use("/restaurant-inventory", restaurantInventoryRouter);
app.use("/user", userRouter);
app.use("/staff", staffRouter);

/* Maintenance */
app.use("/task", maintenanceTaskRouter);

app.use("/customer", customerRouter);
app.use("/user", userRouter);


/* Reports */
app.use("/report", reportRouter);

//shashi
// Set up nodemailer
const mongoose = require('mongoose');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sashinisithara20@gmail.com',
    pass: 'Sashi2000@123'
  }
});

//call register model
// require("./api/model/registerUser.model.js")
// const User = mongoose.model("Register");
const Register = require("./api/model/registerUser.model.js");

// app.post("/register", async (req, res) => {
//   const { userID, email, password } = req.body;
//   try{
//     await User.create({ userID, email, password })
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.send({ status: "error", error: error.message });
//   }
// });

app.post("/register", async (req, res) => {
  const { userID, email, password } = req.body;
  try{
    await Register.create({ userID, email, password })
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user.password === password) {
      // Generate OTP
      const otp = crypto.randomBytes(3).toString('hex');
      user.otp = otp;
      await user.save();

      // Send OTP
      let mailOptions = {
        from: 'sashinisithara20@gmail.com',
        to: user.email,
        subject: 'Your OTP',
        text: `Your OTP is ${otp}`
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.send({ status: "ok", message: "OTP sent to email" });
    } else {
      res.send({ status: "error", error: "Invalid email/password" });
    }
  } catch (error) { 
    res.send({ status: "error", error: error.message });
  }
});

app.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user.otp === otp) {
      res.send({ status: "ok", message: "OTP verified" });
    } else {
      res.send({ status: "error", error: "Invalid OTP" });
    }
  } catch (error) { 
    res.send({ status: "error", error: error.message });
  }
});

//change password
// app.post("/change-password", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).send({ status: "error", error: "User not found" });
//     }
//     user.password = password;
//     await user.save();
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.status(500).send({ status: "error", error: error.message });
//   }
// });

app.post("/change-password", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Register.findOne({ email });
    if (!user) {
      return res.status(404).send({ status: "error", error: "User not found" });
    }
    user.password = password;
    await user.save();
    res.send({ status: "ok" });
  } catch (error) {
    res.status(500).send({ status: "error", error: error.message });
  }
});

app.listen(PORT, () => {
  logger.info(`Server is up and running on port ${PORT}`);
  connect();
});
