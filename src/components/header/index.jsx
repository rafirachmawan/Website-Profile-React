import ProfilePicture from "../../assets/profile-picture.png";
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
        <img src={ProfilePicture} />
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
