import mongoose from "mongoose";
import GovernmentPayment from "../model/GovernmentPayment.model";

// Get all Reports
export const getGovernmentPayment = async (req, res) => {
  try {
    const reports = await GovernmentPayment.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// insert a new report
export const insertReport = async (req, res) => {
  const { reportType, reportId, reportDate, reportDescription } = req.body;
  const newReport = new GovernmentPayment({
    reportType,
    reportId,
    reportDate,
    reportDescription,
  });
  try {
    await newReport.save();
    res.status(201).json(newReport);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Get a report by ID
export const getReportById = async (req, res) => {
  const { id } = req.params;
  try {
    const report = await GovernmentPayment.findById(id);
    res.status(200).json(report);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a report by ID
export const updateReportById = async (req, res) => {
  const { id } = req.params;
  const { reportType, reportId, reportDate, reportDescription } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No report with that id");
  const updatedReport = {
    reportType,
    reportId,
    reportDate,
    reportDescription,
    _id: id,
  };
  await GovernmentPayment.findByIdAndUpdate(id, updatedReport, { new: true });
  res.json(updatedReport);
};

// delete a report by ID

export const deleteReportById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No report with that id");
  await GovernmentPayment.findByIdAndDelete(id);
  res.json({ message: "Report deleted successfully." });
};
