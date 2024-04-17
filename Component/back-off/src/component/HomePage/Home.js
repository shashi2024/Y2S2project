import "./Home.css";
import React from "react";
import Heading from "./Heading";
import SupplierPaymentCard from "../supplierPaymentsCard";
import UtilityPaymentCard from "./UtilityPaymentCard";
import GovernmentPaymentCard from "./GovernmentPaymentCard";
import SalaryPaymentCard from "./SalaryPaymentCard";
import RefundRequestCard from "./RefundRequestCard";
import GenarateRportsCard from "./GernarateReportsCard";

function Home() {
  return (
    <div className="HomePage">
      <Heading></Heading>
      <SupplierPaymentCard></SupplierPaymentCard>
      <UtilityPaymentCard></UtilityPaymentCard>
      <GovernmentPaymentCard></GovernmentPaymentCard>
      <SalaryPaymentCard></SalaryPaymentCard>
      <RefundRequestCard></RefundRequestCard>
      <GenarateRportsCard></GenarateRportsCard>
    </div>
  );
}

export default Home;
