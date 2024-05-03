import React, { useState } from "react";
import "./GuestRegister.css";
import axios from "axios";

function guestregister  () {
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [passportid, setPassportId] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [payment, setPaymentOption] = useState("");
  const [health, setHealthIssues] = useState("");
  const [request, setSpecialRequest] = useState("");
  const [language, setLanguage] = useState("");
  const [contactmethod, setContactMethod] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //validation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateLettersOnly(fullname)) {
      setErrorMessage("Full Name should contain only letters.");
      return;
    }
    
    if (!validateLettersOnly(country)) {
      setErrorMessage("Country should contain only letters.");
      return;
    }
    if (!validateLettersOnly(payment)) {
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
      fullname,
      username,
      passportid,
      password,
      phone,
      email,
      country,
      payment,
      health,
      request,
      language,
      contactmethod
    );
    // Add your form submission logic here
    try {
      console.log(
        fullname,
        username,
        passportid,
        password,
        phone,
        email,
        country,
        payment,
        health,
        request,
        language,
        contactmethod
      );
      const response = axios.post("http://localhost:5000/guest/", {
        fullname,
        username,
        passportid,
        password,
        phone,
        email,
        country,
        payment,
        health,
        request,
        language,
        contactmethod,
      });

      console.log(response);
      alert("Guest Registered Successfully!");
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
        <form action="#" method="post">
          <label htmlFor="fullname">Full Name*</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter Full Name"
            required
          />
          <label htmlFor="username">User Name*</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter User Name"
            required
          />
          <label htmlFor="passportid">Passport ID*</label>
          <input
            type="text"
            name="passportid"
            id="passportid"
            value={passportid}
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
            value={payment}
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
            value={health}
            onChange={(e) => setHealthIssues(e.target.value)}
            placeholder="Enter Health Issues (if any)"
          ></textarea>
          <label htmlFor="specialrequest">Special Request</label>
          <textarea
            name="specialrequest"
            id="specialrequest"
            cols="30"
            rows="5"
            value={request}
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
            value={contactmethod}
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
