import React, { useEffect, useState } from "react";
import axios from "axios";
import Test from "./SalaryDetails";
import TopBar from "../../TopBar";
import NavBar from "../../NavBar";
import "../HomePage/Home.css";

const url = "http://localhost:5000/SalaryPayments";

const fetchHandler = async () => {
  return await axios.get(url).then((res) => res.data);
};

function DisplaySalaryDetails() {
  const [salaryDetails, setSalaryDetails] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setSalaryDetails(data));
  }, []);

  console.log(`salaryDetails: ${salaryDetails}`);

  return (
    <div>
      <TopBar />
      <NavBar />
      <div className="Page">
        <h2>Salary Details</h2>
        {salaryDetails && salaryDetails.length > 0 ? (
          salaryDetails.map((salary) => (
            <DisplaySalaryDetails key={salary._id} test={salary} />
          ))
        ) : (
          <p>No salary details available</p>
        )}
      </div>
    </div>
  );
}

export default DisplaySalaryDetails;
