import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import axios from "axios";

function CreateTaskForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const watchStartTime = watch("startTime");
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
          {...register("title", { required: "Title is required" })}
          placeholder="Enter Title"
          className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium">Task Type</label>
          <select
            {...register("taskType", { required: "Task type is required" })}
            className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
          >
            <option value="">Select a task type</option>
            <option value="Routine">Routine</option>
            <option value="Housekeeping">Housekeeping</option>
            <option value="Emergency">Emegerncy</option>
          </select>
          {errors.taskType && (
            <p className="text-red-500">{errors.taskType.message}</p>
          )}
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/3">
          <label className="block text-sm font-medium">Start Date</label>
          <input
            {...register("startDate", {
              required: "Start date is required",
              validate: (value) =>
                new Date(value) >= new Date().setHours(0, 0, 0, 0) ||
                "Start date must be current or future date",
            })}
            type="date"
            className="mt-1 block w-full rounded-md border-second_background shadow-sm  focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
          />
          {errors.startDate && (
            <p className="text-red-500">{errors.startDate.message}</p>
          )}
        </div>
        <div className="w-1/3">
          <label className="block text-sm font-medium">Start Time</label>
          <input
            {...register("startTime", { required: "Start time is required" })}
            type="time"
            className="mt-1 block w-full rounded-md border-second_background shadow-sm  focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
          />
          {errors.startTime && (
            <p className="text-red-500">{errors.startTime.message}</p>
          )}
        </div>

        <div className="w-1/3">
          <label className="block text-sm font-medium">End Date</label>
          <input
            {...register("endDate", {
              required: "End date is required",
              validate: {
                validDate: (value) =>
                  new Date(value) >= new Date().setHours(0, 0, 0, 0) ||
                  "End date must be current or future date",
                compare: (value) =>
                  new Date(value) >= new Date(getValues("endDate")) ||
                  "End date must be after start date",
              },
            })}
            type="date"
            className="mt-1 block w-full rounded-md border-second_background shadow-sm  focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
          />
          {errors.endDate && (
            <p className="text-red-500">{errors.endDate.message}</p>
          )}
        </div>

        <div className="w-1/3">
          <label className="block text-sm font-medium">End Time</label>
          <input
            {...register("endTime", {
              required: "End time is required",
              validate: (value) =>
                value > watchStartTime || "End time must be after start time",
            })}
            type="time"
            className="mt-1 block w-full rounded-md border-second_background shadow-sm  focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
          />
          {errors.endTime && (
            <p className="text-red-500">{errors.endTime.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Task Description</label>
        <textarea
          {...register("description", { required: "Description is required" })}
          className="mt-1 block w-full rounded-md border-second_background shadow-sm  focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium">Asset</label>
          <select
            {...register("assetId", { required: "Asset is required" })}
            className="mt-1 block w-full rounded-md border-second_background shadow-sm  focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
          >
            <option value="">Select an asset</option>
            <option value="option1">Option 01</option>
            <option value="option2">Option 02</option>
            <option value="option3">Option 03</option>
          </select>
          {errors.assetId && (
            <p className="text-red-500">{errors.assetId.message}</p>
          )}
        </div>

        <div className="w-1/2">
          <label className="block text-sm font-medium">Location</label>
          <select
            {...register("roomId", { required: "Location is required" })}
            className="mt-1 block w-full rounded-md border-second_background shadow-sm  focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
          >
            <option value="">Select a location</option>
            <option value="661bacca9703fb156fd972db">Location 1</option>
            <option value="661bacca9703fb156fd972db">Location 2</option>
            <option value="661bacca9703fb156fd972db">Location 3</option>
            {/* Add more options as needed */}
          </select>
          {errors.roomId && (
            <p className="text-red-500">{errors.roomId.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Assignee</label>
        <select
          {...register("userId", { required: "Assignee is required" })}
          className="mt-1 block w-full rounded-md border-second_background shadow-sm  focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
        >
          <option value="">Select an assignee</option>
          <option value="66244ddc6fc5b531cea5b6ca">Option 01</option>
          <option value="66244ddc6fc5b531cea5b6ca">Option 02</option>
          <option value="66244ddc6fc5b531cea5b6ca">Option 03</option>
        </select>
        {errors.userId && (
          <p className="text-red-500">{errors.userId.message}</p>
        )}
      </div>

      <Button>Create Task</Button>
    </form>
  );
}

export default CreateTaskForm;
