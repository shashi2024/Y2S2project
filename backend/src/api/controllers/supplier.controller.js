import Supplier from "../model/supplierPaymentModel";
import logger from "../../utils/logger";

export const createTest = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  const supplier = new Supplier({
    randomNo: randomNumber,
  });

  try {
    const savedTest = await supplier.save();
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

//-----------------------------------------------------------------


