import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo2.png";
import validator from "validator";
import "../styles/components/RegisterForm.css";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
    setIsButtonDisabled(event.target.value === "" && email === "");
  };

  const isValidEmail = (value) => {
    return validator.isEmail(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setIsButtonDisabled(name === "" && !isValidEmail(value));
    if (value === "") {
      setEmailError("");
    }
  };

  const handleClose = () => {
    console.log("Closing the form");
    navigate("/", { replace: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError("");
    if (!isValidEmail(email)) {
      setEmailError("Enter a valid email address");
      return;
    }
    console.log("Name:", name);
    console.log("Email:", email);

    navigate("/register-success");
  };

  return (
    <>
      <div className="register-form-container">
        <div className="register-header">
          <div className="company-logo">
            <img src={logo} alt="Company-Logo" />
          </div>
          <div className="close-button" onClick={handleClose}>
            X
          </div>
        </div>

        <div className="form-wrapper">
          <form>
            <div className="form-heading">
              <p>Registration Form</p>
              <h3>Start your success Journey here!</h3>
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <p className="error-message">
                  <span>!</span>
                  {emailError}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isButtonDisabled}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
