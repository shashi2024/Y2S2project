import "./../UtilityPaymentPage/utility.css";
import SearchSalary from "./images/searchSalary.png";
import { Link } from "react-router-dom";

function ViewSalaryPayment() {
  return (
    <div className="container-2">
      <h2>Search Salary Payment</h2>
      <img className="Img" src={SearchSalary} alt="SearchSalary-Img"></img>

      <button className="goBtn">Search</button>
    </div>
  );
}

export default ViewSalaryPayment;
