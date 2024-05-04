import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Button from "../components/Button";
import TasksTable from "../partials/monitorTasks/TaskTable";
import axios from 'axios'

const MonitorTasks = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const genReport = async () => {
    try {
      const response = await axios.get("http://localhost:5000/report/tasks", { responseType: 'arraybuffer' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;

      // Extract filename from the 'Content-Disposition' header
      const contentDisposition = response.headers['content-disposition'] || response.headers['Content-Disposition'];
      let filename = 'file.xlsx'; // Default filename in case extraction fails
      console.log(contentDisposition)
      if (contentDisposition) {
        const regex = /filename="([^"]*)"/;
        const match = contentDisposition.match(regex);
        filename = match ? match[1] : filename;
      }

      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    }
}

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
              <Button className="mt-3 mb-2" onClick={() => genReport()}>Generate Report</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MonitorTasks;
