import "./../UtilityPaymentPage/utility.css";
import SearchSalary from "./images/searchSalary.png";
import { Link } from "react-router-dom";

function ViewSalaryPayment() {
  return (
    <div className="container-2">
      <h2>Search Salary Payment</h2>

      <img className="Img" src={SearchSalary} alt="SearchSalary-Img"></img>
      <Link to="/salary-payment/Display-Salary-Details">
        <button className="goBtn">Search</button>
      </Link>
    </div>
  );
}

export default ViewSalaryPayment;
