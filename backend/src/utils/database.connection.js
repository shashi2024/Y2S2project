import mongoose from "mongoose";
import config from "../config";
import logger from "./logger.js";

let database;

export const connect = () => {
  const MONGODB_URL = config.DB_CONNECTION_STRING;

  if (database) return;

  mongoose
    .connect(MONGODB_URL)
    .then((connection) => {
      database = connection;
      logger.info("Database connection established");
    })
    .catch((error) => {
      logger.error(`Error connecting to the database: ${error.message}`);
    });
};
