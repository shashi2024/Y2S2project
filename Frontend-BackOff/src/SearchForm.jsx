import React, { useState } from 'react';
import axios from 'axios';

function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-11/12 md:max-w-4xl shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-0 right-0 text-2xl font-semibold bg-transparent text-gray-700 px-4 py-2 hover:text-gray-900">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

function SearchForm() {
  const [searchParams, setSearchParams] = useState({
    platform: "Any",
    budgetMin: "",
    budgetMax: ""
  });
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');  // Reset error message on input change
  };

  const validateAndSearch = () => {
    if (searchParams.budgetMin && searchParams.budgetMax && Number(searchParams.budgetMin) > Number(searchParams.budgetMax)) {
      setError('Minimum budget cannot be greater than maximum budget.');
      return;
    }
    setError('');
    axios.get("http://localhost:3000/api/campaigns/search", { params: searchParams })
      .then(response => {
        setResults(response.data);
        setModalOpen(true);  // Open modal on successful data fetch
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data.');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAndSearch();
  };

  return (
    <div className="max-w-lg mx-auto p-12 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Search Campaigns</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="platform" className="block text-gray-700 font-semibold mb-2">Platform:</label>
          <select id="platform" name="platform" value={searchParams.platform} onChange={handleChange} className="form-select w-full">
            <option value="Any">Any</option>
            <option value="TikTok">TikTok</option>
            <option value="Facebook">Facebook</option>
            <option value="Google">Google</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="budget" className="block text-gray-700 font-semibold mb-2">Budget Range:</label>
          <select id="budgetMin" name="budgetMin" onChange={handleChange} className="form-select w-full">
            <option value="">Any</option>
            <option value="0">0</option>
            <option value="1000">1,000</option>
            <option value="10000">10,000</option>
            <option value="100000">100,000</option>
          </select>
          <select id="budgetMax" name="budgetMax" onChange={handleChange} className="form-select w-full mt-2">
            <option value="">Any</option>
            <option value="999">999</option>
            <option value="9999">9,999</option>
            <option value="99999">99,999</option>
            <option value="1000000">1,000,000</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="px-6 py-3 bg-pink-500 text-white rounded-lg text-lg font-semibold hover:bg-pink-600 focus:outline-none focus:bg-pink-600">
            Search
          </button>
        </div>
      </form>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        {results.length === 0 ? (
          <div className="text-gray-600 text-lg font-semibold mt-6">No results found.</div>
        ) : (
          <div className="overflow-x-auto mt-6">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Campaign Name</th>
                  <th className="py-3 px-6 text-left">Platform</th>
                  <th className="py-3 px-6 text-left">Budget</th>
                  <th className="py-3 px-6 text-left">Start Date</th>
                  <th className="py-3 px-6 text-left">End Date</th>
                </tr>
              </thead>
              <tbody>
                {results.map((campaign, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">{campaign.campName}</td>
                    <td className="py-3 px-6 text-left">{campaign.platform}</td>
                    <td className="py-3 px-6 text-left">{campaign.budget}</td>
                    <td className="py-3 px-6 text-left">{campaign.startDate}</td>
                    <td className="py-3 px-6 text-left">{campaign.endDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default SearchForm;
