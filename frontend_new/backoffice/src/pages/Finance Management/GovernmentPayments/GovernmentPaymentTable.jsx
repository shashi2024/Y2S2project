import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";
import axios from "axios";
import Modal from "react-modal";

const GovernmentPaymentTable = () => {
  const [governmentPaymentData, setGovernmentPaymentData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedGovernmentPayment, setSelectedGovernmentPayment] =
    useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGovernmentPaymentData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/government-payments"
        );
        setGovernmentPaymentData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGovernmentPaymentData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-primary">Government Payment</h1>
        <hr className="border-t border-second_background mt-2 mb-12" />
        <p>Loading...</p>
      </div>
    );
  }

  const handleEdit = (governmentPayment) => {
    setSelectedGovernmentPayment(governmentPayment);
    setModalIsOpen(true);
  };

  const handleChange = (event) => {
    setSelectedGovernmentPayment({
      ...selectedGovernmentPayment,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = async (governmentPayment) => {
    console.log(governmentPayment._id);
    try {
      const response = await axios.delete(
        `http://localhost:5000/government-payments/${governmentPayment._id}`
      );

      if (response.status === 200) {
        window.location.reload();
      } else {
        console.log("Failed to delete government payment", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlesave = async (event) => {
    event.preventDefault();
    console.log(selectedGovernmentPayment._id);
    try {
      const response = await axios.put(
        `http://localhost:5000/government-payments/${selectedGovernmentPayment._id}`,
        selectedGovernmentPayment
      );

      if (response.status === 200) {
        window.location.reload();
      } else {
        console.log("Failed to update government payment", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Government Payment</h1>
      <hr className="border-t border-second_background mt-2 mb-12" />
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-t border-second_background">
            <th className="py-4 px-6 bg-second_background">Payment Id</th>
            <th className="py-4 px-6 bg-second_background">Payment Type</th>
            <th className="py-4 px-6 bg-second_background">Payment Date</th>
            <th className="py-4 px-6 bg-second_background">Payment Amount</th>
            <th className="py-4 px-6 bg-second_background">Actions</th>
          </tr>
        </thead>
        <tbody>
          {governmentPaymentData.map((governmentPayment) => (
            <tr key={governmentPayment._id} className="bg-white border-t">
              <td className="py-4 px-6 border">
                {governmentPayment.PaymentId}
              </td>
              <td className="py-4 px-6 border">
                {governmentPayment.paymentType}
              </td>
              <td className="py-4 px-6 border">
                {governmentPayment.paymentDate}
              </td>
              <td className="py-4 px-6 border">
                {governmentPayment.paymentAmount}
              </td>
              <td className="py-4 px-6 border">
                <Button onClick={() => handleEdit(governmentPayment)}>
                  Edit
                </Button>
                <Button onClick={() => handleDelete(governmentPayment)}>
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
        {selectedGovernmentPayment && (
          <form onSubmit={handlesave}>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Edit Government Payment</h1>
              <button onClick={() => setModalIsOpen(false)}>X</button>
            </div>
            <hr className="border-t border-second_background mt-2 mb-6" />

            <div>
              <label className="block text-sm font-medium">Payment ID</label>
              <input
                type="text"
                name="PaymentId"
                value={selectedGovernmentPayment.PaymentId}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Payment Type</label>
              <select
                name="paymentType"
                value={selectedGovernmentPayment.paymentType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              >
                <option value="">-Select-</option>
                <option value="Income Tax">Income Tax</option>
                <option value="VAT">VAT</option>
                <option value="Property Tax">Property Tax</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Payment Date</label>
              <input
                type="date"
                name="paymentDate"
                value={selectedGovernmentPayment.paymentDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Amount</label>
              <input
                type="number"
                name="paymentAmount"
                value={selectedGovernmentPayment.paymentAmount}
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

export default GovernmentPaymentTable;
