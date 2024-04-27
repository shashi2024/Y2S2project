import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const SalaryPaymentForm = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    empId: "",
    PaymentId: "",
    PaymentDate: "",
    attendence: 0,
    otHours: 0,
    bankName: "",
    AccountNum: "",
    basicSalary: 0,
    totalSalary: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate if value is a valid decimal number before updating the state
    if (
      ["basicSalary"].includes(name) &&
      !isNaN(value) &&
      value.trim() !== ""
    ) {
      setFormData({
        ...formData,
        [name]: parseFloat(value), // Convert value to float
      });
    } else if (name === "attendence" || name === "otHours") {
      // For "Attendance" and "OT Hours", restrict negative values
      if (!isNaN(value) && parseFloat(value) >= 0) {
        setFormData({
          ...formData,
          [name]: parseFloat(value),
        });
      }
    } else if (name === "AccountNum") {
      // For "Account Number", restrict to 10 digits
      const trimmedValue = value.trim();
      if (/^\d{0,10}$/.test(trimmedValue)) {
        setFormData({
          ...formData,
          [name]: trimmedValue,
        });
      }
    } else {
      // For other fields, update the state directly
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCalculate = () => {
    const totalSalary = calculateTotalSalary(formData);
    setFormData((prevData) => ({
      ...prevData,
      totalSalary: totalSalary,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest(formData);
      console.log(response.data);
      history("/salary-payment/Display-Salary-Details"); // Redirect to the desired route after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Function to calculate total salary based on form data
  const calculateTotalSalary = (formData) => {
    const basic = parseFloat(formData.basicSalary);
    const ot = parseInt(formData.otHours);

    let totalSalary = basic + ot * 1500; // Assuming overtime payment is $1500 per hour

    if (formData.attendance >= 20) {
      totalSalary += 5000;
    }

    return totalSalary;
  };

  const sendRequest = async (data) => {
    return await fetch("http://localhost:5000/SalaryPayments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="form-container">
      <h2>Salary Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee ID:</label>
          <input
            type="text"
            name="empId"
            value={formData.empId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment ID:</label>
          <input
            type="text"
            name="PaymentId"
            value={formData.PaymentId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Date:</label>
          <input
            type="date"
            name="PaymentDate"
            value={formData.PaymentDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Basic Salary:</label>
          <input
            type="number"
            name="basicSalary"
            value={formData.basicSalary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Attendance:</label>
          <input
            type="number"
            name="attendence"
            value={formData.attendence}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <div className="form-group">
          <label>OT Hours:</label>
          <input
            type="number"
            name="otHours"
            value={formData.otHours}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Bank Name:</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Account Number:</label>
          <input
            type="number"
            name="AccountNum"
            value={formData.AccountNum}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            title="Please enter a 10-digit account number"
          />
        </div>

        <div className="form-group">
          <label>Total Salary:</label>
          <input
            type="number"
            name="totalSalary"
            value={formData.totalSalary}
            onChange={handleChange}
            disabled // Disable input to prevent user input
          />
        </div>
        <button type="button" onClick={handleCalculate}>
          Calculate Total Salary
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SalaryPaymentForm;
