import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import "dotenv/config";
import logger from "./utils/logger";
import connect from "./utils/database.connection";
import GenerateReportsRouter from "./api/routes/GenarateReports.route";
import GovernmentPaymentRouter from "./api/routes/GovernmentPayment.route";
import RefundPaymentRouter from "./api/routes/RefundPayment.route";
// import bcrypt from 'bcrypt';
// import User from './models/User';


import testRouter from "./api/routes/test.route";
import userRouter from "./api/routes/user.route";
import userReportRouter from "./api/routes/userReport.route";
import userRollRouter from "./api/routes/userRoll.route";
import staffReportRouter from "./api/routes/staffReport.route";
import staffRouter from "./api/routes/staff.route";
import departmentRouter from "./api/routes/department.route";
import attendenceRouter from "./api/routes/attendence.route";

// load env variables
dotenv.config();

// Create Express app
const app = express();

// Start the server
// const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use(express.json({ limit: "20mb" }));

// middleware
app.use("/GenerateReports", GenerateReportsRouter);
app.use("/GovernmentPayment", GovernmentPaymentRouter);
app.use("/RefundPayment", RefundPaymentRouter);
app.use("/test", testRouter);
app.use("/user", userRouter);
app.use("/userreport", userReportRouter);
app.use("/userroll", userRollRouter);
app.use("/staffreport", staffReportRouter);
app.use("/staff", staffRouter);
app.use("/department", departmentRouter);
app.use("/attendence", attendenceRouter);

// app.post('/user', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     res.json({ authenticated: true });
//   } catch (error) {
//     console.error('An error occurred:', error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// });

app.listen(PORT, () => {
  logger.info(` Server is up and running on port ${PORT}`);
  connect();
});
