import ProfilePicture from "../../assets/profile-picture.png";
import Foto from "../../assets/foto2.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import "../styles/Header.css";
import "./style.css";

function index() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={Foto} className="profile-picture" />
        <h3>Rafi Rachmawan</h3>
        <p>Programmer - FrontEndDevelopers - Researcher</p>
        <div className="socialMedia">
          <a
            href="https://www.instagram.com/rrrafi.rachmawan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@notyoursgb?_t=8pTUdZRSnfk&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.linkedin.com/in/rafi-rachmawan-2a8728233/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rafirachmawan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
}

export default index;
