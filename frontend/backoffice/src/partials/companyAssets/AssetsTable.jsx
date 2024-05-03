import { useState, useEffect } from "react";
import Button from "../../components/Button";
import axios from "axios";
import SearchBar from "../../components/SearchBar";
import Modal from "react-modal";

function AssetsTable() {
  const [assets, setAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [newAsset, setNewAsset] = useState({
    assetNo: "",
    assetName: "",
    image: null,
    lastServiceDate: "",
    status: "",
    location: "",
  });

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:5000/asset");
        setAssets(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAssets();
  }, []);

  const handleCreateAsset = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(newAsset).forEach((key) => {
      formData.append(key, newAsset[key]);
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/asset",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // ...
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "image") {
      setNewAsset({ ...newAsset, image: event.target.files[0] });
    } else {
      setNewAsset({ ...newAsset, [event.target.name]: event.target.value });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Company Assets</h1>

      <SearchBar alignment="left" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => setModalOpen(true)}>Create Asset</Button>
      </div>
      <hr className="border-t border-second_background mt-2 mb-12" />
      <table className="w-full text-left border-collapse">
        <thead className="border-t border-second_background">
          <tr className="bg-second_background">
            <th className="py-4 px-6">Asset No</th>
            <th className="py-4 px-6">Asset Name</th>
            <th className="py-4 px-6">Image</th>
            <th className="py-4 px-6">Last Service Date</th>
            <th className="py-4 px-6">Status</th>
            <th className="py-4 px-6">Location</th>
            <th className="py-4 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr
              key={asset.assetNo}
              className="border-t border-second_background"
            >
              <td className="py-4 px-6">{asset.assetNo}</td>
              <td className="py-4 px-6">{asset.assetName}</td>
              <td className="py-4 px-6">
                <img
                  src={asset.image}
                  alt={asset.assetName}
                  onClick={() => window.open(asset.image, "_blank")}
                  style={{ cursor: "pointer" }}
                />
              </td>
              <td className="py-4 px-6">
                {new Date(asset.lastServiceDate).toLocaleDateString()}
              </td>
              <td className="py-4 px-6">{asset.status}</td>
              <td className="py-4 px-6">{asset.location}</td>
              <td className="py-4 px-6">
                <Button onClick={() => handleReport(asset.assetNo)}>
                  Report
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className="border-t border-second_background mt-2 mb-12" />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        title="Create Asset"
        onConfirm={handleCreateAsset}
        style={{
          overlay: {
            zIndex: 1000,
          },
          content: {
            width: "50%", // 2/3 of the page
            margin: "0 auto", // center the form
            backgroundColor: "#FFD600",
          },
        }}
      >
        <form onSubmit={handleCreateAsset}>
          <h1 className="text-2xl font-bold text-black">Create New Asset</h1>
          <hr className="border-t border-white mt-3 mb-6" />

          <div className="p-3">
            <label className="block text-sm font-medium">Asset No:</label>
            <input
              type="text"
              name="assetNo"
              value={newAsset.assetNo}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
            />
          </div>

          <div className="p-3">
            <label className="block text-sm font-medium">Asset Name:</label>
            <input
              type="text"
              name="assetName"
              value={newAsset.assetName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
            />
          </div>

          <div className="p-3">
            <label className="block text-sm font-medium">Image:</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
            />
          </div>

          <div className="p-3">
            <label className="block text-sm font-medium">
              Last Service Date:
            </label>
            <input
              type="date"
              name="lastServiceDate"
              value={newAsset.lastServiceDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
            />
          </div>

          <div className="p-3">
            <label className="block text-sm font-medium">Status:</label>
            <select
              name="status"
              value={newAsset.status}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
            >
              <option value="">Select status</option>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
              <option value="In Service">In Service</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="p-3">
            <label className="block text-sm font-medium">Location:</label>
            <select
              name="location"
              value={newAsset.location}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
            >
              <option value="">Select location</option>
              <option value="Location 1">Location 1</option>
              <option value="Location 2">Location 2</option>
              <option value="Location 3">Location 3</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit" className="p-3 px-14">
              Save
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AssetsTable;
