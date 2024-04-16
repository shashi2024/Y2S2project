import React from "react";
import "./App.css";
import Dashboard from "./dashboard/Dashboard.jsx";
import Login from "./mainLogin/Login.jsx";
import { Route, Routes } from "react-router-dom";
import ForgetPassword from "./forgetPassword/ForgetPassword";

function App() {
  return (
    <div className="bg-red-100 h-screen">
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
