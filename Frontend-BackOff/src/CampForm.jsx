import React, { useState } from 'react';
import axios from 'axios';

function CampForm() {
  const [campData, setCampData] = useState({
    campName: "",
    budget: "",
    duration: {
      startDate: null, // Change from empty string to null
      endDate: null, // Change from empty string to null
    },
    description: "",
    platform: "",
    tasks: []
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampData({
      ...campData,
      [name]: value,
    });
  };

  const handleTaskChange = (index, value) => {
    const updatedTasks = [...campData.tasks];
    updatedTasks[index] = value;
    setCampData({
      ...campData,
      tasks: updatedTasks,
    });
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...campData.tasks];
    updatedTasks.splice(index, 1);
    setCampData({
      ...campData,
      tasks: updatedTasks,
    });
  };

  const handleAddTask = () => {
    setCampData({
      ...campData,
      tasks: [...campData.tasks, ""],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/campaigns/createCampaign", campData).then(() => {
      setCampData({
        campName: "",
        budget: "",
        duration: {
          startDate: "",
          endDate: ""
        },
        description: "",
        platform: "",
        tasks: []
      })
    })
  };

  return (
    <div className="max-w-lg mx-auto p-12 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">New Marketing Campaign</h2><br />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="campName"
            placeholder="Marketing Campaign Name"
            className="form-input w-full border-pink-500 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
            value={campData.campName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="budget"
            placeholder="Allocated Budget (Ex: 40000 LKR)"
            className="form-input w-full border-pink-500 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
            value={campData.budget}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <div className="flex items-center space-x-4">
            <input
              type="date"
              name="startDate"
              placeholder="Start Date"
              className="form-input border-pink-500 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
              value={campData.startDate}
              onChange={handleChange}
              required
            />
            <span className="text-gray-500">to</span>
            <input
              type="date"
              name="endDate"
              placeholder="End Date"
              className="form-input border-pink-500 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
              value={campData.endDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="block text-gray-700 font-semibold mb-2">Choose Platform</div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="tiktok"
                name="platform"
                value="TikTok"
                checked={campData.platform === "TikTok"}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <label htmlFor="tiktok">
                <img src="https://pngimg.com/uploads/tiktok/tiktok_PNG3.png" alt="TikTok" className="w-10 h-10 cursor-pointer" />
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="facebook"
                name="platform"
                value="Facebook"
                checked={campData.platform === "Facebook"}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <label htmlFor="facebook">
                <img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19750.png" alt="Facebook" className="w-10 h-10 cursor-pointer" />
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="google"
                name="platform"
                value="Google"
                checked={campData.platform === "Google"}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <label htmlFor="google">
                <img src="https://pngimg.com/uploads/google/google_PNG19630.png" alt="Google" className="w-10 h-10 cursor-pointer" />
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Add Description"
            name="description"
            className="form-textarea w-full border-pink-500 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
            value={campData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <textarea
            placeholder="tasks"
            name="tasks"
            className="form-textarea w-full border-pink-500 rounded-md shadow-sm focus:border-pink-500 focus:ring-pink-500"
            value={campData.tasks}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-pink-500 text-white rounded-lg text-lg font-semibold hover:bg-pink-600 focus:outline-none focus:bg-pink-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CampForm;
