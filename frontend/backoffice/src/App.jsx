import React, { useEffect } from "react";
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

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
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
  );
}

export default App;
