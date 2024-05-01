import { useState } from "react";
import Sidebar from "../../../partials/Sidebar";
import Header from "../../../partials/Header";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const CreateGovernmentPayment = () => {
  const [SidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar SidebarOpen={SidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* Side Header */}
        <Header SidebarOpen={SidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-background">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Form history={navigate} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateGovernmentPayment;
