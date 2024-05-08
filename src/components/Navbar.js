import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo2.png";
import "../styles/components/Navbar.css";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar-content">
          <div className="navbar-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-buttons">
            <button
              className="navbar-button"
              onClick={() => {
                navigate("/register");
              }}
            >
              Get Projects
            </button>
            <button className="navbar-button">Onboard Talent</button>
          </div>
        </nav>
      </div>
    </>
  );
}
