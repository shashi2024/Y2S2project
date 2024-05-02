import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Modal from "react-modal";
import axios from "axios";
import SearchBar from "../../components/SearchBar";

Modal.setAppElement("#root"); // replace '#root' with the id of your app's root element

function TasksTable() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

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

  const handleEdit = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const handleDelete = async (task) => {
    console.log(task._id);
    try {
      const response = await axios.delete(
        `http://localhost:5000/task/${task._id}`
      );
      if (response.status === 200) {
        window.location.reload();
      } else {
        console.error("Failed to delete task:", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const updatedTasks = tasks.map((task) =>
      task.title === selectedTask.title ? selectedTask : task
    );

    try {
      // Replace 'http://localhost:5000/task' with your API endpoint
      // Replace 'id' with the property that holds the task's ID
      const response = await axios.put(
        `http://localhost:5000/task/${selectedTask._id}`,
        selectedTask
      );

      if (response.status === 200) {
        setModalOpen(false);
        window.location.reload();
      } else {
        console.error("Failed to update task:", response);
      }
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  const handleChange = (event) => {
    setSelectedTask({
      ...selectedTask,
      [event.target.name]: event.target.value,
    });
  };

  const genReport = async () => {
    try {
      const response = await axios.get("http://localhost:5000/report/tasks", {
        responseType: "arraybuffer",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;

      // Extract filename from the 'Content-Disposition' header
      const contentDisposition =
        response.headers["content-disposition"] ||
        response.headers["Content-Disposition"];
      let filename = "file.xlsx"; // Default filename in case extraction fails
      console.log(contentDisposition);
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
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Monitor Tasks</h1>
      <SearchBar alignment="left" />
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
          {tasks.map((task, index) => (
            <tr key={index} className="border-t border-second_background">
              <td className="py-4 px-6">{task.title}</td>
              <td className="py-4 px-6">{task.__t}</td>
              <td className="py-4 px-6">
                {new Date(task.endTime).toLocaleDateString()}
              </td>
              <td className="py-4 px-6">{task.userId?.name}</td>
              <td className="py-4 px-6">{task.status}</td>
              <td className="py-4 px-6">
                <Button onClick={() => handleEdit(task)}>Edit</Button>
                <Button className="ml-2" onClick={() => handleDelete(task)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className="border-t border-second_background mt-2 mb-12" />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={{
          overlay: {
            zIndex: 1000,
          },
          content: {
            width: "50%", // 2/3 of the page
            margin: "0 auto", // center the form
            backgroundColor: "#FFD600",
          },
        }}
      >
        {selectedTask && (
          <form onSubmit={handleSave}>
            <h1 className="text-2xl font-bold text-black">Edit Tasks</h1>
            <hr className="border-t border-white mt-3 mb-6" />

            <div class="p-3">
              <label className="block text-sm font-medium">Title:</label>
              <input
                type="text"
                name="title"
                value={selectedTask.title}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div class="p-3">
              <label className="block text-sm font-medium">Type:</label>
              <input
                type="text"
                name="type"
                value={selectedTask.__t}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div class="p-3">
              <label className="block text-sm font-medium">Deadline:</label>
              <input
                type="date"
                name="deadline"
                value={selectedTask.endTime}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div className="p-3">
              <label className="block text-sm font-medium">Assignee:</label>
              <select
                name="assignee"
                value={selectedTask.userId?._id}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              >
                <option value="">Select an assignee</option>
                <option value="66244ddc6fc5b531cea5b6ca">User 1</option>
                <option value="66244ddc6fc5b531cea5b6ca">User 2</option>
                <option value="66244ddc6fc5b531cea5b6ca">User 3</option>
                // Add more options as needed
              </select>
            </div>
            <div class="p-3">
              <label className="block text-sm font-medium">Status:</label>
              <input
                type="text"
                name="status"
                value={selectedTask.status}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit" className="p-3">
                Save
              </Button>
            </div>
          </form>
        )}
      </Modal>
      <Button className="mt-3 mb-2" onClick={() => genReport()}>
        Generate Report
      </Button>
    </div>
  );
}

export default TasksTable;
