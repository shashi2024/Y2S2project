import Test from "../model/test.model";
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

export const getTests = async (req, res) => {
  try {
    const tests = await Test.find();
    const count = tests.length;

    res.status(200).json({ tests, count });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// eslint-disable-next-line consistent-return
export const getTest = async (req, res) => {
  const { id } = req.params;

  try {
    const test = await Test.findById(id);

    if (!test) {
      return res.status(404).json({ message: "Test not found" });
    }
    res.status(200).json({ test, id });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getHelloMessage = (req, res) => {
  res.json({ message: "hello" });
};
