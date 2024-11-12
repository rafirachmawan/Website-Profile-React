import React, { createContext, useContext, useState, useEffect } from "react";

// Membuat Context
const ThemeContext = createContext();

// Custom hook untuk menggunakan ThemeContext
export const useTheme = () => useContext(ThemeContext);

// Provider untuk membungkus aplikasi
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    // Update kelas pada body sesuai dengan mode gelap/terang
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
