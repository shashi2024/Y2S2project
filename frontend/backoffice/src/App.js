import React from "react";
import "./App.css";
import Dashboard from "./dashboard/Dashboard.jsx";
import Login from "./mainLogin/Login.jsx";
import { Route, Routes } from "react-router-dom";
import ForgetPassword from "./forgetPassword/ForgetPassword";
import AllUsers from "./allUsers/AllUsers";
import NewUser from "./newUser/NewUser";
import StaffDetails from "./staffDetails/StaffDetails";
import NewStaff from "./newStaff/NewStaff";
import AllStaff from "./allStaff/AllStaff";
import DeleteUser from "./deleteUser/DeleteUser";
import UpdateUsers from "./updateUsers/UpdateUsers";
import DeleteStaff from "./deleteStaff/DeleteStaff";
import UpdateStaffs from "./updateStaff/UpdateStaff";

function App() {
  return (
    <div className="bg-red-100 h-screen">
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allUsers" element={<AllUsers />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/newStaff" element={<NewStaff />} />
          <Route path="/staffDetails" element={<StaffDetails />} />
          <Route path="/allStaffs" element={<AllStaff />} />
          <Route path="/deleteUser/:id" element={<DeleteUser />} />
          <Route path="/updateUser/:id" element={<UpdateUsers />} />
          <Route path="/deleteStaff/:id" element={<DeleteStaff />} />
          <Route path="/updateStaff/:id" element={<UpdateStaffs />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
