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
import MonitorTasks from "./pages/MaintenanceDashboard";
import ManageTasks from "./pages/ManageTasks";
import AssignedTasks from "./pages/AssignedTasks";
import CompanyAssets from "./pages/CompanyAssets";
import MaintenanceDashboard from "./pages/MaintenanceDashboard";
import MaintenanceComplains from "./pages/MaintenanceComplains";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
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
          path="/maintenance/dashboard"
          element={<MaintenanceDashboard />}
        />
        <Route
          exact
          path="/maintenance/manage-tasks"
          element={<ManageTasks />}
        />
        <Route
          exact
          path="/maintenance/assigned-tasks"
          element={<AssignedTasks />}
        />
        <Route
          exact
          path="/maintenance/company-assets"
          element={<CompanyAssets />}
        />
        <Route
          exact
          path="/maintenance/complains"
          element={<MaintenanceComplains />}
        />
      </Routes>
    </>
  );
}

export default App;
