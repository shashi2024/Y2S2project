import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";
import axios from "axios";
import Modal from "react-modal";

const UtilityPaymentTable = () => {
  const [utilityPaymentData, setUtilityPaymentData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUtilityPayment, setSelectedUtilityPayment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUtilityPaymentData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/utility-payments"
        );
        setUtilityPaymentData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUtilityPaymentData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-primary">Utility Payment</h1>
        <hr className="border-t border-second_background mt-2 mb-12" />
        <p>Loading...</p>
      </div>
    );
  }

  const handleEdit = (utilityPayment) => {
    setSelectedUtilityPayment(utilityPayment);
    setModalIsOpen(true);
  };

  const handleDelete = async (utilityPayment) => {
    console.log(utilityPayment._id);
    try {
      const response = await axios.delete(
        `http://localhost:5000/utility-payments/${utilityPayment._id}`
      );

      if (response.status === 200) {
        window.location.reload();
      } else {
        console.log("Failed to delete utility payment", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setSelectedUtilityPayment({
      ...selectedUtilityPayment,
      [event.target.name]: event.target.value,
    });
  };

  const handlesave = async (event) => {
    event.preventDefault();
    console.log(selectedUtilityPayment._id);
    try {
      const response = await axios.put(
        `http://localhost:5000/utility-payments/${selectedUtilityPayment._id}`,
        selectedUtilityPayment
      );

      if (response.status === 200) {
        window.location.reload();
      } else {
        console.log("Failed to update utility payment", response);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Utility Payment</h1>
      <hr className="border-t border-second_background mt-2 mb-12" />
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-t border-second_background">
            <th className="py-4 px-6 bg-second_background">Payment Id</th>
            <th className="py-4 px-6 bg-second_background">Utility Type</th>
            <th className="py-4 px-6 bg-second_background">Payment Date</th>
            <th className="py-4 px-6 bg-second_background">Payment Amount</th>
            <th className="py-4 px-6 bg-second_background">Description</th>
            <th className="py-4 px-6 bg-second_background">Actions</th>
          </tr>
        </thead>
        <tbody>
          {utilityPaymentData.map((utilityPayment) => (
            <tr key={utilityPayment._id} className="bg-white border-t">
              <td className="py-4 px-6 border">{utilityPayment.PaymentId}</td>
              <td className="py-4 px-6 border">{utilityPayment.utilityType}</td>
              <td className="py-4 px-6 border">{utilityPayment.paymentDate}</td>
              <td className="py-4 px-6 border">
                {utilityPayment.paymentAmount}
              </td>
              <td className="py-4 px-6 border">{utilityPayment.description}</td>
              <td className="py-4 px-6 border">
                <Button onClick={() => handleEdit(utilityPayment)}>Edit</Button>
                <Button onClick={() => handleDelete(utilityPayment)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className="border-t border-second_background mt-12 mb-12" />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
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
        {selectedUtilityPayment && (
          <form onSubmit={handlesave}>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Edit Utility Payment</h1>
              <button onClick={() => setModalIsOpen(false)}>X</button>
            </div>
            <hr className="border-t border-second_background mt-2 mb-6" />

            <div>
              <label className="block text-sm font-medium">
                Utility Payment ID
              </label>
              <input
                type="text"
                name="PaymentId"
                value={selectedUtilityPayment.PaymentId}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Utility Type</label>
              <select
                type="text"
                name="utilityType"
                value={selectedUtilityPayment.utilityType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              >
                <option value="">-Select-</option>
                <option value="Electricity">Electricity</option>
                <option value="Water">Water</option>
                <option value="Gas">Gas</option>
                <option value="Internet">Internet</option>
                <option value="Telephone">Telephone</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Payment Date</label>
              <input
                type="date"
                name="paymentDate"
                value={selectedUtilityPayment.paymentDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Amount</label>
              <input
                type="text"
                name="paymentAmount"
                value={selectedUtilityPayment.paymentAmount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Description</label>
              <input
                type="text"
                name="description"
                value={selectedUtilityPayment.description}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit">Save</Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default UtilityPaymentTable;
