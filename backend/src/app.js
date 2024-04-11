import "dotenv/config";
import express from "express";
import cors from "cors";
import logger from "./utils/logger.js";
import { connect } from "./utils/database.connection.js";
import testRouter from "./api/routes/test.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/user", (req, res) => {
  res.send("Hello User");
});

app.post("/user", (req, res) => {
  res.send("User created successfully");
});

app.patch("/user", (req, res) => {
  res.send("User updated successfully");
});

app.delete("/user", (req, res) => {
  res.send("User deleted successfully");
});

app.use("/test", testRouter);

app.listen(PORT, () => {
  logger.info(`Server is up and running on port ${PORT}`);
  connect();
});
