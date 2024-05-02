import { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import axios from "axios";
import SearchBar from "../components/SearchBar";

const CreateOrder = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [customer, setCustomer] = useState("");
  const [discount, setDiscount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [foodItems, setFoodItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onSubmit = async (event) => {
    event.preventDefault();
    const orderData = {
      items: Object.entries(selectedItems).map(([foodItemID, quantity]) => ({
        foodItemID,
        quantity,
      })),
      discount,
      totalAmount,
      discountedAmount: calculateDiscountedAmount(),
      customerID: customer,
    };

    try {
      console.log(orderData);
      const response = await axios.post(
        "http://localhost:5000/order/",
        orderData
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

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

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/order/");
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (isLoading) {
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
    </div>;
  }

  const calculateDiscountedAmount = () => {
    return totalAmount - discount;
  };

  //   const products = [
  //     { id: "1", name: "Product 1", image: "url-to-image-1", price: 100 },
  //     { id: "2", name: "Product 2", image: "url-to-image-2", price: 89 },
  //     { id: "3", name: "Product 3", image: "url-to-image-3", price: 79 },
  //     { id: "4", name: "Product 4", image: "url-to-image-3", price: 69 },
  //   ];

  const handleSelect = (productId) => {
    setSelectedItems({
      ...selectedItems,
      [productId]: (selectedItems[productId] || 0) + 1,
    });
  };

  const handleDeselect = (productId) => {
    setSelectedItems({
      ...selectedItems,
      [productId]: Math.max((selectedItems[productId] || 0) - 1, 0),
    });
  };

  const calculateTotal = () => {
    return Object.entries(selectedItems).reduce((total, [item, quantity]) => {
      return (
        total +
        foodItems.find((product) => product._id === item).price * quantity
      );
    }, 0);
  };

  useEffect(() => {
    setTotalAmount(calculateTotal());
  }, [selectedItems]);

  const handleCreateOrder = (event) => {
    event.preventDefault();

    const newOrder = {
      id: Date.now(), // replace with your own function to generate order ID
      customerName: customer,
      orderStatus: "New",
      paymentStatus: "Pending",
      totalAmount: calculateDiscountedAmount(),
    };

    setOrders(prevOrders => [...prevOrders, newOrder]);
  };

  const handleFulfillOrder = (orderId) => {
    try {
      const response = axios.put(`http://localhost:5000/order/${orderId}`, {
        orderStatus: "Fulfilled",
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  const handleCancelOrder = (orderId) => {
    try {
      const response = axios.put(`http://localhost:5000/order/${orderId}`, {
        orderStatus: "Cancelled",
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const genReport = async () => {
    try {
      const response = await axios.get("http://localhost:5000/report/orders", { responseType: 'arraybuffer' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;

      // Extract filename from the 'Content-Disposition' header
      const contentDisposition = response.headers['content-disposition'] || response.headers['Content-Disposition'];
      let filename = 'file.xlsx'; // Default filename in case extraction fails
      console.log(contentDisposition)
      if (contentDisposition) {
        const regex = /filename="([^"]*)"/;
        const match = contentDisposition.match(regex);
        filename = match ? match[1] : filename;
      }

      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    }
}

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-background">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                <h1 className="text-slate-800 font-bold text-3xl">
                  Add Products
                </h1>

                <div className="flex justify-between items-start">
                  <div className="flex-grow pr-4">
                    <div
                      className="grid grid-cols-4 gap-4"
                      style={{ maxHeight: "500px" }}
                    >
                      {foodItems.map((product) => (
                        <ProductCard
                          key={product._id}
                          product={product}
                          onSelect={() => handleSelect(product._id)}
                          onDeselect={() => handleDeselect(product._id)}
                        />
                      ))}
                    </div>
                  </div>

                  <div
                    className="bg-second_background p-4 rounded-md shadow-sm"
                    style={{
                      width: "200px",
                      height: "300px",
                      overflow: "auto",
                    }}
                  >
                    <h2 className="font-medium text-gray-700">
                      Selected Items
                    </h2>
                    <ul>
                      {Object.entries(selectedItems).map(([item, quantity]) => (
                        <li key={item}>
                          {
                            foodItems.find((product) => product._id === item)
                              ?.name
                          }
                          : <span className="font-bold">{quantity}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4">
                      Total:{" "}
                      <span className="font-bold">
                        ${calculateTotal().toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-background">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                <form onSubmit={onSubmit}>
                  <h1 className="text-slate-800 font-bold text-3xl">
                    Create Order
                  </h1>

                  <label className="block mt-4">
                    <span className="text-gray-700">Customer</span>
                    <select
                      className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
                      value={customer}
                      onChange={(e) => setCustomer(e.target.value)}
                    >
                      <option value="">Select a customer</option>
                      <option value="66243dbdaae02f29f1e63e85">
                        Customer 01
                      </option>
                      <option value="66243ffee696fab10e4d82d8">
                        Customer 02
                      </option>
                    </select>
                  </label>

                  <label className="block mt-4">
                    <span className="text-gray-700">Discount</span>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
                      placeholder="Enter discount"
                      value={discount}
                      onChange={(e) => setDiscount(Number(e.target.value))}
                    />
                  </label>

                  <label className="block mt-4">
                    <span className="text-gray-700">Discounted Amount</span>
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5 mb-4"
                      value={calculateDiscountedAmount()}
                      readOnly
                    />
                  </label>

                  <Button>Create Order</Button>
                </form>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-background">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                <h1 className="text-slate-800 font-bold text-3xl">
                  Order List
                </h1>
                <SearchBar alignment="left" />
                <hr className="border-t border-second_background mt-2 mb-12" />
                <table className="w-full text-left border-collapse">
                  <thead className="border-t border-second_background">
                    <tr className="bg-second_background">
                      <th className="py-4 px-6">Order ID</th>
                      <th className="py-4 px-6">Customer Name</th>
                      <th className="py-4 px-6">Order Status</th>
                      <th className="py-4 px-6">Payment Status</th>
                      <th className="py-4 px-6">Total Amount</th>
                      <th className="py-4 px-6">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-t border-second_background">
                        <td className="py-4 px-6">{order.orderNumber}</td>
                        <td className="py-4 px-6">{order.customerID?.name}</td>
                        <td className="py-4 px-6">{order.orderStatus}</td>
                        <td className="py-4 px-6">{order.paymentStatus}</td>
                        <td className="py-4 px-6">${order.totalAmount.toFixed(2)}</td>
                        <td className="py-4 px-6">
                          <div className="flex space-x-4">
                          <Button onClick={() => handleFulfillOrder(order._id)}>Full Fill</Button>
                          <Button onClick={() => handleCancelOrder(order._id)}>Cancel</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <hr className="border-t border-second_background mt-2 mb-12"/>
                <Button onClick={() => genReport()} className="mt-3 mb-2">Generate Report</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateOrder;
