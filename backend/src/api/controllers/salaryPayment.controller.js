import SalaryPayment from "../model/SalaryPayment.model";
import logger from "../../utils/logger";

// Controller function to handle retrieving all salary payments
const getSalaryPayments = async (req, res) => {
  try {
    // Fetch all salary payments from the database
    const salaryPayments = await SalaryPayment.find();

    // Send success response with the retrieved salary payments
    res.status(200).json({
      message: "Salary payments retrieved successfully",
      data: salaryPayments,
    });
  } catch (error) {
    // Handle errors
    console.error("Error retrieving salary payments:", error);
    res.status(500).json({
      message: "Failed to retrieve salary payments",
      error: error.message,
    });
  }
};

// Controller function to handle creating a new salary payment
const createSalaryPayment = async (req, res) => {
  try {
    // Extract data from request body
    const {
      empId,
      PaymentId,
      PaymentDate,
      attendence,
      otHours,
      basicSalary,
      bankName,
      AccountNum,
      totalSalary,
    } = req.body;

    // Create a new instance of SalaryPayment model
    const newSalaryPayment = new SalaryPayment({
      empId,
      PaymentId,
      PaymenentDate: PaymentDate,
      attendence,
      otHours,
      basicSalary,
      bankName,
      AccountNum,
      totalSalary,
    });

    // Save the new salary payment to the database
    await newSalaryPayment.save();

    // Send success response
    res.status(201).json({
      message: "Salary payment created successfully",
      data: newSalaryPayment,
    });
  } catch (error) {
    // Handle errors
    console.error("Error creating salary payment:", error);
    res.status(500).json({
      message: "Failed to create salary payment",
      error: error.message,
    });
  }
};

// Export the controller functions
export { createSalaryPayment, getSalaryPayments };
