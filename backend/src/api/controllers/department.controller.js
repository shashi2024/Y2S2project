import Department from "../model/department.model";
import logger from "../../utils/logger";

export const createDepartment = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);

  const department = new Department({
    randomNo: randomNumber,
  });

  try {
    const savedDepartment = await department.save();
    const { _id } = savedDepartment;

    res.status(200).json({ savedDepartment, _id });
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getHelloMessage = (req, res) => {
  res.json({ message: "department" });
};


