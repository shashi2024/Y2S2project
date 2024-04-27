import React, { useState, useEffect} from 'react';
import Button from '../../components/Button';
import axios from 'axios';
import Modal from 'react-modal';

function FoodItemsTable() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:5000/food-item');
        setFoodItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFoodItems();
  }, []);

  if(isLoading) {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      </>
    );
  }

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

  const handleSave = async (event) => {
    event.preventDefault();
    console.log(selectedItem._id)
    try {
      
      const response = await axios.put(`http://localhost:5000/food-item/${selectedItem._id}`, selectedItem);
      
      if (response.status === 200) {
        // Update the items in your state here if needed
        setModalOpen(false);
        window.location.reload();
      } else {
        console.error('Failed to update item:', response);
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  

  return (
    <div>
      <h1 className="text-2xl font-bold">Manage Food Items</h1>
      <hr className="border-t border-second_background mt-2 mb-12" />
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-t border-second_background">
            <th className="py-4 px-6 bg-second_background">Code</th>
            <th className="py-4 px-6 bg-second_background">Name</th>
            <th className="py-4 px-6 bg-second_background">Category</th>
            <th className="py-4 px-6 bg-second_background">Sub Category</th>
            <th className="py-4 px-6 bg-second_background">Price</th>
            <th className="py-4 px-6 bg-second_background">Actions</th>
          </tr>
        </thead>
        <tbody>
          {foodItems.map((item) => (
            <tr key={item.id} className="border-t border-second_background">
              <td className="py-4 px-6">{item.itemCode}</td>
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
            zIndex: 1000
          },
          content: {
            width: '50%', // 2/3 of the page
            margin: '0 auto', // center the form
            backgroundColor: '#FFD600',
          }
        }}
      >
        {selectedItem && (
          <form onSubmit={handleSave}>
            <h1 className="text-2xl font-bold text-black">Edit Food Items</h1>
            <hr className="border-t border-white mt-3 mb-6"/>
            <div className='p-3'>
              <label className="block text-sm font-medium">Name:</label>
              <input type="text" name="name" value={selectedItem.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"/>
            </div>
            <div className='p-3'>
            <label className="block text-sm font-medium">Category:</label>
            <select name="category" value={selectedItem.mainCategory} onChange={handleChange} className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5">
            <option value="Appetizers">Appetizers</option>
            <option value="Main Courses">Main Courses</option>
            <option value="Desserts">Desserts</option>
            <option value="Beverages">Beverages</option>
              // Add more options as needed
            </select>
          </div>
          <div className='p-3'>
            <label className="block text-sm font-medium">Sub Category:</label>
            <select name="subCategory" value={selectedItem.subCategory} onChange={handleChange} className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5">
              <option value="">Select a sub category</option>
              <option value="Vegi">Vegi</option>
            <option value="Non-Vegi">Non-Vegi</option>
            <option value="Cocktail">Cocktail</option>
            <option value="Mocktail">Mocktail</option>
            <option value="Tea">Tea</option>
            <option value="Coffee">Coffee</option>
            </select>
          </div>
            <div className='p-3'>
              <label className="block text-sm font-medium">Price:</label>
              <input type="text" name="price" value={selectedItem.price} onChange={handleChange} className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button type="submit" className='p-6'>Save</Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}

export default FoodItemsTable;
