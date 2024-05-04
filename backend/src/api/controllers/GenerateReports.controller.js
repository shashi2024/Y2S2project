import xlsx from "xlsx";
import logger from "../../utils/logger";
import Salary from "../model/salaryPayment.Model";
import Utility from "../model/utilityPayment.Model";
import Refund from "../model/RefundPayment.model";
import Govt from "../model/GovernmentPayment.model";
import Supplier from "../model/supplierPayment.Model";

export const UtilityReports = async (req, res) => {
  try {
    const utilities = await Utility.find();
    const wb = xlsx.utils.book_new();
    const worksheetData = [
      [
        "Payment ID",
        "Utility Type",
        "Payment Date",
        "Payment Amount",
        "Description",
      ],
      ...utilities.map(utility => [
        utility.PaymentId,
        utility.utilityType,
        utility.paymentDate,
        utility.paymentAmount,
        utility.description,
      ]),
    ];

    const worksheet = xlsx.utils.aoa_to_sheet(worksheetData);

    xlsx.utils.book_append_sheet(wb, worksheet, "Utility Payments");

    const excelBuffer = xlsx.write(wb, { type: "buffer", bookType: "xlsx" });

    const now = new Date();

    const timestamp = now
      .toISOString()
      .replace(/[:\-T]/g, "")
      .split(".")[0];
    logger.warn(`timestamp: ${timestamp}`);
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${timestamp}_utility_payments.xlsx"`
    );
    res.setHeader("Content-Length", excelBuffer.length);

    res.end(excelBuffer, "binary");
  } catch (error) {
    logger.error(error.message);
    res.status(500).send("Error generating utility report");
  }
};

export const SalaryReports = async (req, res) => {
  try {
    const salaries = await Salary.find();
    const wb = xlsx.utils.book_new();
    const worksheetData = [
      [
        "Payment ID",
        "Employee ID",
        "Payment Date",
        "Basic Salary",
        "Attendance",
        "Overtime",
        "Total Salary",
        "Bank Account",
        "Bank Name",
      ],
      ...salaries.map(salary => [
        salary.PaymentId,
        salary.employeeId,
        salary.paymentDate,
        salary.basicSalary,
        salary.Attendance,
        salary.overtime,
        salary.totalSalary,
        salary.bankAccount,
        salary.bankName,
      ]),
    ];

    const worksheet = xlsx.utils.aoa_to_sheet(worksheetData);

    xlsx.utils.book_append_sheet(wb, worksheet, "Salary Payments");

    const excelBuffer = xlsx.write(wb, { type: "buffer", bookType: "xlsx" });

    const now = new Date();

    const timestamp = now
      .toISOString()
      .replace(/[:\-T]/g, "")
      .split(".")[0];
    logger.warn(`timestamp: ${timestamp}`);
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${timestamp}_salary_payments.xlsx"`
    );
    res.setHeader("Content-Length", excelBuffer.length);

    res.end(excelBuffer, "binary");
  } catch (error) {
    logger.error(error.message);
    res.status(500).send("Error generating salary report");
  }
};

export const RefundReports = async (req, res) => {
  try {
    const refunds = await Refund.find();
    const wb = xlsx.utils.book_new();
    const worksheetData = [
      [
        "Refund Request ID",
        "Refund Type",
        "Refund Amount",
        "Refund Date",
        "Customer Payment Date",
        "Description",
      ],
      ...refunds.map(refund => [
        refund.refundRequestId,
        refund.refundType,
        refund.refundAmount,
        refund.refundDate,
        refund.paymentDate,
        refund.description,
      ]),
    ];

    const worksheet = xlsx.utils.aoa_to_sheet(worksheetData);

    xlsx.utils.book_append_sheet(wb, worksheet, "Refund Payments");

    const excelBuffer = xlsx.write(wb, { type: "buffer", bookType: "xlsx" });

    const now = new Date();

    const timestamp = now
      .toISOString()
      .replace(/[:\-T]/g, "")
      .split(".")[0];
    logger.warn(`timestamp: ${timestamp}`);
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${timestamp}_refund_payments.xlsx"`
    );
    res.setHeader("Content-Length", excelBuffer.length);

    res.end(excelBuffer, "binary");
  } catch (error) {
    logger.error(error.message);
    res.status(500).send("Error generating salary report");
  }
};

export const GovtReports = async (req, res) => {
  try {
    const govt = await Govt.find();
    const wb = xlsx.utils.book_new();
    const worksheetData = [
      ["Payment ID", "Payment Type", "Payment Date", "Payment Amount"],
      ...govt.map(govt => [
        govt.PaymentId,
        govt.paymentType,
        govt.paymentDate,
        govt.paymentAmount,
      ]),
    ];

    const worksheet = xlsx.utils.aoa_to_sheet(worksheetData);

    xlsx.utils.book_append_sheet(wb, worksheet, "Government Payments");

    const excelBuffer = xlsx.write(wb, { type: "buffer", bookType: "xlsx" });

    const now = new Date();

    const timestamp = now
      .toISOString()
      .replace(/[:\-T]/g, "")
      .split(".")[0];
    logger.warn(`timestamp: ${timestamp}`);
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${timestamp}_government_payments.xlsx"`
    );
    res.setHeader("Content-Length", excelBuffer.length);

    res.end(excelBuffer, "binary");
  } catch (error) {
    logger.error(error.message);
    res.status(500).send("Failed to generate report");
  }
};

export const SupplierReports = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    const wb = xlsx.utils.book_new();
    const worksheetData = [
      [
        "Payment ID",
        "Supplier ID",
        "supplier Name",
        "Email",
        "Contact Number",
        "Payment Date",
        "Payment Amount",
        "Description",
        "Quality",
      ],
      ...suppliers.map(supplier => [
        supplier.PaymentId,
        supplier.supplierId,
        supplier.supplierName,
        supplier.email,
        supplier.contactNumber,
        supplier.paymentDate,
        supplier.paymentAmount,
        supplier.description,
        supplier.quality,
      ]),
    ];

    const worksheet = xlsx.utils.aoa_to_sheet(worksheetData);

    xlsx.utils.book_append_sheet(wb, worksheet, "Supplier Payments");

    const excelBuffer = xlsx.write(wb, { type: "buffer", bookType: "xlsx" });

    const now = new Date();

    const timestamp = now
      .toISOString()
      .replace(/[:\-T]/g, "")
      .split(".")[0];
    logger.warn(`timestamp: ${timestamp}`);
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Access-Control-Expose-Headers", "Content-Disposition");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${timestamp}_supplier_payments.xlsx"`
    );
    res.setHeader("Content-Length", excelBuffer.length);

    res.end(excelBuffer, "binary");
  } catch (error) {
    logger.error(error.message);
    res.status(500).send("Failed to generate report");
  }
};
