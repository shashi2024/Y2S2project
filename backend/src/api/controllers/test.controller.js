import Test from "../model/supplierModel";
import logger from "../../utils/logger";

export const createTest = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  const test = new Test({
    randomNo: randomNumber,
  });

  try {
    const savedTest = await test.save();
    const { _id } = savedTest;

    res.status(200).json({ savedTest, _id });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getHelloMessage = (req, res) => {
  res.json({ message: "hello" });
};
