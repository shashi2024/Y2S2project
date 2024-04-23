import mongoose from "mongoose";
import config from "../config";
import logger from "./logger";

let database;

const connect = async () => {
  const MONGODB_URL = config.DB_CONNECTION_STRING;

  if (database) return;

  await mongoose
    .connect(MONGODB_URL)
    .then(connection => {
      database = connection;
      logger.info("Database connection established");
    })
    .catch(error => {
      logger.error(`Error connecting to the database: ${error.message}`);
    });
};

export default connect;
