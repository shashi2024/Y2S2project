import "../HomePage/Home.css";
import React from "react";
import TopBar from "../../TopBar";
import NavBar from "../../NavBar";
import SalaryPaymentForm from "./form";

function SalaryForm() {
  return (
    <div className="SalaryPaymentPage">
      <TopBar />
      <NavBar />
      <div className="Page">
        <SalaryPaymentForm />
      </div>
    </div>
  );
}

export default SalaryForm;
