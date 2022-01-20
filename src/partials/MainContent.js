import React from "react";
import logo from "../media/logo512.png";

export default function MainContent() {
  return (
    <div className="main-content">
      <ul className="main-content-list">
        <li>Expirience with big tour companies</li>
        <li>Websites have this young flare</li>
        <li>Agile and dynamic apps</li>
        <li>Updated stack</li>
        <li>Fluent in english and hebrew</li>
      </ul>
      <div className="background-img">
        <div className="half-hidden">
          <img src={logo} alt="react logo" />
          <div className="background-child"></div>
          <div className="background-child"></div>
        </div>
      </div>
    </div>
  );
}
