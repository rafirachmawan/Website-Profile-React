import React from "react";
import "./style.css";
import Telepon from "../../assets/telepon.png";
import Gmail from "../../assets/gmail.png";
import Github from "../../assets/github.png";

const ContactMe = () => {
  return (
    <section className="relative py-16 bg-transparent text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading">
          Contact <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.2)]">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Call Me */}
          <div className="text-center bg-slate-950/65 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:scale-105 hover:shadow-purple-500/5 hover:shadow-lg transition-all duration-300">
            <img
              src={Telepon}
              alt="Call Me"
              className="mx-auto mb-4 w-16 h-16 object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]"
            />
            <h3 className="text-xl font-bold text-white font-heading">Call Me</h3>
            <p className="text-slate-200 font-medium mt-2 font-body">+62 857 0718 5783</p>
          </div>

          {/* Contact Me */}
          <div className="text-center bg-slate-950/65 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:scale-105 hover:shadow-purple-500/5 hover:shadow-lg transition-all duration-300">
            <img
              src={Gmail}
              alt="Contact Me"
              className="mx-auto mb-4 w-16 h-16 object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]"
            />
            <h3 className="text-xl font-bold text-white font-heading">Contact Me</h3>
            <p className="text-slate-200 font-medium mt-2 font-body break-all">rafirachmawan1987@gmail.com</p>
          </div>

          {/* Visit Me */}
          <div className="text-center bg-slate-950/65 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:scale-105 hover:shadow-purple-500/5 hover:shadow-lg transition-all duration-300">
            <img
              src={Github}
              alt="Visit Me"
              className="mx-auto mb-4 w-16 h-16 object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]"
            />
            <h3 className="text-xl font-bold text-white font-heading">Visit Me</h3>
            <p className="text-slate-200 font-medium mt-2 font-body">
              Check my projects at{" "}
              <a
                href="https://github.com/rafirachmawan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 font-bold hover:text-purple-200 hover:underline transition-colors duration-200"
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
