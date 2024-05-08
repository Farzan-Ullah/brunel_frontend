import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-section">
        <div className="footer-content">
          <div className="copyright">&#169;</div>
          <p>Talup 2023. All rights reserved</p>
          <div className="footer-links">
            <Link to="#" className="footer-link">
              Terms & Conditions
            </Link>
            <Link to="#" className="footer-linnk">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
