import { useState } from "react";
import Sidebar from "../../../partials/Sidebar";
import Header from "../../../partials/Header";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const CreateSalaryPayment = () => {
  const [SidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar SidebarOpen={SidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Side Header */}
        <Header SidebarOpen={SidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main></main>
      </div>
    </div>
  );
};

export default CreateSalaryPayment;
