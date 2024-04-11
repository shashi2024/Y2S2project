import "dotenv/config";
import express from "express";
import cors from "cors";
import logger from "./utils/logger.js";
import { connect } from "./utils/database.connection.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res, next) => {
  res.send("API is running");
  next();
});

// test comment

app.listen(PORT, () => {
  logger.info(`Server is up and running on port ${PORT}`);
  connect();
});
