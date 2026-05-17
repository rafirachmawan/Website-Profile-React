import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import ProfileImage from "../../assets/profil.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import BackgroundParticles from "../Particles";

const Index = () => {
  // AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  // Typing Animation
  const texts = ["Front-End Developer", "UI Designer", "React Developer"];
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const current = texts[index];

      if (!isDeleting) {
        setDisplayText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === current.length) {
          setIsDeleting(true);
        }
      } else {
        setDisplayText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  // 🔥 SMOOTH 3D TILT (NO LAG)
  const cardRef = useRef(null);
  const frame = useRef(null);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const animate = () => {
    current.current.x += (target.current.x - current.current.x) * 0.1;
    current.current.y += (target.current.y - current.current.y) * 0.1;

    if (cardRef.current) {
      cardRef.current.style.transform = `
        perspective(1000px)
        rotateX(${current.current.x}deg)
        rotateY(${current.current.y}deg)
        scale(1.05)
      `;

      const img = cardRef.current.querySelector("img");
      if (img) {
        img.style.transform = `
          translateX(${current.current.y * 0.5}px)
          translateY(${current.current.x * 0.5}px)
        `;
      }
    }

    frame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    target.current.x = -((y - centerY) / centerY) * 12;
    target.current.y = ((x - centerX) / centerX) * 12;
  };

  const handleMouseLeave = () => {
    target.current.x = 0;
    target.current.y = 0;
  };

  return (
    <section id="about" className="relative py-20 px-6 bg-transparent">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* LEFT */}
        <div
          className="w-full lg:w-1/2 text-left backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl"
          data-aos="fade-right"
        >
          <h2 className="text-4xl font-bold mb-2 text-white">
            Hi, I'm <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]">Rafi</span> 👋
          </h2>

          <p className="text-lg text-cyan-300 font-semibold h-6">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-slate-100 mt-4 mb-4 leading-relaxed font-body">
            Halo! Saya{" "}
            <span className="font-semibold text-white">Rafi Rachmawan</span>,
            seorang Front-End Developer yang fokus membuat UI modern, responsif,
            dan interaktif.
          </p>

          <p className="text-slate-100 mb-4 leading-relaxed font-body">
            Saya terbiasa menggunakan React, Tailwind, dan Vite, serta sedang
            mengembangkan skill Backend untuk menjadi Fullstack Developer.
          </p>

          <p className="text-white font-semibold mt-6 mb-3 font-heading">Tech Stack</p>
          <div className="flex flex-wrap gap-3">
            {["HTML", "JavaScript", "React", "Vite", "Node.js"].map((tech) => (
              <span
                key={tech}
                className="bg-white/10 border border-white/10 text-white hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 px-4 py-1 text-sm rounded-full cursor-pointer hover:scale-110"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-white font-semibold mt-8 mb-3 font-heading">My Journey</p>
          <ul className="border-l-2 border-cyan-500 pl-4 text-slate-300 space-y-3 text-sm font-body">
            <li>
              <span className="font-bold text-cyan-300">2022:</span> Belajar dasar
              web
            </li>
            <li>
              <span className="font-bold text-cyan-300">2023:</span> Fokus React &
              UI
            </li>
            <li>
              <span className="font-bold text-cyan-300">2024:</span> Freelance
              project
            </li>
            <li>
              <span className="font-bold text-cyan-300">2025:</span> Backend &
              Fullstack
            </li>
          </ul>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-gray-950 font-bold hover:bg-cyan-50 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:scale-105 transition-all duration-300 px-6 py-2.5 rounded-lg font-medium cursor-pointer">
              Hire Me
            </button>
            <button className="border border-white/30 hover:border-white px-6 py-2.5 rounded-lg text-slate-200 hover:text-white transition hover:scale-105 duration-300 cursor-pointer">
              Contact
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          data-aos="fade-left"
        >
          <div
            className="relative group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>

            {/* SMOOTH 3D CARD */}
            <div
              ref={cardRef}
              className="relative backdrop-blur-md bg-white/10 border border-white/10 rounded-xl p-3 shadow-2xl will-change-transform"
            >
              <img
                src={ProfileImage}
                alt="Rafi Rachmawan"
                className="rounded-lg w-full max-w-xs lg:max-w-sm"
              />

              <p className="text-center text-sm text-gray-300 mt-2 font-semibold">
                Rafi Rachmawan ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
