<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useEffect } from "react";
>>>>>>> Manuja
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import CreateFoodItem from "./pages/CreateFoodItem";
import CreateOrder from "./pages/CreateOrder";
import FoodInventory from "./pages/FoodInventory";
import ManageMenu from "./pages/ManageMenu";
import ManageReservations from "./pages/ManageReservations";
import RequestIngredients from "./pages/RequestIngredients";
import RestaurantDashboard from "./pages/RestaurantDashboard";
import CreateTask from "./pages/CreateTask";
import TasksTable from "./pages/MonitorTasks";
import MonitorTasks from "./pages/MonitorTasks";
<<<<<<< HEAD
import ShowStaff from "./pages/ShowStaff";
import ShowUser from "./pages/ShowUser";
import UserReg from "./pages/UserReg";
import UpdateUsers from "./pages/UpdateUsers";
import UpdateStaff from "./pages/UpdateStaff";
import DeleteStaff from "./pages/DeleteStaff";
import DeleteUser from "./pages/DeleteUser";
import AllStaffs from "./pages/AllStaff";
import AllUsers from "./pages/AllUsers";
import NewUser from "./pages/NewUser";
import NewStaff from "./pages/NewStaff";
import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login";

export const UserContext = React.createContext();

function App() {
  const [rID, setRole] = useState("");
=======
import CreateSalaryPayment from "./pages/Finance Management/SalaryPayments/CreateSalaryPayment";
import CreateSupplierPayment from "./pages/Finance Management/SupplierPayment/CreateSupplierPayment";
import CreateUtilityPayment from "./pages/Finance Management/UtilityPayments/CreateUtilityPayment";
import CreateGovernmentPayment from "./pages/Finance Management/GovernmentPayments/CreateGovernmentPayment";
import CreateRefundPayment from "./pages/Finance Management/RefundPayments/CreateRefundPayment";

function App() {
>>>>>>> Manuja
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
<<<<<<< HEAD
    <UserContext.Provider value={{ rID, setRole }}>
    <>
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route
            exact
            path="/restaurant/create-item"
            element={<CreateFoodItem />}
          />
          <Route
            exact
            path="/restaurant/manage-orders"
            element={<CreateOrder />}
          />
          <Route
            exact
            path="/restaurant/food-inventory"
            element={<FoodInventory />}
          />
          <Route
            exact
            path="/restaurant/manage-menus"
            element={<ManageMenu />}
          />
          <Route
            exact
            path="/restaurant/manage-reservations"
            element={<ManageReservations />}
          />
          <Route
            exact
            path="/restaurant/request-ingredients"
            element={<RequestIngredients />}
          />
          <Route
            exact
            path="/restaurant/dashboard"
            element={<RestaurantDashboard />}
          />
          /* Maintenance Routes */
          <Route
            exact
            path="/maintenance/create-task"
            element={<CreateTask />}
          />
          <Route
            exact
            path="/maintenance/monitor-tasks"
            element={<MonitorTasks />}
          />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/allUsers" element={<AllUsers />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/newStaff" element={<NewStaff />} />
          <Route path="/allStaff" element={<AllStaffs />} />
          <Route path="/deleteUser/:id" element={<DeleteUser />} />
          <Route path="/updateUser/:id" element={<UpdateUsers />} />
          <Route path="/deleteStaff/:id" element={<DeleteStaff />} />
          <Route path="/updateStaff/:id" element={<UpdateStaff />} />
          <Route path="/registerUser" element={<UserReg />} />
          <Route path="/showUser/:id" element={<ShowUser />} />
          <Route path="/showStaff/:id" element={<ShowStaff />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </React.Fragment>
    </>
    </UserContext.Provider>
=======
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route
          exact
          path="/restaurant/create-item"
          element={<CreateFoodItem />}
        />
        <Route
          exact
          path="/restaurant/manage-orders"
          element={<CreateOrder />}
        />
        <Route
          exact
          path="/restaurant/food-inventory"
          element={<FoodInventory />}
        />
        <Route exact path="/restaurant/manage-menus" element={<ManageMenu />} />
        <Route
          exact
          path="/restaurant/manage-reservations"
          element={<ManageReservations />}
        />
        <Route
          exact
          path="/restaurant/request-ingredients"
          element={<RequestIngredients />}
        />
        <Route
          exact
          path="/restaurant/dashboard"
          element={<RestaurantDashboard />}
        />
        /* Maintenance Routes */
        <Route exact path="/maintenance/create-task" element={<CreateTask />} />
        <Route
          exact
          path="/maintenance/monitor-tasks"
          element={<MonitorTasks />}
        />
        /* Finance Management Routes */
        <Route
          exact
          path="/finance-management/salary-payments/create"
          element={<CreateSalaryPayment />}
        />
        <Route
          exact
          path="/finance-management/supplier-payments/create"
          element={<CreateSupplierPayment />}
        />
        <Route
          exact
          path="/finance-management/utility-payments/create"
          element={<CreateUtilityPayment />}
        />
        <Route
          exact
          path="/finance-management/government-payments/create"
          element={<CreateGovernmentPayment />}
        />
        <Route
          exact
          path="/finance-management/refund-payments/create"
          element={<CreateRefundPayment />}
        />
      </Routes>
    </>
>>>>>>> Manuja
  );
}

export default App;
