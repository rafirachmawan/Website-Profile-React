import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import ProfileImage from "../../assets/profil.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const TECH_STACK = [
  { name: "React",       color: "#61dafb", icon: "⚛" },
  { name: "JavaScript",  color: "#f7df1e", icon: "JS" },
  { name: "TypeScript",  color: "#3178c6", icon: "TS" },
  { name: "Node.js",     color: "#68a063", icon: "🟢" },
  { name: "Vite",        color: "#646cff", icon: "⚡" },
  { name: "Tailwind",    color: "#38bdf8", icon: "🌊" },
  { name: "HTML5",       color: "#e34c26", icon: "🔸" },
  { name: "CSS3",        color: "#264de4", icon: "🎨" },
  { name: "Laravel",     color: "#ff2d20", icon: "🔺" },
  { name: "MySQL",       color: "#4479a1", icon: "🗄" },
];

const JOURNEY = [
  { year: "2022", label: "Belajar dasar web", icon: "🌱", detail: "HTML, CSS, JavaScript" },
  { year: "2023", label: "Fokus React & UI",  icon: "⚛",  detail: "React, Tailwind, Figma" },
  { year: "2024", label: "Freelance project", icon: "💼", detail: "Website & Landing Page" },
  { year: "2025", label: "Backend & Fullstack",icon: "🚀", detail: "Node.js, Laravel, MySQL" },
];

const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  /* ── Typewriter ── */
  const texts = ["Front-End Developer", "UI/UX Designer", "React Developer", "Fullstack Learner"];
  const [displayText, setDisplayText] = useState("");
  const [txtIndex, setTxtIndex]       = useState(0);
  const [charIndex, setCharIndex]     = useState(0);
  const [isDeleting, setIsDeleting]   = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 45 : 90;
    const timeout = setTimeout(() => {
      const current = texts[txtIndex];
      if (!isDeleting) {
        setDisplayText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === current.length) setIsDeleting(true);
      } else {
        setDisplayText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) { setIsDeleting(false); setTxtIndex((txtIndex + 1) % texts.length); }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, txtIndex]);

  /* ── 3D Tilt Card ── */
  const cardRef   = useRef(null);
  const frameRef  = useRef(null);
  const target    = useRef({ x: 0, y: 0 });
  const currentT  = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const animate = () => {
      currentT.current.x += (target.current.x - currentT.current.x) * 0.08;
      currentT.current.y += (target.current.y - currentT.current.y) * 0.08;
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(${currentT.current.x}deg) rotateY(${currentT.current.y}deg) scale(1.03)`;
      }
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    target.current.x = -((e.clientY - rect.top  - rect.height / 2) / rect.height) * 18;
    target.current.y =  ((e.clientX - rect.left - rect.width  / 2) / rect.width)  * 18;
  };
  const handleMouseLeave = () => { target.current = { x: 0, y: 0 }; };

  /* ── Active journey ── */
  const [activeJourney, setActiveJourney] = useState(null);

  return (
    <section id="about" className="about2-section">
      <div className="about2-container">

        {/* ═══ LEFT ═══ */}
        <div className="about2-left" data-aos="fade-right">

          {/* Header */}
          <div className="about2-header">
            <span className="about2-tag">About Me</span>
            <h2 className="about2-title">
              Hi, I'm <span className="about2-name">Rafi</span> 👋
            </h2>
            <p className="about2-typewriter">
              <span className="about2-tw-text">{displayText}</span>
              <span className="about2-cursor">|</span>
            </p>
          </div>

          {/* Bio */}
          <div className="about2-bio">
            <p>
              Halo! Saya <strong>Rafi Rachmawan</strong>, seorang Front-End Developer
              yang fokus membuat UI modern, responsif, dan interaktif.
            </p>
            <p>
              Saya terbiasa menggunakan <strong>React, Tailwind,</strong> dan <strong>Vite</strong>,
              serta sedang mengembangkan skill Backend untuk menjadi Fullstack Developer.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="about2-block">
            <h3 className="about2-block-title">
              <span className="about2-block-icon">⚡</span> Tech Stack
            </h3>
            <div className="about2-tech-grid">
              {TECH_STACK.map((t) => (
                <span
                  key={t.name}
                  className="about2-tech-pill"
                  style={{ "--tc": t.color }}
                >
                  <span className="about2-tech-icon">{t.icon}</span>
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* My Journey */}
          <div className="about2-block">
            <h3 className="about2-block-title">
              <span className="about2-block-icon">🗺</span> My Journey
            </h3>
            <div className="about2-timeline">
              {JOURNEY.map((j, i) => (
                <div
                  key={j.year}
                  className={`about2-tl-item ${activeJourney === i ? "active" : ""}`}
                  onMouseEnter={() => setActiveJourney(i)}
                  onMouseLeave={() => setActiveJourney(null)}
                >
                  <div className="about2-tl-dot">
                    <span>{j.icon}</span>
                  </div>
                  <div className="about2-tl-body">
                    <span className="about2-tl-year">{j.year}</span>
                    <span className="about2-tl-label">{j.label}</span>
                    <span className={`about2-tl-detail ${activeJourney === i ? "visible" : ""}`}>
                      {j.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ═══ RIGHT: 3D Photo Card ═══ */}
        <div className="about2-right" data-aos="fade-left">
          <div
            className="about2-card-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Animated gradient border */}
            <div className="about2-card-border" />

            {/* 3D card */}
            <div ref={cardRef} className="about2-card">
              {/* Shimmer overlay */}
              <div className="about2-card-shimmer" />

              <img
                src={ProfileImage}
                alt="Rafi Rachmawan"
                className="about2-card-img"
              />

              {/* Bottom info bar */}
              <div className="about2-card-bar">
                <div className="about2-card-bar-dot" />
                <span>Rafi Rachmawan</span>
                <span className="about2-card-bar-role">Dev & Designer</span>
              </div>
            </div>

            {/* Floating badges */}
            <div className="about2-float about2-float-tl">
              <span>⚛ React</span>
            </div>
            <div className="about2-float about2-float-tr">
              <span>🚀 Vite</span>
            </div>
            <div className="about2-float about2-float-bl">
              <span>💡 UI/UX</span>
            </div>
            <div className="about2-float about2-float-br">
              <span>🌐 Web</span>
            </div>

            {/* Stats bubble */}
            <div className="about2-stat-bubble">
              <span className="about2-stat-n">3+</span>
              <span className="about2-stat-l">Tahun</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Index;
