import React from "react";
import "./style.css"; // Mengimpor CSS dengan benar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Index = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?workspace')",
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
            <a href="#" className="text-xl">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-xl">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="text-xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-xl">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
