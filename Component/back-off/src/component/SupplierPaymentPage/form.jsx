import React, { useState } from "react";
import "./form.css";

const SupplierPaymentForm = () => {
  const [formData, setFormData] = useState({
    paymentId: "",
    name: "",
    supplierId: "",
    email: "",
    tele: "",
    country: "",
    bankName: "",
    AccountNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send formData to your backend or perform any other actions
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h2>Supplier Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Payment ID:</label>
          <input
            type="number"
            name="paymentId"
            value={formData.paymentId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Supplier ID:</label>
          <input
            type="text"
            name="supplierId"
            value={formData.supplierId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Telephone:</label>
          <input
            type="text"
            name="tele"
            value={formData.tele}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Bank Name:</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Account Number:</label>
          <input
            type="text"
            name="AccountNo"
            value={formData.AccountNo}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SupplierPaymentForm;
