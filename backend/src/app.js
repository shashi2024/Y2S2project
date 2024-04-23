import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import "dotenv/config";
import logger from "./utils/logger";
import connect from "./utils/database.connection";
import GenerateReportsRouter from "./api/routes/GenarateReports.route";
import GovernmentPaymentRouter from "./api/routes/GovernmentPayment.route";
import RefundPaymentRouter from "./api/routes/RefundPayment.route";

// load env variables
dotenv.config();

// Create Express app
const app = express();

// Start the server
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json({ limit: "20mb" }));

// middleware
app.use("/GenerateReports", GenerateReportsRouter);
app.use("/GovernmentPayment", GovernmentPaymentRouter);
app.use("/RefundPayment", RefundPaymentRouter);

app.listen(PORT, () => {
  logger.info(` Server is up and running on port ${PORT}`);
  connect();
});
