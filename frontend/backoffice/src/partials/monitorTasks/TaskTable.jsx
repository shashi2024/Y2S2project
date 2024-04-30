import { useState } from "react";
import Button from "../../components/Button";
import Modal from "react-modal";

Modal.setAppElement("#root"); // replace '#root' with the id of your app's root element

function TasksTable() {
  const [tasks, setTasks] = useState([
    {
      title: "Task 1",
      type: "Type 1",
      deadline: "2022-12-31",
      assignee: "John Doe",
      status: "In Progress",
    },
    {
      title: "Task 2",
      type: "Type 2",
      deadline: "2022-12-30",
      assignee: "Don Juana",
      status: "In Progress",
    },
    {
      title: "Task 3",
      type: "Type 1",
      deadline: "2022-12-31",
      assignee: "James Smith",
      status: "In Progress",
    },
  ]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEdit = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const updatedTasks = tasks.map((task) =>
      task.title === selectedTask.title ? selectedTask : task
    );
    setTasks(updatedTasks);
    setModalOpen(false);
  };

  const handleChange = (event) => {
    setSelectedTask({
      ...selectedTask,
      [event.target.name]: event.target.value,
    });
  };

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
          {tasks.map((task, index) => (
            <tr key={index} className="border-t border-second_background">
              <td className="py-4 px-6">{task.title}</td>
              <td className="py-4 px-6">{task.type}</td>
              <td className="py-4 px-6">{task.deadline}</td>
              <td className="py-4 px-6">{task.assignee}</td>
              <td className="py-4 px-6">{task.status}</td>
              <td className="py-4 px-6">
                <Button onClick={() => handleEdit(task)}>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
                value={selectedTask.type}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div class="p-3">
              <label className="block text-sm font-medium">Deadline:</label>
              <input
                type="date"
                name="deadline"
                value={selectedTask.deadline}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div class="p-3">
              <label className="block text-sm font-medium">Assignee:</label>
              <input
                type="text"
                name="assignee"
                value={selectedTask.assignee}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
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
    </div>
  );
}

export default TasksTable;
