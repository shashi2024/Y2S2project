import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import axios from "axios";
import TabBar from "../../components/TabBar";
import Button from "../../components/Button";
import Modal from "react-modal";
import CustomModal from "../../components/PopUp";

Modal.setAppElement("#root");

function ManageTasksList() {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All Tasks");
  const [tab, setTab] = useState("All");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

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

  const handleDelete = (task) => {
    setSelectedTask(task);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/task/${selectedTask._id}`
      );
      if (response.status === 200) {
        setTasks(tasks.filter((t) => t._id !== selectedTask._id));
        setDeleteModalOpen(false);
      } else {
        console.error("Failed to delete task:", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter !== "All Tasks" && task.__t !== filter) return false;
    if (tab !== "All" && task.status !== tab) return false;
    return true;
  });

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

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <h1 className="text-2xl font-bold">Maintenance Complains</h1>
      <SearchBar alignment="left" />
      <div className="flex space-x-4 mt-8 mb-8">
        <TabBar
          tabs={["All", "Open", "Closed"]}
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
                <Button className="px-14 " onClick={() => handleEdit(task)}>
                  Edit
                </Button>
                {tab === "On Hold" && (
                  <Button
                    className="pl-14 pr-14 ml-4"
                    onClick={() => handleDelete(task)}
                  >
                    Delete
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
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
      <CustomModal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setDeleteModalOpen(false)}
        title="Confirm Deletion"
        onConfirm={handleConfirmDelete}
      >
        Are you sure you want to delete this task?
      </CustomModal>
    </div>
  );
}

export default ManageTasksList;
