import React from "react";
import logo from "../images/logo.png";
import "../styles/components/Navbar.css";
export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar-content">
          <div className="navbar-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-buttons">
            <button className="navbar-button">Get Projects</button>
            <button className="navbar-button">Onboard Talent</button>
          </div>
        </nav>
      </div>
    </>
  );
}
