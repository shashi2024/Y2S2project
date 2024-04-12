import "dotenv/config";
import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import connect from "./utils/database.connection";
import testRouter from "./api/routes/test.route";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.use("/test", testRouter);

app.listen(PORT, () => {
  logger.info(`Server is up and running on port ${PORT}`);
  connect();
});
