import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import axios from "axios";
import TabBar from "../../components/TabBar";
import Modal from "react-modal";
import Button from "../../components/Button";
import PopUp from "../../components/PopUp";

Modal.setAppElement("#root");

function AssignedTasksList() {
  const [tasks, setTasks] = useState([]);
  const [tab, setTab] = useState("All");
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

  const [showPopUp, setShowPopUp] = useState(false);

  const handleStart = (task) => {
    setSelectedTask(null);
    setShowPopUp(true);
  };

  const handleConfirmStart = () => {
    setTaskStatus({ ...taskStatus, [selectedTask._id]: "In Progress" });
    setShowPopUp(false);
  };

  const handleEscalate = (task) => {
    setTasks(tasks.filter((t) => t._id !== task._id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (tab !== "All" && task.status !== tab) return false;
    return true;
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <h1 className="text-2xl font-bold">Assigned Tasks</h1>
      <SearchBar alignment="left" />

      <div className="flex space-x-4 mt-8 mb-8">
        <TabBar
          tabs={["All", "Assigned", "In Progress", "Complete"]}
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
              <p>Task Type: {task.__t}</p>
              <p>Status: {task.status}</p>
              <p>Location: {task.location}</p>
            </div>
            <div className="flex justify-center">
              <Button className="px-14" onClick={() => setSelectedTask(task)}>
                View
              </Button>
            </div>
          </div>
        </div>
      ))}
      <PopUp
        isOpen={showPopUp}
        onRequestClose={() => setShowPopUp(false)}
        onConfirm={handleConfirmStart}
        title="Are you sure you want to start this task?"
      />
      <Modal
        isOpen={selectedTask !== null}
        onRequestClose={() => setSelectedTask(null)}
        style={{
          overlay: {
            zIndex: 1000,
          },
          content: {
            width: "50%",
            height: "55%",
            margin: "0 auto",
            backgroundColor: "#FFD600",
          },
        }}
      >
        {selectedTask && (
          <div>
            <h1 className="text-2xl font-bold text-black">
              {selectedTask.title}
            </h1>
            <hr className="border-t border-white mt-3 mb-6" />
            <div>
              <h2>Task Title: {selectedTask.title}</h2>
              <p>Task Type: {selectedTask.taskType}</p>
              <p>Description: {selectedTask.description}</p>
              <p>Assignee: {selectedTask.assignee}</p>
              <p>
                Start Date:{" "}
                {new Date(selectedTask.startDate).toLocaleDateString()}
              </p>
              <p>
                End Date: {new Date(selectedTask.endDate).toLocaleDateString()}
              </p>
              <p>Status: {selectedTask.status}</p>
              <p>Priority: {selectedTask.priority}</p>
              <p>Location: {selectedTask.location}</p>
            </div>
            <div className="flex justify-center">
              <Button
                className="px-14 mx-2"
                onClick={() => handleStart(selectedTask)}
              >
                {selectedTask.__t === "In Progress" ? "Complete" : "Start"}
              </Button>
              <Button
                className="px-10 mx-2"
                onClick={() => handleEscalate(selectedTask)}
              >
                Escalate
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default AssignedTasksList;
