import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import axios from "axios";
import TabBar from "../../components/TabBar";
import Button from "../../components/Button";

function ManageTasksList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All Tasks");
  const [tab, setTab] = useState("All");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/task");
        setTasks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filter !== "All Tasks" && task.__t !== filter) return false;
    if (tab !== "All" && task.status !== tab) return false;
    return true;
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <h1 className="text-2xl font-bold">Manage Tasks</h1>
      <SearchBar alignment="left" />

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium">Task Type</label>
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="mt-1 block w-1/2 rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
          >
            <option value="">All Tasks</option>
            <option value="Routine">Routine</option>
            <option value="HousekeepingTask">Housekeeping</option>
            <option value="Emergency">Emergency</option>
          </select>
        </div>
      </div>
      <div className="flex space-x-4 mt-8 mb-8">
        <TabBar
          tabs={["All", "Open", "Active", "Complete", "Escalate"]}
          activeTab={tab}
          onTabClick={setTab}
        />
      </div>
      {filteredTasks.map((task) => (
        <div
          key={task._id}
          className="w-full bg-second_background rounded-xl shadow-lg overflow-hidden mb-5"
        >
          <div className="md:flex-shrink-0 p-8">
            <div>
              <h2>Task Title: {task.title}</h2>
              <p>Task Type: {task.taskType}</p>
              <p>Description: {task.description}</p>
              <p>Assignee: {task.assignee}</p>
              <p>Start Date: {new Date(task.startDate).toLocaleDateString()}</p>
              <p>End Date: {new Date(task.endDate).toLocaleDateString()}</p>
              <p>Status: {task.status}</p>
              <p>Priority: {task.priority}</p>
              <p>Location: {task.location}</p>
              <div className="flex justify-center">
                <Button
                  className="pl-14 pr-14"
                  onClick={() => handleEdit(task)}
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ManageTasksList;
