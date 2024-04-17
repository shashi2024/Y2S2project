import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import logger from "./utils/logger";
import connect from "./utils/database.connection";
import supplierRouter from "./api/routes/supplierPayment.route";
import genarateReportsRouter from "./api/routes/genarateReports.route";
import governmentPaymentRouter from "./api/routes/govPayment.route";
import refundPaymentrouter from "./api/routes/refundPayment.route";
import salaryPaymentrouter from "./api/routes/salaryPayment.route";

// Create Express app
const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

app.use(cors());
app.use(express.json({ limit: "20mb" })); 

app.use("/SupplierPayments", supplierRouter);
app.use("/GenarateReports", genarateReportsRouter);
app.use("/GovPayments", governmentPaymentRouter);
app.use("/RefundPayments", refundPaymentrouter);
app.use("/SalaryPayments", salaryPaymentrouter);

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server is up and running on port ${PORT}`);
  connect();
});
