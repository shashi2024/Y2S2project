import "../HomePage/Home.css";
import React from "react";
import TopBar from "../../TopBar";
import NavBar from "../../NavBar";
import SupplierPaymentForm from "./form";

function SupplierForm() {
  return (
    <div className="SupplierPaymentPage">
      <TopBar />
      <NavBar />
      <div className="Page">
        <SupplierPaymentForm />
      </div>
    </div>
  );
}

export default SupplierForm;
