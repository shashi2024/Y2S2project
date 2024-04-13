import Staff from "../model/staff.model";
import logger from "../../utils/logger";

export const createStaff = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  const staff = new Staff({
    randomNo: randomNumber,
  });

  try {
    const savedStaff = await staff.save();
    const { _id } = savedStaff;

    res.status(200).json({ savedStaff, _id });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getHelloMessage = (req, res) => {
  res.json({ message: "staff" });
};


