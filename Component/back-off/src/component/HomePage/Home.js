import "./Home.css";
import React from "react";
import NavBar from "../../NavBar";
import TopBar from "../../TopBar";
import Heading from "./Heading";
import SupplierPaymentCard from "./supplierPaymentsCard";
import UtilityPaymentCard from "./UtilityPaymentCard";
import GovernmentPaymentCard from "./GovernmentPaymentCard";
import SalaryPaymentCard from "./SalaryPaymentCard";
import RefundRequestCard from "./RefundRequestCard";
import GenarateRportsCard from "./GernarateReportsCard";

function Home() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <div className="Page">
        <Heading />
        <SupplierPaymentCard />
        <UtilityPaymentCard />
        <GovernmentPaymentCard />
        <SalaryPaymentCard />
        <RefundRequestCard />
        <GenarateRportsCard />
      </div>
    </div>
  );
}

export default Home;
