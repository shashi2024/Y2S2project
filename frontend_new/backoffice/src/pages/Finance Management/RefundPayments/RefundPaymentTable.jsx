import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";
import axios from "axios";
import Modal from "react-modal";

const RefundPaymentTable = () => {
  const [refundPaymentData, setRefundPaymentData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRefundPayment, setSelectedRefundPayment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRefundPaymentData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/refund-payments"
        );
        setRefundPaymentData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRefundPaymentData();
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

  const handleEdit = (refundPayment) => {
    setSelectedRefundPayment(refundPayment);
    setModalIsOpen(true);
  };

  const handleDelete = async (refundPayment) => {
    console.log(refundPayment._id);
    try {
      const response = await axios.delete(
        `http://localhost:5000/refund-payments/${refundPayment._id}`
      );

      if (response.status === 200) {
        window.location.reload();
      } else {
        console.log("Failed to delete refund payment", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setSelectedRefundPayment({
      ...selectedRefundPayment,
      [event.target.name]: event.target.value,
    });
  };

  const handlesave = async (event) => {
    event.preventDefault();
    console.log(selectedRefundPayment._id);
    try {
      const response = await axios.put(
        `http://localhost:5000/refund-payments/${selectedRefundPayment._id}`,
        selectedRefundPayment
      );
      if (response.status === 200) {
        window.location.reload();
      } else {
        console.log("Failed to update refund payment", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Refund Payment</h1>
      <hr className="border-t border-second_background mt-2 mb-12" />
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-t border-second_background">
            <th className="py-4 px-6 bg-second_background">Request Id</th>
            <th className="py-4 px-6 bg-second_background">Refund Type</th>
            <th className="py-4 px-6 bg-second_background">Refund Amount</th>
            <th className="py-4 px-6 bg-second_background">Refund Date</th>
            <th className="py-4 px-6 bg-second_background">Payment Date</th>
            <th className="py-4 px-6 bg-second_background">Description</th>
            <th className="py-4 px-6 bg-second_background">Actions</th>
          </tr>
        </thead>
        <tbody>
          {refundPaymentData.map((refundPayment) => (
            <tr
              key={refundPayment._id}
              className="border-t border-second_background"
            >
              <td className="py-4 px-6">{refundPayment.refundRequestId}</td>
              <td className="py-4 px-6">{refundPayment.refundType}</td>
              <td className="py-4 px-6">{refundPayment.refundAmount}</td>
              <td className="py-4 px-6">{refundPayment.refundDate}</td>
              <td className="py-4 px-6">{refundPayment.paymentDate}</td>
              <td className="py-4 px-6">{refundPayment.description}</td>
              <td className="py-4 px-6">
                <Button
                  onClick={() => handleEdit(refundPayment)}
                  className="mr-2"
                >
                  Edit
                </Button>
                <Button onClick={() => handleDelete(refundPayment)}>
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
        {selectedRefundPayment && (
          <form onSubmit={handlesave}>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">
                Edit Refund Payment Details
              </h1>
              <button onClick={() => setModalIsOpen(false)}>X</button>
            </div>
            <hr className="border-t border-second_background mt-2 mb-6" />

            <div>
              <label htmlFor="refundRequestId">Request Id</label>
              <input
                type="text"
                name="refundRequestId"
                id="refundRequestId"
                value={selectedRefundPayment.refundRequestId}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>

            <div>
              <label htmlFor="refundType">Refund Type</label>
              <input
                type="text"
                name="refundType"
                id="refundType"
                value={selectedRefundPayment.refundType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label htmlFor="refundAmount">Refund Amount</label>
              <input
                type="text"
                name="refundAmount"
                id="refundAmount"
                value={selectedRefundPayment.refundAmount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label htmlFor="refundDate">Refund Date</label>
              <input
                type="text"
                name="refundDate"
                id="refundDate"
                value={selectedRefundPayment.refundDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>

            <div>
              <label htmlFor="paymentDate">Payment Date</label>
              <input
                type="text"
                name="paymentDate"
                id="paymentDate"
                value={selectedRefundPayment.paymentDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                value={selectedRefundPayment.description}
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

export default RefundPaymentTable;
