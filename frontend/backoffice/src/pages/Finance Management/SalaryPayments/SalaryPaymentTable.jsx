import React, { useState, useEffect } from "react";
import Button from "../../../components/Button";
import axios from "axios";
import Modal from "react-modal";

const SalaryPaymentTable = () => {
  const [salaryPaymentData, setSalaryPaymentData] = useState([]);
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [selectedSalaryPayment, setSelectedSalaryPayment] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSalaryPaymentData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/salary-payments"
        );
        setSalaryPaymentData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSalaryPaymentData();
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

  const handleEdit = (salaryPayment) => {
    setSelectedSalaryPayment(salaryPayment);
    setModalIsOpen(true);
  };

  const handleDelete = async (salaryPayment) => {
    console.log(salaryPayment._id);
    try {
      const response = await axios.delete(
        `http://localhost:5000/salary-payments/${salaryPayment._id}`
      );

      if (response.status === 200) {
        window.location.reload();
      } else {
        console.log("Failed to delete salary payment", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setSelectedSalaryPayment({
      ...selectedSalaryPayment,
      [event.target.name]: event.target.value,
    });
  };

  const handlesave = async (event) => {
    event.preventDefault();
    console.log(selectedSalaryPayment._id);
    try {
      const response = await axios.put(
        `http://localhost:5000/salary-payments/${selectedSalaryPayment._id}`,
        selectedSalaryPayment
      );
      if (response.status === 200) {
        window.location.reload();
      } else {
        console.log("Failed to update salary payment", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filtereSalaryPayments = salaryPaymentData.filter(
    (salaryPayment) =>
      salaryPayment.PaymentId.toLowerCase().includes(
        searchQuery.toLowerCase()
      ) ||
      salaryPayment.employeeId
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      salaryPayment.bankName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-primary">Salary Payment</h1>

      <hr className="border-t border-second_background mt-2 mb-10" />

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
            <th className="py-4 px-6 bg-second_background">Employee Id</th>
            <th className="py-4 px-6 bg-second_background">Payment Date</th>
            <th className="py-4 px-6 bg-second_background">Basic Salary</th>
            <th className="py-4 px-6 bg-second_background">Attendance</th>
            <th className="py-4 px-6 bg-second_background">Overtime</th>
            <th className="py-4 px-6 bg-second_background">Total Salary</th>
            <th className="py-4 px-6 bg-second_background">Bank Account</th>
            <th className="py-4 px-6 bg-second_background">Bank Name</th>
            <th className="py-4 px-6 bg-second_background">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtereSalaryPayments.map((salaryPayment) => (
            <tr
              key={salaryPayment._id}
              className="bg-gray-100 border-b border-second_background"
            >
              <td className="py-4 px-6">{salaryPayment.PaymentId}</td>
              <td className="py-4 px-6">{salaryPayment.employeeId}</td>
              <td className="py-4 px-6">{salaryPayment.paymentDate}</td>
              <td className="py-4 px-6">{salaryPayment.basicSalary}</td>
              <td className="py-4 px-6">{salaryPayment.Attendance}</td>
              <td className="py-4 px-6">{salaryPayment.overtime}</td>
              <td className="py-4 px-6">{salaryPayment.totalSalary}</td>
              <td className="py-4 px-6">{salaryPayment.bankAccount}</td>
              <td className="py-4 px-6">{salaryPayment.bankName}</td>
              <td className="py-4 px-6">
                <Button onClick={() => handleEdit(salaryPayment)}>Edit</Button>
                <Button onClick={() => handleDelete(salaryPayment)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className="border-t border-second_background mt-12 mb-12" />

      <Modal
        isOpen={isModalOpen}
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
        {selectedSalaryPayment && (
          <form onSubmit={handlesave}>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Edit Salary Payment</h1>
              <Button onClick={() => setModalIsOpen(false)}>X</Button>
            </div>
            <hr className="border-t border-second_background mt-2 mb-6" />
            <div>
              <label className="block text-sm font-medium">Payment ID</label>
              <input
                name="PaymentId"
                value={selectedSalaryPayment.PaymentId}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Employee ID</label>
              <input
                name="employeeId"
                value={selectedSalaryPayment.employeeId}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Payment Date</label>
              <input
                name="paymentDate"
                value={selectedSalaryPayment.paymentDate}
                onChange={handleChange}
                type="date"
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Basic Salary</label>
              <input
                name="basicSalary"
                value={selectedSalaryPayment.basicSalary}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Attendance</label>
              <input
                name="Attendance"
                value={selectedSalaryPayment.Attendance}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Overtime</label>
              <input
                name="overtime"
                value={selectedSalaryPayment.overtime}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Bank Account</label>
              <input
                name="bankAccount"
                value={selectedSalaryPayment.bankAccount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Bank Name</label>
              <input
                name="bankName"
                value={selectedSalaryPayment.bankName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit">Save</Button>
            </div>
            <div>
              <label className="block text-sm font-medium">Total Salary</label>
              <input
                name="totalSalary"
                value={selectedSalaryPayment.totalSalary}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-second_background shadow-sm focus:border-button_color focus:ring focus:ring-color focus:ring-opacity-5"
              />
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};
export default SalaryPaymentTable;
