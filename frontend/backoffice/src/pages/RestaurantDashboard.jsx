import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

const RestaurantDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <h1 className="text-slate-800 font-bold text-3xl">Dashboard</h1>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RestaurantDashboard;
