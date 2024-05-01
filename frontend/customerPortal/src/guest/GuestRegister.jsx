import React, { useState } from "react";
import "./GuestRegister.css";
import axios from "axios";

function guestregister() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [passportId, setPassportId] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [healthIssues, setHealthIssues] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [language, setLanguage] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //validation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateLettersOnly(fullName)) {
      setErrorMessage("Full Name should contain only letters.");
      return;
    }
    if (!validateLettersOnly(userName)) {
      setErrorMessage("User Name should contain only letters.");
      return;
    }
    if (!validateLettersOnly(country)) {
      setErrorMessage("Country should contain only letters.");
      return;
    }
    if (!validateLettersOnly(paymentOption)) {
      setErrorMessage("Payment Option should contain only letters.");
      return;
    }
    if (!validateNumbersOnly(phone)) {
      setErrorMessage("Phone should contain only numbers.");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setErrorMessage(""); // Clear error message if validation succeeds

    console.log(
      fullName,
      userName,
      passportId,
      password,
      phone,
      email,
      country,
      paymentOption,
      healthIssues,
      specialRequest,
      language,
      contactMethod
    );
    // Add your form submission logic here
    try {
      const response = axios.post("http://localhost:5000/guest/", {
        fullName,
        userName,
        passportId,
        password,
        phone,
        email,
        country,
        paymentOption,
        healthIssues,
        specialRequest,
        language,
        contactMethod,
      });

      console.log(response);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      handleReset();
    }
  };

  const handleReset = () => {
    // Reset all state variables here
    setFullName("");
    setUserName("");
    setPassportId("");
    setPassword("");
    setPhone("");
    setEmail("");
    setCountry("");
    setPaymentOption("");
    setHealthIssues("");
    setSpecialRequest("");
    setLanguage("");
    setContactMethod("");
    setErrorMessage("");
  };

  const validateLettersOnly = (value) => {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(value);
  };

  const validateNumbersOnly = (value) => {
    const regex = /^[0-9]*$/;
    return regex.test(value);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="App">
      <br />
      <h1>Guest Registration</h1>

      <fieldset>
        <form action="#" method="get">
          <label htmlFor="fullname">Full Name*</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter Full Name"
            required
          />
          <label htmlFor="username">User Name*</label>
          <input
            type="text"
            name="username"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter User Name"
            required
          />
          <label htmlFor="passportid">Passport ID*</label>
          <input
            type="text"
            name="passportid"
            id="passportid"
            value={passportId}
            onChange={(e) => setPassportId(e.target.value)}
            placeholder="Enter Passport ID"
            required
          />
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
          <label htmlFor="phone">Phone*</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Phone Number"
            required
          />
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <label htmlFor="country">Country*</label>
          <input
            type="text"
            name="country"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter Country"
            required
          />
          <label htmlFor="paymentoption">Payment Option*</label>
          <input
            type="text"
            name="paymentoption"
            id="paymentoption"
            value={paymentOption}
            onChange={(e) => setPaymentOption(e.target.value)}
            placeholder="Enter Payment Option"
            required
          />
          <label htmlFor="healthissues">Health Issues</label>
          <textarea
            name="healthissues"
            id="healthissues"
            cols="30"
            rows="5"
            value={healthIssues}
            onChange={(e) => setHealthIssues(e.target.value)}
            placeholder="Enter Health Issues (if any)"
          ></textarea>
          <label htmlFor="specialrequest">Special Request</label>
          <textarea
            name="specialrequest"
            id="specialrequest"
            cols="30"
            rows="5"
            value={specialRequest}
            onChange={(e) => setSpecialRequest(e.target.value)}
            placeholder="Enter Special Request (if any)"
          ></textarea>
          <label htmlFor="language">Language</label>
          <input
            type="text"
            name="language"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="Enter Preferred Language"
          />
          <label htmlFor="contactmethod">Contact Method*</label>
          <input
            type="text"
            name="contactmethod"
            id="contactmethod"
            value={contactMethod}
            onChange={(e) => setContactMethod(e.target.value)}
            placeholder="Enter Contact Method"
            required
          />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <div id="btn_div">
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default guestregister;
