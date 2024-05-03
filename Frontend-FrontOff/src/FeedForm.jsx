import React, { useState } from 'react';

function FeedForm() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating, feedback }),
      });
      if (response.ok) {
        alert('Thanks for your Feedback'); // Popup message
        setRating(0); // Reset rating
        setFeedback(''); // Reset feedback
      } else {
        throw new Error('Feedback submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit feedback. Please try again.'); // Popup error message
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="rating" className="block text-gray-700 font-semibold mb-2">Overall Rating (1/5)</label>
          <select id="rating" name="rating" value={rating} onChange={handleRatingChange} className="block w-full border-gray-300 border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            <option value={0}>Select a rating</option>
            {[1, 2, 3, 4, 5].map(value => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="feedback" className="block text-gray-700 font-semibold mb-2">Overall Feedback</label>
          <textarea id="feedback" name="feedback" rows="4" className="form-textarea w-full border-gray-300 border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" value={feedback} onChange={handleFeedbackChange} placeholder="Enter your feedback here..." required></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="px-6 py-3 bg-yellow-500 text-white rounded-lg text-lg font-semibold hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FeedForm;
