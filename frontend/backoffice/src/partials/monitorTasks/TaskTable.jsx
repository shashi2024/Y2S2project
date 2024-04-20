import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import axios from "axios";

function TasksTable() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:5000/task");
        setTasks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks(); // Call the function
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
        ;
      </>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Monitor Tasks</h1>
      <hr className="border-t border-second_background mt-2 mb-12" />
      <table className="w-full text-left border-collapse">
        <thead className="border-t border-second_background">
          <tr className="bg-second_background">
            <th className="py-4 px-6">Task Title</th>
            <th className="py-4 px-6">Task Type</th>
            <th className="py-4 px-6">Task Deadline</th>
            <th className="py-4 px-6">Assignee</th>
            <th className="py-4 px-6">Task Status</th>
            <th className="py-4 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task, index) => (
              <tr key={index} className="border-t border-second_background">
                <td className="py-4 px-6">{task.title}</td>
                <td className="py-4 px-6">{task.__t}</td>
                <td className="py-4 px-6">
                  {new Date(task.endTime).toLocaleString()}
                </td>
                <td className="py-4 px-6">{task.userId?.name}</td>
                <td className="py-4 px-6">{task.status}</td>
                <td className="py-4 px-6">
                  <Button>Edit</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TasksTable;
