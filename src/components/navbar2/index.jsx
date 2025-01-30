import React from "react";
import "./style.css";

const index = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-blue-900">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-white">
          RAFI <span className="text-blue-400">RACHMAWAN</span>
        </div>
        <div className="flex gap-4">
          <a href="#about" className="text-white hover:text-blue-300">
            About
          </a>
          <a href="#portfolio" className="text-white hover:text-blue-300">
            Portfolio
          </a>
          <a href="#contact" className="text-white hover:text-blue-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default index;
