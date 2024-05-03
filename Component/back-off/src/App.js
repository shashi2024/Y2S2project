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
import SalaryForm from "./component/SalaryPaymentPage/SalaryForm.js";
import DisplaySalaryDetails from "./component/SalaryPaymentPage/DisplaySalaryPayment.js";
import SupplierForm from "./component/SupplierPaymentPage/SupplierForm.js";
import DisplaySupplierPayment from "./component/SupplierPaymentPage/DisplaySupplier.js";

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
          <Route
            path="/salary-payment/create-payment"
            element={<SalaryForm />}
          />
          <Route
            path="/supplier-payment/create-payment"
            element={<SupplierForm />}
          />
          <Route
            path="/salary-payment/Display-Salary-Details"
            element={<DisplaySalaryDetails />}
          />
          <Route
            path="/supplier-payment/Display-supplier-payment-Details"
            element={<DisplaySupplierPayment />}
          />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
