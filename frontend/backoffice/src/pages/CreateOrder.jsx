import { useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import ProductCard from "../components/ProductCard";

const CreateOrder = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});

  // Replace with your actual products
  const products = [
    { id: "1", name: "Product 1", image: "url-to-image-1", price: 99.99 },
    { id: "2", name: "Product 2", image: "url-to-image-2", price: 89.99 },
    { id: "3", name: "Product 3", image: "url-to-image-3", price: 79.99 },
    { id: "1", name: "Product 1", image: "url-to-image-1", price: 99.99 },
    { id: "2", name: "Product 2", image: "url-to-image-2", price: 89.99 },
    { id: "3", name: "Product 3", image: "url-to-image-3", price: 79.99 },
    // ...
  ];

  const handleSelect = (productId) => {
    setSelectedItems({
      ...selectedItems,
      [productId]: (selectedItems[productId] || 0) + 1,
    });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <h1 className="text-slate-800 font-bold text-3xl">Create Order</h1>

            <div className="flex">
              {/* Product list */}
              <div className="flex-grow">
                <div
                  className="grid grid-cols-4 gap-4 overflow-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100"
                  style={{ maxHeight: "500px" }}
                >
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onSelect={() => handleSelect(product.id)}
                    />
                  ))}
                </div>
              </div>

              <div>
                {/* Selected items */}
                <div
                  className="bg-white p-4 rounded-md shadow-sm mb-4"
                  style={{ width: "300px", height: "300px", overflow: "auto" }}
                >
                  <h2 className="font-medium text-gray-700">Selected Items</h2>
                  <ul>
                    {Object.entries(selectedItems).map(([item, quantity]) => (
                      <li key={item}>
                        {products.find((product) => product.id === item).name}:{" "}
                        <span className="font-bold">{quantity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Order button container */}
                <div
                  className="bg-white p-4 rounded-md shadow-sm"
                  style={{ width: "300px", height: "100px" }}
                >
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create Order
                  </button>
                </div>
              </div>
            </div>

            {/* ... rest of your form */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateOrder;
