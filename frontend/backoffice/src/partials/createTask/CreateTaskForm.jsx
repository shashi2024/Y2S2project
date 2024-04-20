import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';

function CreateTaskForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h1 className="text-2xl font-bold">Create Task</h1>
      <hr className="border-t border-second_background mt-2 mb-12"/>

      <div>
        <label className="block text-sm font-medium">Task title</label>
        <input {...register("title")} placeholder="Enter Title" className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5" />
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium">Task Type</label>
          <select {...register("type")} className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5">
            <option value="option1">Option 01</option>
            <option value="option2">Option 02</option>
            <option value="option3">Option 03</option>
          </select>
        </div>

        <div className="w-1/2">
          <label className="block text-sm font-medium">Task Duration</label>
          <input {...register("duration")} placeholder="Duration" className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5" />
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="w-1/3">
          <label className="block text-sm font-medium">Date</label>
          <input {...register("date")} type="date" className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5" />
        </div>

        <div className="w-1/3">
          <label className="block text-sm font-medium">Start Time</label>
          <input {...register("startTime")} type="time" className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5" />
        </div>

        <div className="w-1/3">
          <label className="block text-sm font-medium">End Time</label>
          <input {...register("endTime")} type="time" className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Task Description</label>
        <textarea {...register("description")} className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5" />
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium">Asset</label>
          <select {...register("asset")} className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5">
            <option value="option1">Option 01</option>
            <option value="option2">Option 02</option>
            <option value="option3">Option 03</option>
          </select>
        </div>

        <div className="w-1/2">
          <label className="block text-sm font-medium">Location</label>
          <input {...register("location")} placeholder="Location" className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-color focus:ring focus:ring-button_color focus:ring-opacity-5" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Assignee</label>
        <select {...register("assignee")} className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5">
          <option value="option1">Option 01</option>
          <option value="option2">Option 02</option>
          <option value="option3">Option 03</option>
        </select>
      </div>

      <Button>Create Task</Button>
    </form>
  );
}

export default CreateTaskForm;