/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import UtilityPayment from "../models/utilityPayment.model";
import logger from "../../utils/logger";

// Create a new utility payment
export const createUtilityPayment = async (req, res) => {
  try {
    const {
      customerId,
      PaymentId,
      customerName,
      amount,
      PaymentDate,
      description,
    } = req.body;

    // Validate request data
    if (
      !customerId ||
      !PaymentId ||
      !customerName ||
      !amount ||
      !PaymentDate ||
      !description
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be completed" });
    }

    // Create new utility payment instance
    const newUtilityPayment = new UtilityPayment({
      customerId,
      PaymentId,
      customerName,
      amount,
      PaymentDate,
      description,
    });

    // Save the new utility payment to the database
    const savedUtilityPayment = await newUtilityPayment.save();

    // Return the newly created utility payment
    return res.status(201).json({ utilityPayment: savedUtilityPayment });
  } catch (err) {
    // Log the error
    logger.error(err);
    // Handle the error
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
