import UserReport from "../model/userReport.model";
import logger from "../../utils/logger";

export const createUserReport = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  const userReport = new UserReport({
    randomNo: randomNumber,
  });

  try {
    const savedUserReport = await userReport.save();
    const { _id } = savedUserReport;

    res.status(200).json({ savedUserReport, _id });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getHelloMessage = (req, res) => {
  res.json({ message: "userReport" });
};


