import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/HomePage/Home.js";
import SalaryPaymentPage from "./component/SalaryPaymentPage/SalaryPayment.js";
import SupplierPaymentPage from "./component/SupplierPaymentPage/SupplierPayment.js";
import UtilityPaymentPage from "./component/UtilityPaymentPage/UtiityPayment.js";
import GovPaymentPage from "./component/GovernmentPaymentPage/GovPayment.js";
import GenerateReportPage from "./component/GenarateReportsPage/GenerateReports.js";
import RefundRequestPage from "./component/RefundRequestPage/RefundReq.js";
import UtilityForm from "./component/UtilityPaymentPage/UtilityForm.js";

function App() {
  return (
    <div className="bg-red-100 h-screen">
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/salary-payment" element={<SalaryPaymentPage />} />
          <Route path="/supplier-payment" element={<SupplierPaymentPage />} />
          <Route path="/utility-payment" element={<UtilityPaymentPage />} />
          <Route path="/government-payment" element={<GovPaymentPage />} />
          <Route path="/refund-request" element={<RefundRequestPage />} />
          <Route path="/generate-reports" element={<GenerateReportPage />} />
          <Route path="/salary-payment" element={<SalaryPaymentPage />} />
          <Route
            path="/utility-payment/create-payment"
            element={<UtilityForm />}
          />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
