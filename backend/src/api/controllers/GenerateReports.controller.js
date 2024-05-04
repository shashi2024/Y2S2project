import mongoose from "mongoose";
import GenerateReports from "../model/GenerateReports.model";

// Get all Reports
export const getReports = async (req, res) => {
  try {
    const reports = await GenerateReports.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// insert a new report
export const insertReport = async (req, res) => {
  const { reportType, reportId, reportDate, reportDescription } = req.body;
  const newReport = new GenerateReports({
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
    const report = await GenerateReports.findById(id);
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
  await GenerateReports.findByIdAndUpdate(id, updatedReport, { new: true });
  res.json(updatedReport);
};

// delete a report by ID

export const deleteReportById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No report with that id");
  await GenerateReports.findByIdAndDelete(id);
  res.json({ message: "Report deleted successfully." });
};
