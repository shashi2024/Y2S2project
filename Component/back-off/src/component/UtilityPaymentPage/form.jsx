import React, { useState } from "react";
import "./UtilityPaymentForm.css";

function UtilityPaymentForm() {
  const [utilityType, setUtilityType] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const formData = {
      utilityType,
      paymentId,
      amount: parseFloat(amount),
      paymentDate: new Date(paymentDate),
      description,
    };
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Utility Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="utilityType">Utility Type:</label>
          <select
            id="utilityType"
            value={utilityType}
            onChange={(e) => setUtilityType(e.target.value)}
            required
          >
            <option value="">Select Utility Type</option>
            <option value="Electricity">Electricity</option>
            <option value="Water">Water</option>
            <option value="Internet Bill">Internet Bill</option>
            <option value="Phone Bill">Phone Bill</option>
            <option value="Gas Bill">Gas Bill</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="paymentId">Payment ID:</label>
          <input
            type="text"
            id="paymentId"
            value={paymentId}
            onChange={(e) => setPaymentId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentDate">Payment Date:</label>
          <input
            type="date"
            id="paymentDate"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UtilityPaymentForm;
