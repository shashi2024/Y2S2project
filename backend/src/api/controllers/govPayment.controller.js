/* eslint-disable import/no-unresolved */
// Import the GovernmentPayment model
import GovernmentPayment from "../model/govPayment.Model";
import logger from "../../utils/logger";

// Controller function to create a new government payment
export const createGovernmentPayment = async (req, res) => {
  try {
    // Extract data from request body
    const { paymentType, PaymentId, amount, PaymentDate, description } =
      req.body;

    // Validate request data
    if (!paymentType || !PaymentId || !amount || !PaymentDate) {
      return res.status(400).json({ message: "All fields must be completed" });
    }

    // Create new government payment instance
    const newGovernmentPayment = new GovernmentPayment({
      paymentType,
      PaymentId,
      amount,
      PaymentDate,
      description,
    });

    // Save the new government payment to the database
    const savedGovernmentPayment = await newGovernmentPayment.save();

    // Return the newly created government payment
    return res.status(201).json({ governmentPayment: savedGovernmentPayment });
  } catch (err) {
    // Log the error
    logger.error(err);
    // Handle the error
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to display all government payments
export const displayAllGovernmentPayments = async (req, res) => {
  try {
    // Retrieve all government payments from the database
    const allGovernmentPayments = await GovernmentPayment.find();

    // If no government payments are found, return a 404 status with a message
    if (!allGovernmentPayments || allGovernmentPayments.length === 0) {
      return res.status(404).json({ message: "No government payments found" });
    }

    // Return the array of government payments
    return res.status(200).json({ governmentPayments: allGovernmentPayments });
  } catch (err) {
    // Log the error
    logger.error(err);
    // Handle the error
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
