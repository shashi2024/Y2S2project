import React, { useEffect, useState } from 'react';

const CampList = () => {
  const [campData, setCampData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCampData = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:3000/api/campaigns/getAllCampaign');
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to fetch data');
      }
      setCampData(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampData();
  }, []); // Empty dependency array to run only once on component mount

  const deleteCamp = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/campaigns/deleteCampaign/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete campaign');
      }
      setCampData((prevData) => prevData.filter((camp) => camp._id !== id));
    } catch (error) {
      console.error(error);
    }
  }
  

  return ( 
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Campaign List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data.</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-end">
        {campData.map((camp, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-bold mb-2">{camp.campName}</h3>
            <p><span className="font-semibold">Budget:</span> {camp.budget}</p>
              
                <p><span className="font-semibold">Start Date:</span> {camp.startDate}</p>
                <p><span className="font-semibold">End Date:</span> {camp.endDate}</p>
              
         
            <p><span className="font-semibold">Platform:</span> {camp.platform}</p>
            <p><span className="font-semibold">Description:</span> {camp.description}</p>
            <p><span className="font-semibold">Tasks:</span> {camp.tasks} </p>  
            <div className="flex justify-end mt-2">
            <button onClick={() => { window.location.href = `/updatecamp/${camp._id}`; }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>

              <button onClick={() => deleteCamp(camp._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampList;
