import React from "react";
import TopBar from "../../TopBar";
import NavBar from "../../NavBar";
import CreateSalaryPayment from "./CreatePayment";
import ViewSalaryPayment from "./ViewPayment";

function SalaryPaymentPage() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <div className="Page">
        <CreateSalaryPayment />
        <ViewSalaryPayment />
      </div>
    </div>
  );
}

export default SalaryPaymentPage;
