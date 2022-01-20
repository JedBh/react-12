import React from "react";
import logo from "../media/logo512.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <img className="navbar-logo" src={logo} alt="react logo" />
        <p>Jed Benhod</p>
      </div>
      {/* <div className="navbar-item">
        <ul className="navbar-links">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div> */}
    </div>
  );
}
