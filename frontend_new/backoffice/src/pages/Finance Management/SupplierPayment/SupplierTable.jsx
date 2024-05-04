import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";
import axios from "axios";
import Modal from "react-modal";

function SupplierPaymentTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [supplierData, setSupplierData] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSupplierData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "http://localhost:5000/supplier-payments"
        );
        setSupplierData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSupplierData();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      </>
    );
  }

  const handleEdit = (supplier) => {
    setSelectedSupplier(supplier);
    setIsModalOpen(true);
  };

  const handleDelete = async (supplier) => {
    console.log(supplier._id);
    try {
      const response = await axios.delete(
        `http://localhost:5000/supplier-payments/${supplier._id}`
      );
      if (response.status === 200) {
        window.location.reload();
      } else {
        console.log("Failed to delete", response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setSelectedSupplier({
      ...selectedSupplier,
      [event.target.name]: event.target.value,
    });
  };

  const handlesave = async (event) => {
    event.preventDefault();
    console.log(selectedSupplier._id);
    try {
      const response = await axios.put(
        `http://localhost:5000/supplier-payments/${selectedSupplier._id}`,
        selectedSupplier
      );
      if (response.status === 200) {
        window.location.reload();
      } else {
        console.log("Failed to update", response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const filteredSupplierPayments = supplierData.filter(
    (supplierPayment) =>
      supplierPayment.supplierId
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      supplierPayment.PaymentId.toLowerCase().includes(
        searchQuery.toLowerCase()
      ) ||
      supplierPayment.supplierName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      supplierPayment.quality.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Supplier Payment</h1>
      <hr className="border-t border-second_background mt-2 mb-12" />
      <div className="text-end mb-4 mr-10 br-5 rounded ">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded-full ml-2 pl-3 border-second_background "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-t border-second_background">
            <th className="py-4 px-6 bg-second_background">Payment Id</th>
            <th className="py-4 px-6 bg-second_background">Supplier Id</th>
            <th className="py-4 px-6 bg-second_background">Supplier Name</th>
            <th className="py-4 px-6 bg-second_background">Contact NO</th>
            <th className="py-4 px-6 bg-second_background">Date</th>
            <th className="py-4 px-6 bg-second_background">Amount</th>
            <th className="py-4 px-6 bg-second_background">Description</th>
            <th className="py-4 px-6 bg-second_background">Quality</th>
            <th className="py-4 px-6 bg-second_background">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSupplierPayments.map((supplier) => (
            <tr
              key={supplier._id}
              className="bg-gray-200 border-b border-second_background"
            >
              <td className="py-4 px-6">{supplier.PaymentId}</td>
              <td className="py-4 px-6">{supplier.supplierId}</td>
              <td className="py-4 px-6">{supplier.supplierName}</td>
              <td className="py-4 px-6">{supplier.contactNumber}</td>
              <td className="py-4 px-6">{supplier.paymentDate}</td>
              <td className="py-4 px-6">{supplier.paymentAmount}</td>
              <td className="py-4 px-6">{supplier.description}</td>
              <td className="py-4 px-6">{supplier.quality}</td>
              <td className="py-4 px-6">
                <Button onClick={() => handleEdit(supplier)}>Edit</Button>
                <Button onClick={() => handleDelete(supplier)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className="border-t border-second_background mt-12 mb-12" />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
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
        {selectedSupplier && (
          <form onSubmit={handlesave}>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold text-primary">
                Edit Supplier Payment
              </h1>
              <button onClick={() => setIsModalOpen(false)}>X</button>
            </div>
            <hr className="border-t border-second_background mt-2 mb-6" />
            <div className="mb-4">
              <label
                htmlFor="PaymentId"
                className="block text-sm font-medium text-gray-700"
              >
                Payment Id
              </label>
              <input
                type="text"
                name="PaymentId"
                id="PaymentId"
                value={selectedSupplier.PaymentId}
                onChange={handleChange}
                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="supplierId"
                className="block text-sm font-medium text-gray-700"
              >
                Supplier Id
              </label>
              <input
                type="text"
                name="supplierId"
                id="supplierId"
                value={selectedSupplier.supplierId}
                onChange={handleChange}
                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="supplierName"
                className="block text-sm font-medium text-gray-700"
              >
                Supplier Name
              </label>
              <input
                type="text"
                name="supplierName"
                id="supplierName"
                value={selectedSupplier.supplierName}
                onChange={handleChange}
                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contactNo"
                className="block text-sm font-medium text-gray-700"
              >
                Contact No
              </label>
              <input
                type="text"
                name="contactNumber"
                id="contactNo"
                value={selectedSupplier.contactNumber}
                onChange={handleChange}
                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                name="paymentDate"
                id="date"
                value={selectedSupplier.paymentDate}
                onChange={handleChange}
                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
              </label>
              <input
                type="text"
                name="paymentAmount"
                id="paymentAmount"
                value={selectedSupplier.paymentAmount}
                onChange={handleChange}
                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                value={selectedSupplier.description}
                onChange={handleChange}
                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="quality"
                className="block text-sm font-medium text-gray-700"
              >
                Quality
              </label>
              <select
                name="quality"
                id="quality"
                value={selectedSupplier.quality}
                onChange={handleChange}
                className="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
                <option value="">-Select-</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit">Save</Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}

export default SupplierPaymentTable;
