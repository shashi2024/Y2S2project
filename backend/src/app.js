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
const mongoose = require('mongoose');

//call register model
require("./api/model/registerUser.model.js")
const User = mongoose.model("Register");

const bcrypt = require('bcrypt');
const saltRounds = 10;

//register user
app.post("/register", async (req, res) => {
  const { userID, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await User.create({ userID, email, password: hashedPassword });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error", error: error.message });
  }
});

//user loging
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.send({ status: "User not existed" });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            // Passwords match
            res.send({ status: "ok" });
          } else {
            // Passwords don't match
            res.send({ status: "Login Failed" });
          }
        })
        .catch(err => res.send({ status: err }));
    })
    .catch(err => res.send({ status: err }));
});

//reset password
app.post('/forgot-password', (req, res) => {
  const { email, newPassword, confirmPassword } = req.body;

  if (newPassword !== confirmPassword) {
    return res.status(400).send({ Status: "Passwords do not match" });
  }

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.send({ Status: "User not existed" });
      }

      bcrypt.hash(newPassword, 10)
        .then(hash => {
          user.password = hash;
          user.save();
          res.send({ Status: "Success" });
        })
        .catch(err => res.send({ Status: err }));
    })
    .catch(err => res.send({ Status: err }));
});

app.listen(PORT, () => {
  logger.info(`Server is up and running on port ${PORT}`);
  connect();
});
