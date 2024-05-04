import Attendence from "../model/attendence.model";
import logger from "../../utils/logger";

export const createAttendence = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  const attendence = new Attendence({
    randomNo: randomNumber,
  });

  try {
    const savedAttendence = await attendence.save();
    const { _id } = savedAttendence;

    res.status(200).json({ savedAttendence, _id });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getHelloMessage = (req, res) => {
  res.json({ message: "attendence" });
};


