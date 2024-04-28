import "../HomePage/Home.css";
import React from "react";
import TopBar from "../../TopBar";
import NavBar from "../../NavBar";
import CreateBillPayment from "./CreatePayment";
import ViewBillPayment from "./ViewPayment";

function UtilityPaymentPage() {
  return (
    <div className="UtilityPaymentPage">
      <TopBar />
      <NavBar />
      <div className="Page">
        <CreateBillPayment />
        <ViewBillPayment />
      </div>
    </div>
  );
}

export default UtilityPaymentPage;
