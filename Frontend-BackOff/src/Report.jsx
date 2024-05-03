import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const Report = () => {
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

  const generateReport = () => {
    const doc = new jsPDF();

    const columns = ['Campaign Name', 'Budget', 'Duration', 'Platform'];

    const rows = campData.map(camp => [
      camp.campName,
      camp.budget.toString(),
      camp.startDate && camp.endDate ? `${camp.startDate} - ${camp.endDate}` : 'Date not available',
      camp.platform,
    ]);

    doc.autoTable({
      head: [columns],
      body: rows,
    });

    doc.save('campaign_report.pdf');
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-2">
          <h1 className="text-3xl font-bold mb-4">Report</h1>
          <button onClick={generateReport} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Generate Report
          </button>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Campaign Name</th>
                <th className="text-left">Budget</th>
                <th className="text-left">Duration</th>
                <th className="text-left">Platform</th>
              </tr>
            </thead>
            <tbody>
              {campData.map((camp, index) => (
                <tr key={index}>
                  <td>{camp.campName}</td>
                  <td>{camp.budget}</td>
                  <td>
                    {camp.startDate && camp.endDate ? `${camp.startDate} - ${camp.endDate}` : 'Date not available'}
                  </td>
                  <td>{camp.platform}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
