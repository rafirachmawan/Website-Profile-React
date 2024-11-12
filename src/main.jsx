import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./components/Theme/ThemeContext";
// import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
