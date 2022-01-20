import React from "react";
import ReactDOM from "react-dom";
import "./css/style.css";
import Navbar from "./partials/Navbar";
import Header from "./partials/Header";
import MainContent from "./partials/MainContent";

const root = document.querySelector("#root");

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <MainContent />
    </div>
  );
}

ReactDOM.render(<App />, root);
