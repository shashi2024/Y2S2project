import React, { useState } from 'react';

function GuestLogin() {
  const [formData, setFormData] = useState({
    passportId: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    passportId: '',
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form fields
    let valid = true;
    const newErrors = {};
    if (formData.passportId.trim() === '') {
      newErrors.passportId = 'Passport ID/NIC is required';
      valid = false;
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
      valid = false;
    }
    if (valid) {
      // Submit the form
      console.log('Form submitted:', formData);
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passportId">
                Passport ID/NIC
              </label>
              <input
                id="passportId"
                type="text"
                name="passportId"
                value={formData.passportId}
                onChange={handleInputChange}
                className={`form-input mt-1 block w-full border-gray-300 rounded-md ${errors.passportId && 'border-red-500'}`}
                placeholder="Enter Here"
              />
              {errors.passportId && <p className="text-red-500 text-xs mt-1">{errors.passportId}</p>}
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
            <div className="mb-6">
              <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md">
                Submit
              </button>
            </div>
          </form>
          <p className="text-gray-700 text-right">
            Forgot <a href="#" className="text-blue-500">password?</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default GuestLogin;
