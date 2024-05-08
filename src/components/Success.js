import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo2.png";
import "../styles/components/Success.css";

export default function Success() {
  const navigate = useNavigate();

  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 0) {
      navigate("/", { replace: true });
    }
  }, [count, navigate]);

  return (
    <>
      <div className="success-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="success-content">
          <div className="success-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="60"
              width="60"
              viewBox="0 0 512 512"
            >
              <path
                fill="#28b246"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>
          </div>
          <div className="success-text">
            <h4>Success Submitted</h4>
            <h3>Congratulations</h3>
            <p>
              Your request has been successfully submitted to us. We will
              validate your information and reach out to your shortly with
              updates
            </p>
          </div>
        </div>

        <div className="timer">
          Redirecting you to Homepage in <span> {count} Seconds</span>
        </div>
      </div>
    </>
  );
}
