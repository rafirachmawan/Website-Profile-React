import React from "react";
import "./style.css";
import Telepon from "../../assets/telepon.png";
import Gmail from "../../assets/gmail.png";
import Github from "../../assets/github.png";

const ContactMe = () => {
  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact <span className="text-blue-400">Me</span>{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img
              src={Telepon}
              alt="Call Me"
              className="mx-auto mb-4 w-16 h-16"
            />
            <h3 className="text-xl font-semibold">Call Me</h3>
            <p className="text-gray-300">Reach me at +123 456 789</p>
          </div>
          <div className="text-center">
            <img
              src={Gmail}
              alt="Contact Me"
              className="mx-auto mb-4 w-16 h-16"
            />
            <h3 className="text-xl font-semibold">Contact Me</h3>
            <p className="text-gray-300">Email me at example@email.com</p>
          </div>
          <div className="text-center">
            <img
              src={Github}
              alt="Visit Me"
              className="mx-auto mb-4 w-16 h-16"
            />
            <h3 className="text-xl font-semibold">Visit Me</h3>
            <p className="text-gray-300">
              Check my projects at{" "}
              <a
                href="https://github.com/yourprofile"
                className="text-blue-400"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
