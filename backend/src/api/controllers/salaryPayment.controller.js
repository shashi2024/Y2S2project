/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import SalaryPayment from "../model/salaryPayment.Model";
import logger from "../../utils/logger";

// Create a new salary payment
export const createSalaryPayment = async (req, res) => {
  try {
    const {
      empId,
      PaymentId,
      amount,
      PaymenentDate,
      attendence,
      otHours,
      bonus,
      bankName,
      AccountNum,
    } = req.body;

    // Validate request data
    if (
      !empId ||
      !PaymentId ||
      !amount ||
      !PaymenentDate ||
      !attendence ||
      !otHours ||
      !AccountNum
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be completed" });
    }

    // Create new salary payment instance
    const newSalaryPayment = new SalaryPayment({
      empId,
      PaymentId,
      amount,
      PaymenentDate,
      attendence,
      otHours,
      bonus,
      bankName,
      AccountNum,
    });

    // Save the new salary payment to the database
    const savedSalaryPayment = await newSalaryPayment.save();

    // Return the newly created salary payment
    return res.status(201).json({ salaryPayment: savedSalaryPayment });
  } catch (err) {
    // Log the error
    logger.error(err);
    // Handle the error
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
