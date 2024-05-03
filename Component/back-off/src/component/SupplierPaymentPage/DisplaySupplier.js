import React from "react";
import "../HomePage/Home.css";
import TopBar from "../../TopBar";
import NavBar from "../../NavBar";
import axios from "axios";
import { useEffect, useState } from "react";

const url = "http://localhost:5000/SalaryPayments";

const fetchHandler = async () => {
  return await axios.get(url).then((res) => res.data);
};

function DisplaySupplierPayment() {
  const [supplierDetails, setsupplierDetails] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setsupplierDetails(data.supplierDetails));
  }, []);

  return (
    <div className="SupplierPaymentPage">
      <TopBar />
      <NavBar />

      <div className="Page"></div>
      {supplierDetails && supplierDetails.length > 0 ? (
        DisplaySupplierPayment.map((salary) => (
          <DisplaySupplierPayment key={salary._id} test={salary} />
        ))
      ) : (
        <p>No salary details available</p>
      )}
    </div>
  );
}

export default DisplaySupplierPayment;
