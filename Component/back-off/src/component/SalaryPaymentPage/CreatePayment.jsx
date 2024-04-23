import "../UtilityPaymentPage/utility.css";
import ViewSalary from "./images/paySalary.png";
import { Link } from "react-router-dom";

function CreateSalaryPayment() {
  return (
    <div className="container-1">
      <h2>Create Salary Payment</h2>
      <img className="Img" src={ViewSalary} alt="ViewBill-Img"></img>
      <Link to="/salary-payment/create-payment">
        <button className="goBtn">Pay</button>
      </Link>
    </div>
  );
}

export default CreateSalaryPayment;
