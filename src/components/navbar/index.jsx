import { useState } from "react";
import "./style.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../Theme/ThemeContext";

function index() {
  const { darkMode, setDarkMode } = useTheme();

  const [statusTampil, setStatusTampil] = useState("");

  function tampilMenu() {
    if (statusTampil === "") {
      setStatusTampil("tampil");
    } else {
      setStatusTampil("");
    }
  }

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          {/* HashLink untuk kembali ke bagian atas halaman */}
          <HashLink to="/#">RafiRachmawan</HashLink>
        </div>
        <button onClick={tampilMenu}>
          {statusTampil === "" ? <FaBars /> : <IoMdClose />}
        </button>
        <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
          <ul>
            <li>
              <HashLink to="/#portfolio">Portofolio</HashLink>
            </li>
            <li>
              <HashLink to="/#about">About</HashLink>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="App">
          <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            {darkMode ? "" : ""}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default index;
