import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Button from "../components/Button";
import TasksTable from "../partials/MaintenanceDashboard/TaskTable";
import axios from "axios";

const MaintenanceDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-background ">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <TasksTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MaintenanceDashboard;
