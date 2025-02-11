import React from "react";
import "./style.css";

const Navbar = () => {
  const handleScroll = (event, id) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
          className="text-xl font-bold text-white"
        >
          RAFI <span className="text-blue-400">RACHMAWAN</span>
        </a>
        <div className="flex gap-4">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="text-white hover:text-blue-300"
          >
            About
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleScroll(e, "portfolio")}
            className="text-white hover:text-blue-300"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="text-white hover:text-blue-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
