import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./components/Theme/ThemeContext";
// import "./style.css";

import "@fontsource/sora/400.css";
import "@fontsource/sora/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
