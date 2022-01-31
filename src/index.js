import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./components/NavBar";
import "./bootstrap.min.css";
import Foother from "./components/Foother";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Foother />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
