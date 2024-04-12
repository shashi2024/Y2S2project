import Test from "../model/test.model";
import logger from "../../utils/logger";

export const createTest = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  const test = new Test({
    randomNo: randomNumber,
  });

  try {
    await test.save();

    res.status(200).json(test);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getHelloMessage = (req, res) => {
  res.json({ message: "hello" });
};
