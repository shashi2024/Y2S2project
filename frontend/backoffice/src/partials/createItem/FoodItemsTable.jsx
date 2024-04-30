import React, { useState } from "react";
import Button from "../../components/Button";
import Modal from "react-modal";

function FoodItemsTable() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleChange = (event) => {
    setSelectedItem({
      ...selectedItem,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = (event) => {
    event.preventDefault();
    // Save the changes here
    setModalOpen(false);
  };

  const foodItems = [
    {
      id: 1,
      code: "67346469149343983",
      name: "Milk Coffee",
      category: "Category 1",
      subCategory: "Coffee",
      price: "$10.00",
    },
    {
      id: 2,
      code: "67346469149343983",
      name: "Milk Coffee",
      category: "Category 1",
      subCategory: "Coffee",
      price: "$10.00",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Manage Food Items</h1>
      <hr className="border-t border-second_background mt-2 mb-12" />
      <table className="w-full text-left border-collapse">
        {/* ... */}
        <tbody>
          {foodItems.map((item) => (
            <tr key={item.id} className="border-t border-second_background">
              <td className="py-4 px-6">{item.code}</td>
              <td className="py-4 px-6">{item.name}</td>
              <td className="py-4 px-6">{item.category}</td>
              <td className="py-4 px-6">{item.subCategory}</td>
              <td className="py-4 px-6">{item.price}</td>
              <td className="py-4 px-6">
                <Button onClick={() => handleEdit(item)}>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
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
        {selectedItem && (
          <form onSubmit={handleSave}>
            <h1 className="text-2xl font-bold text-black">Edit Food Items</h1>
            <hr className="border-t border-white mt-3 mb-6" />
            <div className="p-3">
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                name="name"
                value={selectedItem.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div className="p-3">
              <label className="block text-sm font-medium">Category:</label>
              <input
                type="text"
                name="category"
                value={selectedItem.category}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div className="p-3">
              <label className="block text-sm font-medium">Sub Category:</label>
              <input
                type="text"
                name="subCategory"
                value={selectedItem.subCategory}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div className="p-3">
              <label className="block text-sm font-medium">Price:</label>
              <input
                type="text"
                name="price"
                value={selectedItem.price}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit" className="p-6">
                Save
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}

export default FoodItemsTable;
