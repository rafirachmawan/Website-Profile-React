import React from "react";
import "./style.css"; // Mengimpor CSS dengan benar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Walpaper from "../../assets/walpaper.jpeg";

const Index = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${Walpaper})`,
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            RAFI <span className="text-blue-500">RACHMAWAN</span>
          </h1>
          <p className="text-lg mt-4">Full Stack Developers Junior</p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-full">
              Resume
            </button>
            <button className="px-6 py-2 bg-transparent border border-blue-500 text-blue-500 rounded-full">
              Portfolio
            </button>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://facebook.com/username"
              className="text-xl"
              title="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://linkedin.com/in/username"
              className="text-xl"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://instagram.com/username"
              className="text-xl"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://twitter.com/username"
              className="text-xl"
              title="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
