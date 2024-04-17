import GenerateReports from "../model/genarateReports.Model";
import logger from "../../utils/logger";

// Create a new financial report entry for the hotel
export const createFinancialReport = async (req, res) => {
  try {
    // Extract data from request body
    const { reportType, fromDate } = req.body;

    // Validate request data
    if (!reportType || !fromDate) {
      return res.status(400).json({ message: "All fields must be completed" });
    }

    // Create new financial report entry
    const newReport = new GenerateReports({
      reportType,
      fromDate,
    });

    // Save the new financial report entry to the database
    const savedReport = await newReport.save();

    // Return the newly created financial report entry
    return res.status(201).json({ report: savedReport });
  } catch (err) {
    // Log the error
    logger.error(err);
    // Handle the error
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default createFinancialReport;
