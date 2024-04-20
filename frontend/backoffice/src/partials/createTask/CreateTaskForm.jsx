import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import axios from "axios";

function CreateTaskForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // check if taskType is 'HouseKeeping'

    const date = new Date(data.date);
    const startTime = new Date(
      date.setHours(data.startTime.split(":")[0], data.startTime.split(":")[1])
    );
    const endTime = new Date(
      date.setHours(data.endTime.split(":")[0], data.endTime.split(":")[1])
    );

    if (startTime > endTime) {
      alert("Start time must be less than end time");
      return;
    }

    if (data.taskType === "Housekeeping ") {
      data.roomId = data.location;
    }

    const taskData = {
      ...data,
      startTime,
      endTime,
    };

    try {
      console.log(JSON.stringify(taskData));

      const response = await axios.post("http://localhost:5000/task", taskData);
      console.log(response.data);
      navigate("/maintenance/monitor-tasks");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h1 className="text-2xl font-bold">Create Task</h1>
      <hr className="border-t border-second_background mt-2 mb-12" />

      <div>
        <label className="block text-sm font-medium">Task title</label>
        <input
          {...register("title")}
          placeholder="Enter Title"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium">Task Type</label>
          <select
            {...register("taskType")}
            className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="Routine">Routine</option>
            <option value="Housekeeping">Housekeeping</option>
            <option value="Emergency">Emegerncy</option>
          </select>
        </div>

        {/* <div className="w-1/2">
          <label className="block text-sm font-medium">Task Duration</label>
          <input
            {...register("duration")}
            placeholder="Duration"
            className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div> */}
      </div>

      <div className="flex space-x-4">
        <div className="w-1/3">
          <label className="block text-sm font-medium">Date</label>
          <input
            {...register("date")}
            type="date"
            className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div className="w-1/3">
          <label className="block text-sm font-medium">Start Time</label>
          <input
            {...register("startTime")}
            type="time"
            className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div className="w-1/3">
          <label className="block text-sm font-medium">End Time</label>
          <input
            {...register("endTime")}
            type="time"
            className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Task Description</label>
        <textarea
          {...register("description")}
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium">Asset</label>
          <select
            {...register("assetId")}
            className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="option1">Option 01</option>
            <option value="option2">Option 02</option>
            <option value="option3">Option 03</option>
          </select>
        </div>

        <div className="w-1/2">
          <label className="block text-sm font-medium">Location</label>
          <select
            {...register("roomId")}
            className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Select a location</option>
            <option value="661bacca9703fb156fd972db">Location 1</option>
            <option value="661bacca9703fb156fd972db">Location 2</option>
            <option value="661bacca9703fb156fd972db">Location 3</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Assignee</label>
        <select
          {...register("userId")}
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="66244ddc6fc5b531cea5b6ca">Option 01</option>
          <option value="66244ddc6fc5b531cea5b6ca">Option 02</option>
          <option value="66244ddc6fc5b531cea5b6ca">Option 03</option>
        </select>
      </div>

      <Button>Create Task</Button>
    </form>
  );
}

export default CreateTaskForm;
