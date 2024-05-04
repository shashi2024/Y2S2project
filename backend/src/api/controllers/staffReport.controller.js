import StaffReport from "../model/staffReport.model";
import logger from "../../utils/logger";

export const createStaffReport = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  const staffReport = new StaffReport({
    randomNo: randomNumber,
  });

  try {
    const savedStaffReport = await staffReport.save();
    const { _id } = savedStaffReport;

    res.status(200).json({ savedStaffReport, _id });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getHelloMessage = (req, res) => {
  res.json({ message: "staffReport" });
};


