import "../HomePage/Home.css";
import React from "react";
import TopBar from "../../TopBar";
import NavBar from "../../NavBar";
import UtilityPaymentForm from "./form";

function UtilityForm() {
  return (
    <div className="UtilityPaymentPage">
      <TopBar />
      <NavBar />
      <div className="Page">
        <UtilityPaymentForm />
      </div>
    </div>
  );
}

export default UtilityForm;
