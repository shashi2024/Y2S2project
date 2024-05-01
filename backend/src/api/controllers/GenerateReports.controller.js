import mongoose from "mongoose";
import GenerateReports from "../model/GenerateReports.model";

// Get all Reports --> Display sll reports

export const getReports = async (req, res) => {
  try {
    const reports = await GenerateReports.find();
    res.status(200).json(reports);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// insert report --> insert report to the database

export const insertReport = async (req, res) => {
  const { reportId, reportType, fromDate, toDate } = req.body;
  const newReport = new GenerateReports({
    reportId,
    reportType,
    fromDate,
    toDate,
  });
  try {
    await newReport.save();
    res.status(201).json(newReport);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Get a report by id --> Display a single report

export const getReportById = async (req, res) => {
  const { id } = req.params;
  try {
    const report = await GenerateReports.findById(id);
    res.status(200).json(report);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a report by id --> Update a report

export const updateReportById = async (req, res) => {
  const { id } = req.params;
  const { reportId, reportType, fromDate, toDate } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No report with id: ${id}`);
  const updatedReport = { reportId, reportType, fromDate, toDate, _id: id };
  await GenerateReports.findByIdAndUpdate(id, updatedReport, { new: true });
  res.json(updatedReport);
};

// Delete a report by id --> Delete a report

export const deleteReportById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No report with id: ${id}`);
  await GenerateReports.findByIdAndDelete(id);
  res.json({ message: "Report deleted successfully." });
};
