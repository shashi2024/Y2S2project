import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import axios from "axios";

function FoodItemsTable() {
  const [foodItems, setFoodItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchedFoodItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/food-item/");
        setFoodItems(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchedFoodItems();
  }, []);

  if (isLoading) {
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
    </div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Manage Food Items</h1>
      <hr className="border-t border-second_background mt-2 mb-12" />
      <table className="w-full text-left border-collapse">
        <thead className="border-t border-second_background">
          <tr className="bg-second_background">
            <th className="py-4 px-6">Item Code</th>
            <th className="py-4 px-6">Name</th>
            <th className="py-4 px-6">Category</th>
            <th className="py-4 px-6">Sub Category</th>
            <th className="py-4 px-6">Price</th>
            <th className="py-4 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((item) => (
            <tr key={item.id} className="border-t border-second_background">
              <td className="py-4 px-6">{item.itemCode}</td>
              <td className="py-4 px-6">{item.name}</td>
              <td className="py-4 px-6">{item.mainCategory}</td>
              <td className="py-4 px-6">{item.subCategory}</td>
              <td className="py-4 px-6">{item.price}</td>
              <td className="py-4 px-6">
                <Button>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FoodItemsTable;
