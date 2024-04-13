import UserRoll from "../model/userRoll.model";
import logger from "../../utils/logger";

export const createUserRoll = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  const userRoll = new UserRoll({
    randomNo: randomNumber,
  });

  try {
    const savedUserRoll = await userRoll.save();
    const { _id } = savedUserRoll;

    res.status(200).json({ savedUserRoll, _id });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getHelloMessage = (req, res) => {
  res.json({ message: "userRoll" });
};


