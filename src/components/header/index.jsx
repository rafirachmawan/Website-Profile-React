import ProfilePicture from "../../assets/profile-picture.png";
import Foto from "../../assets/foto2.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
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
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaTiktok />
          </a>
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  );
}

export default index;
