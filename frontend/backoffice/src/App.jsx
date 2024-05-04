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
          path="/maintenance/monitor-tasks"
          element={<MonitorTasks />}
        />
      </Routes>
    </>
  );
}

export default App;
