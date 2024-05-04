import React, { useState } from 'react';
import axios from 'axios';

function GuestLogin() {
  const [formData, setFormData] = useState({
    passportid: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    passportid: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear the corresponding error message when the user starts typing
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const register = () => {
    window.location.href = '/guestregister';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate form fields
    let valid = true;
    const newErrors = {};
    if (formData.passportid.trim() === '') {
      newErrors.passportid = 'Passport ID/NIC is required';
      valid = false;
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
      valid = false;
    }
    if (valid) {
      try {
        // Call the backend API to authenticate
        const response = await axios.post('http://localhost:5000/guest/login', {
          passportid: formData.passportid,
          password: formData.password
        });
        if (response && response.data) {
          // Assuming your backend returns user data upon successful login
          const { username, userId, passportid } = response.data;
          // Store user data in localStorage
          localStorage.setItem('username', username);
          localStorage.setItem('userId', userId);
          localStorage.setItem('passportid', passportid);
          // Redirect user to dashboard or another page
          window.location.href = '/guestprofile/';
        } else {
          throw new Error('Invalid response from server');
        }
      } catch (error) {
        // Handle authentication error
        console.error('Authentication Error:', error.response?.data?.message || error.message);
        // Update errors state with error message
        setErrors({ ...newErrors, login: error.response?.data?.message || error.message });
      }
    } else {
      // Update errors state with new error messages
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full px-6">
        <div className="bg-white shadow-md rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6">Guest Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passportid">
                Passport ID/NIC
              </label>
              <input
                id="passportid"
                type="text"
                name="passportid"
                value={formData.passportid}
                onChange={handleInputChange}
                className={`form-input mt-1 block w-full border-gray-300 rounded-md ${errors.passportid && 'border-red-500'}`}
                placeholder="Enter Here"
              />
              {errors.passportid && <p className="text-red-500 text-xs mt-1">{errors.passportid}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`form-input mt-1 block w-full border-gray-300 rounded-md ${errors.password && 'border-red-500'}`}
                placeholder="Enter Here"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div className="flex justify-between">
              <div className="mb-6 mr-2 w-1/2">
                <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md">
                  Submit
                </button>
              </div>
              <div className="mb-6 ml-2 w-1/2">
                <button onClick={register} className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md">
                  Register
                </button>
              </div>
            </div>
          </form>
          {errors.login && <p className="text-red-500 text-xs mt-1">{errors.login}</p>}
          <p className="text-gray-700 text-right">
            Forgot <a href="#" className="text-blue-500">password?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default GuestLogin;
