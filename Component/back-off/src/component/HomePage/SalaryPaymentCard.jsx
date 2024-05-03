import React from "react";
import SalaryImg from "./image/Salary.png";
import { Link } from "react-router-dom";

function SalaryPaymentCard() {
  return (
    <div className="Card">
      <h2 className="h2_right">Salary Remittance </h2>
      <Link to="/salary-payment" className="Salary-Payment-Page">
        <img className="Img_right" src={SalaryImg} alt="Salary-Img" />
      </Link>
      <p>
        Embark on a journey of financial empowerment within our hotel system,
        where salary remittance flows seamlessly, nurturing a culture of
        prosperity and fulfillment for every valued employee.
      </p>
      <hr></hr>
    </div>
  );
}

export default SalaryPaymentCard;
