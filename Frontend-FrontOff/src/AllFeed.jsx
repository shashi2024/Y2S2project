import React, { useEffect, useState } from 'react';

function AllFeed() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/feedback');
        if (!response.ok) throw new Error('Data fetch failed');
        const data = await response.json();
        setFeedbackList(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Customer Feedback</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {feedbackList.map((feedback, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Rating: {feedback.rating} / 5</div>
              <p className="text-gray-700 text-base">
                {feedback.feedback}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Submitted on: {new Date(feedback.createdAt).toLocaleDateString()} {new Date(feedback.createdAt).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllFeed;
