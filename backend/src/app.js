import "dotenv/config";
import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import connect from "./utils/database.connection";
import testRouter from "./api/routes/test.route";
import userRouter from "./api/routes/user.route";
import userReportRouter from "./api/routes/userReport.route";
import userRollRouter from "./api/routes/userRoll.route";
import staffReportRouter from "./api/routes/staffReport.route";
import staffRouter from "./api/routes/staff.route";
import departmentRouter from "./api/routes/department.route";
import attendenceRouter from "./api/routes/attendence.route";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.use(express.json());
app.use("/test", testRouter);
app.use("/user", userRouter);
app.use("/userreport", userReportRouter);
app.use("/userroll", userRollRouter);
app.use("/staffreport", staffReportRouter);
app.use("/staff", staffRouter);
app.use("/department", departmentRouter);
app.use("/attendence", attendenceRouter);

app.listen(PORT, () => {
  logger.info(`Server is up and running on port ${PORT}`);
  connect();
});
