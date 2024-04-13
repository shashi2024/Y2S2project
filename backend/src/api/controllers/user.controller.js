import User from "../model/user.model";
import logger from "../../utils/logger";

export const createUser = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  const user = new User({
    randomNo: randomNumber,
  });

  try {
    const savedUser = await user.save();
    const { _id } = savedUser;

    res.status(200).json({ savedUser, _id });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getHelloMessage = (req, res) => {
  res.json({ message: "user" });
};