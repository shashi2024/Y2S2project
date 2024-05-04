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
import reportRouter from "./api/routes/report.route";
import GenerateReportsRouter from "./api/routes/genarateReports.route";
import GovernmentPayentRouter from "./api/routes/GovernmentPayment.route";
import RefufndRequestRouter from "./api/routes/refundPayment.route";
import SalaryPaymentRouter from "./api/routes/salaryPayment.route";
import SupplierPaymentRouter from "./api/routes/supplierPayment.route";
import UtilityPaymentRouter from "./api/routes/utilityPayment.route";

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

// Finance Management Middleware

app.use("/generate-reports", GenerateReportsRouter);
app.use("/government-payments", GovernmentPayentRouter);
app.use("/refund-payments", RefufndRequestRouter);
app.use("/salary-payments", SalaryPaymentRouter);
app.use("/supplier-payments", SupplierPaymentRouter);
app.use("/utility-payments", UtilityPaymentRouter);

/* Maintenance */
app.use("/task", maintenanceTaskRouter);

app.use("/customer", customerRouter);
app.use("/user", userRouter);

/* Reports */
app.use("/report", reportRouter);

app.listen(PORT, () => {
  logger.info(`Server is up and running on port ${PORT}`);
  connect();
});
