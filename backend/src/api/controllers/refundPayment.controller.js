/* eslint-disable import/no-unresolved */
// Import the RefundPayment model
import RefundPayment from "../model/refundPaymentModel";
import logger from "../../utils/logger";

// Controller function to create a new refund payment
export const createRefundPayment = async (req, res) => {
  try {
    // Extract data from request body
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
      return res.status(400).json({ message: "All fields must be completed" });
    }

    // Create new refund payment instance
    const newRefundPayment = new RefundPayment({
      customerId,
      PaymentId,
      customerName,
      amount,
      PaymentDate,
      description,
    });

    // Save the new refund payment to the database
    const savedRefundPayment = await newRefundPayment.save();

    // Return the newly created refund payment
    return res.status(201).json({ refundPayment: savedRefundPayment });
  } catch (err) {
    // Log the error
    logger.error(err);
    // Handle the error
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller function to display all refund payments
export const displayAllRefundPayments = async (req, res) => {
  try {
    // Retrieve all refund payments from the database
    const allRefundPayments = await RefundPayment.find();

    // If no refund payments are found, return a 404 status with a message
    if (!allRefundPayments || allRefundPayments.length === 0) {
      return res.status(404).json({ message: "No refund payments found" });
    }

    // Return the array of refund payments
    return res.status(200).json({ refundPayments: allRefundPayments });
  } catch (err) {
    // Log the error
    logger.error(err);
    // Handle the error
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
