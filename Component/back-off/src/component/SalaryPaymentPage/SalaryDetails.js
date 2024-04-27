import React from "react";
import "./DisplaySalaryDetails.css";

function SalaryDetails(props) {
  const {
    empId,
    PaymentId,
    PaymenentDate,
    attendence,
    otHours,
    basicSalary,
    bankName,
    AccountNum,
    totalSalary,
  } = props.Test;
  return (
    <div>
      Test DisplaySalaryDetails
      <div className="salary-details-container">
        <h2>Salary Details</h2>
        <div className="detail">
          <span className="label">Employee ID:</span>
          <span className="value">{empId}</span>
        </div>
        <div className="detail">
          <span className="label">Payment ID:</span>
          <span className="value">{PaymentId}</span>
        </div>
        <div className="detail">
          <span className="label">Payment Date:</span>
          <span className="value">{PaymenentDate}</span>
        </div>
        <div className="detail">
          <span className="label">Attendance:</span>
          <span className="value">{attendence}</span>
        </div>
        <div className="detail">
          <span className="label">OT Hours:</span>
          <span className="value">{otHours}</span>
        </div>
        <div className="detail">
          <span className="label">Basic Salary:</span>
          <span className="value">{basicSalary}</span>
        </div>
        <div className="detail">
          <span className="label">Bank Name:</span>
          <span className="value">{bankName}</span>
        </div>
        <div className="detail">
          <span className="label">Account Number:</span>
          <span className="value">{AccountNum}</span>
        </div>
        <div className="detail">
          <span className="label">Total Salary:</span>
          <span className="value">{totalSalary}</span>
        </div>
      </div>
    </div>
  );
}
export default SalaryDetails;
