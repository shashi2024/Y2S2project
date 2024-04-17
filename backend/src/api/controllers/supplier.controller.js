/* eslint-disable import/no-import-module-exports */
/* eslint-disable import/prefer-default-export */
import SupplierPayment from "../model/supplierPayment.Model"; // Import user model
import logger from "../../utils/logger";

// Create a new supplier payment || Insert data

export const createSupplierPayment = async (req, res) => {
  try {
    // Extract data from request body
    const {
      paymentId,
      name,
      supplierId,
      email,
      tele,
      country,
      bankName,
      AccountNo,
    } = req.body;

    // Validate request data
    if (
      !paymentId ||
      !name ||
      !supplierId ||
      !email ||
      !tele ||
      !country ||
      !bankName ||
      !AccountNo
    ) {
      return res.status(400).json({ message: "All fields must be completed " });
    }

    // Create new supplier payment instance
    const newSupplierPayment = new SupplierPayment({
      paymentId,
      name,
      supplierId,
      email,
      tele,
      country,
      bankName,
      AccountNo,
    });

    // Save the new supplier payment to the database
    const savedSupplierPayment = await newSupplierPayment.save();

    // Return the newly created supplier payment
    return res.status(201).json({ supplierPayment: savedSupplierPayment });
  } catch (err) {
    // Log the error
    logger.error(err);
    // Handle the error
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Display all supplier payments
const displayAllSupplierPayments = async (req, res) => {
  try {
    // Retrieve all supplier payments from the database
    const allSupplierPayments = await SupplierPayment.find();

    // If no supplier payments are found, return a 404 status with a message
    if (!allSupplierPayments || allSupplierPayments.length === 0) {
      return res.status(404).json({ message: "No supplier payments found" });
    }

    // Return the array of supplier payments
    return res.status(200).json({ supplierPayments: allSupplierPayments });
  } catch (err) {
    // Log the error
    logger.error(err);
    // Handle the error
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Display supplier payment by paymentId
const displaySupplierPaymentById = async (req, res) => {
  try {
    // Extract paymentId from request parameters
    const { paymentId } = req.params;

    // Find the supplier payment document by paymentId in the database
    const supplierPayment = await SupplierPayment.findOne({ paymentId });

    // If no supplier payment is found, return a 404 status with a message
    if (!supplierPayment) {
      return res.status(404).json({ message: "Supplier payment not found" });
    }

    // Return the supplier payment document
    return res.status(200).json({ supplierPayment });
  } catch (err) {
    // Log the error
    logger.error(err);
    // Handle the error
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.createSupplierPayment = createSupplierPayment;
exports.displayAllSupplierPayments = displayAllSupplierPayments;
exports.displaySupplierPaymentById = displaySupplierPaymentById;
// -----------------------------------------------------------------------------------------------------------
// export const createSupplier = async (req, res) => {
//   const randomNumber = Math.floor(Math.random() * 100);

//   const supplier = new Supplier({
//     randomNo: randomNumber,
//   });

//   try {
//     const savedTest = await supplier.save();
//     const { _id } = savedTest;

//     res.status(200).json({ savedTest, _id });
//   } catch (error) {
//     logger.error(error.message);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };

// export const getHelloMessage = (req, res) => {
//   res.json({ message: "hello" });
// };
