import React from "react";
import "../HomePage/Home.css";
import TopBar from "../../TopBar";
import NavBar from "../../NavBar";
import CreateSupplierPayment from "./createPayment";
import DisplaySupplerPayment from "./displayPayment";

function SupplierPaymentPage() {
  return (
    <div className="SupplierPaymentPage">
      <TopBar />
      <NavBar />

      <div className="Page">
        <CreateSupplierPayment />
        <DisplaySupplerPayment />
      </div>
    </div>
  );
}

export default SupplierPaymentPage;
