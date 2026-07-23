import React from 'react';
import { Link } from "react-router-dom";
import { portfolioList } from "../components/data/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs, FaReact, FaLaravel } from "react-icons/fa";
import gapaiLogo from "../assets/GapaiDigitalIcon.png";
import heroImage from "../assets/foto-normal-remove.png";
import aboutImage from "../assets/profil.jpeg";
import Navbar from "../components/navbar";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].home;

  const experiences = t.experiences.map((exp, index) => {
    let icon, color;
    switch(index) {
      case 0:
        icon = <RiNextjsFill />;
        color = "bg-neo-accent text-white";
        break;
      case 1:
        icon = <FaVuejs />;
        color = "bg-neo-primary";
        break;
      case 2:
        icon = <FaReact />;
        color = "bg-neo-secondary text-white";
        break;
      default:
        icon = <FaLaravel />;
        color = "bg-[#00d084]";
        break;
    }
    return { ...exp, icon, color };
  });

  return (
    <div className="bg-neo-bg min-h-screen font-body text-neo-dark selection:bg-neo-primary selection:text-black pb-20">
      <Navbar />

      {/* ── HERO ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16 md:mt-24 mb-20 md:mb-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <div className="order-2 md:order-1">
            <div className="inline-block bg-neo-primary border-4 border-neo-border px-3 py-1 font-bold mb-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2 text-sm sm:text-base text-black">
              {t.freelance}
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black font-heading leading-[0.9] uppercase tracking-tighter mb-5">
              {t.rolePrefix} <br/>
              <span className="text-neo-accent" style={{ textShadow: "4px 4px 0px var(--color-neo-border)" }}>{t.roleSuffix}</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl font-medium mb-8 max-w-lg border-l-4 border-neo-border pl-4 sm:pl-6 bg-neo-bg p-3 sm:p-4 shadow-neo">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="neo-btn text-base sm:text-lg">{t.viewProjects}</a>
              <div className="flex gap-3">
                {[
                  { icon: faGithub, link: "https://github.com/rafirachmawan", color: "bg-neo-dark text-neo-bg" },
                  { icon: faLinkedin, link: "https://www.linkedin.com/in/rafi-rachmawan-2a8728233/", color: "bg-[#0A66C2] text-white" },
                  { icon: faInstagram, link: "https://www.instagram.com/rrrafi.rachmawan/", color: "bg-[#E4405F] text-white" }
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noreferrer"
                     className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-4 border-neo-border shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover transition-all text-xl sm:text-2xl ${social.color}`}>
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative justify-self-center order-1 md:order-2 w-full flex justify-center mt-0 md:mt-0">
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-neo-primary border-4 border-neo-border shadow-neo translate-x-4 translate-y-4"></div>
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-neo-secondary border-4 border-neo-border shadow-neo rounded-full z-20 animate-bounce" style={{ animationDuration: "3s" }}></div>

            <div className="relative z-10 border-4 border-neo-border bg-neo-bg shadow-neo w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 p-3 sm:p-4 md:p-6 group -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="w-full h-[85%] border-4 border-neo-border overflow-hidden bg-neo-primary">
                <img
                  src={heroImage}
                  alt="Rafi Rachmawan"
                  className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="w-full h-[15%] flex items-center justify-center font-bold font-heading uppercase tracking-widest mt-2 text-sm">
                Rafi.jpeg
              </div>
            </div>

            <div className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 bg-neo-accent text-white border-4 border-neo-border px-4 py-3 sm:px-6 sm:py-4 shadow-neo z-20 font-bold rotate-3 pointer-events-none text-sm sm:text-base">
              3+ Years Coding
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32">
        <div className="grid md:grid-cols-5 gap-6 sm:gap-8 items-center bg-neo-secondary border-4 border-neo-border p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="md:col-span-2">
            <div className="w-full h-52 sm:h-64 md:h-full min-h-[250px] md:min-h-[300px] border-4 border-neo-border bg-neo-bg shadow-neo relative overflow-hidden group">
              <img
                src={aboutImage}
                alt="Rafi"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <div className="md:col-span-3 text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading uppercase mb-5" style={{ textShadow: "3px 3px 0px black" }}>
              {t.whoIsRafi}
            </h2>
            <div className="space-y-3 font-bold text-base sm:text-lg">
              <p>
                {t.about1}
              </p>
              <p>
                {t.about2}
              </p>
            </div>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <div className="bg-neo-bg text-neo-dark border-4 border-neo-border px-3 py-2 font-black uppercase shadow-neo rotate-2 text-sm sm:text-base">
                {t.problemSolver}
              </div>
              <div className="bg-neo-primary text-black border-4 border-neo-border px-3 py-2 font-black uppercase shadow-neo -rotate-2 text-sm sm:text-base">
                {t.creativeThinker}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS MARQUEE ── */}
      <section className="border-y-4 border-neo-border bg-neo-primary py-6 sm:py-8 mb-20 md:mb-32 overflow-hidden flex whitespace-nowrap">
        <div className="flex gap-8 sm:gap-12 font-heading font-black text-2xl sm:text-4xl uppercase items-center animate-marquee text-black">
          <span>React.js</span> <span className="text-xl sm:text-2xl">★</span>
          <span>Tailwind CSS</span> <span className="text-xl sm:text-2xl">★</span>
          <span>Node.js</span> <span className="text-xl sm:text-2xl">★</span>
          <span>TypeScript</span> <span className="text-xl sm:text-2xl">★</span>
          <span>MongoDB</span> <span className="text-xl sm:text-2xl">★</span>
          <span>Laravel</span> <span className="text-xl sm:text-2xl">★</span>
          <span>Figma</span> <span className="text-xl sm:text-2xl">★</span>
          {/* Duplicate for seamless loop */}
          <span>React.js</span> <span className="text-xl sm:text-2xl">★</span>
          <span>Tailwind CSS</span> <span className="text-xl sm:text-2xl">★</span>
          <span>Node.js</span> <span className="text-xl sm:text-2xl">★</span>
          <span>TypeScript</span> <span className="text-xl sm:text-2xl">★</span>
          <span>MongoDB</span> <span className="text-xl sm:text-2xl">★</span>
          <span>Laravel</span> <span className="text-xl sm:text-2xl">★</span>
          <span>Figma</span> <span className="text-xl sm:text-2xl">★</span>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32">
        <div className="inline-block border-4 border-neo-border bg-neo-bg px-4 sm:px-6 py-2 shadow-neo mb-8 sm:mb-12 -rotate-1">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading uppercase" style={{ textShadow: "3px 3px 0px #ffe600" }}>
            {t.featuredWork}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-10">
          {portfolioList.map((project, i) => (
            <div key={project.id} className="neo-box overflow-hidden group flex flex-col">
              <div className="border-b-4 border-neo-border h-48 sm:h-72 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                />
              </div>
              <div className="p-5 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold font-heading uppercase mb-3 sm:mb-4 leading-tight">{project.title}</h3>

                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 flex-grow">
                  {project.skill.split(',').map((skill, j) => (
                    <span key={j} className="text-xs sm:text-sm font-bold bg-neo-bg border-2 border-neo-border px-2 sm:px-3 py-1 uppercase">
                      {skill.trim()}
                    </span>
                  ))}
                </div>

                <a href={project.link || "#"} target="_blank" rel="noreferrer"
                   className="text-center bg-neo-secondary text-white border-4 border-neo-border px-5 py-3 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-sm sm:text-base tracking-wide">
                  {t.viewLive}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section id="timeline" className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading uppercase mb-8 sm:mb-12" style={{ textShadow: "4px 4px 0px #ff4d4d" }}>
          {t.timeline}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            { year: "2017", title: t.highSchool, desc: t.highSchoolDesc },
            { year: "2018", title: t.college, desc: t.collegeDesc },
            { year: "2020", title: t.internship, desc: t.internshipDesc },
            { year: "2022", title: t.graduated, desc: t.graduatedDesc },
            { year: "2023", title: t.frontEndDev, desc: t.frontEndDevDesc },
            { year: "2025+", title: t.seniorLead, desc: t.seniorLeadDesc }
          ].map((item, i) => (
            <div key={i} className="neo-box p-4 sm:p-6 bg-neo-bg flex flex-col justify-between">
              <div>
                <span className="bg-neo-secondary text-white font-black px-2 sm:px-3 py-1 text-xs sm:text-sm border-2 border-neo-border inline-block mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {item.year}
                </span>
                <h3 className="text-lg sm:text-2xl font-black font-heading uppercase mb-1 sm:mb-2 leading-tight">{item.title}</h3>
                <p className="font-medium text-neo-dark opacity-70 text-sm sm:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div className="inline-block border-4 border-neo-border bg-neo-bg px-4 sm:px-6 py-2 shadow-neo rotate-1">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading uppercase" style={{ textShadow: "3px 3px 0px #ff4d4d" }}>
              {t.workHistory}
            </h2>
          </div>
          <Link to="/experience" className="neo-btn self-start sm:self-auto text-sm sm:text-base">
            {t.seeFullExperience}
          </Link>
        </div>

        {/* Timeline vertical */}
        <div className="space-y-0 relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-neo-border z-0" />

          {experiences.map((exp, i) => (
            <div key={i} className="relative flex gap-4 sm:gap-8 pb-10 last:pb-0">
              {/* Circle icon — white bg wrapper ensures icon visible in both modes */}
              <div className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-neo-border ${exp.color} shadow-neo flex items-center justify-center text-xl sm:text-2xl`}>
                <span className="flex items-center justify-center">{exp.icon}</span>
              </div>

              {/* Card */}
              <div className="flex-1 neo-box p-4 sm:p-6 bg-neo-bg hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover transition-all duration-200">
                <span className="inline-block font-bold text-neo-accent uppercase tracking-wider text-xs sm:text-sm mb-2">
                  {exp.date}
                </span>
                <h3 className="text-xl sm:text-2xl font-black font-heading uppercase leading-none mb-1 text-neo-dark">
                  {exp.role}
                </h3>
                <h4 className="text-sm sm:text-base font-bold mb-3 text-neo-dark opacity-60 uppercase">
                  @ {exp.company}
                </h4>
                <p className="font-medium text-neo-dark opacity-70 text-sm sm:text-base leading-relaxed border-t-2 border-dashed border-neo-border pt-3">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RESUME ── */}
      <section id="resume" className="border-y-4 border-neo-border py-14 sm:py-20 mb-20 md:mb-32" style={{ backgroundColor: 'var(--color-neo-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading uppercase mb-8 sm:mb-12 text-neo-dark" style={{ textShadow: "4px 4px 0px #0055ff" }}>
            {t.resume}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10">

            {/* ── Programming card — ALWAYS yellow bg ── */}
            <div className="border-4 border-neo-border shadow-neo p-6 sm:p-8" style={{ backgroundColor: '#ffe600' }}>
              <h3 className="text-2xl sm:text-3xl font-black font-heading uppercase mb-5 sm:mb-6 pb-4 text-black" style={{ borderBottom: '4px solid #000' }}>
                {t.programming}
              </h3>
              <div className="space-y-5 sm:space-y-6">
                {[
                  { name: "JavaScript", val: 85 },
                  { name: "PHP",        val: 75 },
                  { name: "Next.js",    val: 65 },
                ].map((lang, i) => (
                  <div key={i}>
                    <div className="flex justify-between font-bold uppercase mb-2 text-sm sm:text-base text-black">
                      <span>{lang.name}</span>
                      <span>{lang.val}%</span>
                    </div>
                    {/* Track */}
                    <div className="w-full h-5 border-2 border-black" style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}>
                      {/* Fill */}
                      <div className="h-full" style={{ width: `${lang.val}%`, backgroundColor: '#1a1a1a' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Soft Skills card ── */}
            <div className="border-4 border-neo-border shadow-neo p-6 sm:p-8" style={{ backgroundColor: 'var(--color-neo-bg)' }}>
              <h3 className="text-2xl sm:text-3xl font-black font-heading uppercase mb-5 sm:mb-6 pb-4 text-neo-dark" style={{ borderBottom: '4px solid var(--color-neo-border)' }}>
                {t.softSkills}
              </h3>
              <ul className="space-y-5 font-bold text-base sm:text-lg uppercase text-neo-dark">
                {[
                  { label: t.communication,  emoji: '💬' },
                  { label: t.teamwork,       emoji: '🤝' },
                  { label: t.problemSolving,emoji: '🧠' },
                ].map((skill, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span
                      className="w-10 h-10 flex items-center justify-center border-2 border-neo-border text-xl flex-shrink-0"
                      style={{ backgroundColor: '#ffe600' }}
                    >
                      {skill.emoji}
                    </span>
                    {skill.label}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── AGENCY ── */}
      <section id="agency" className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32">
        <div className="border-4 border-neo-border bg-[#1a1a1a] shadow-neo p-8 sm:p-12 text-white flex flex-col md:flex-row items-center gap-8 sm:gap-12 relative overflow-hidden group">
          {/* Abstract BG */}
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-neo-accent border-4 border-white rounded-full translate-x-1/3 -translate-y-1/3"></div>

          <div className="flex-1 relative z-10 text-center md:text-left">
            <div className="inline-block px-4 py-1 font-bold border-2 border-white mb-5 uppercase tracking-wider text-[#ffe600]">
              {t.founder}
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading uppercase mb-5" style={{ textShadow: "3px 3px 0px #0055ff" }}>
              GapaiDigital
            </h2>
            <p className="text-base sm:text-xl font-medium mb-8 max-w-lg border-l-4 border-[#ffe600] pl-6 mx-auto md:mx-0">
              {t.agencyDesc}
            </p>
            <a href="https://gapaidigital.vercel.app/" target="_blank" rel="noreferrer" className="inline-block bg-[#ffe600] text-black border-4 border-white px-6 sm:px-8 py-3 sm:py-4 font-black uppercase shadow-[4px_4px_0px_0px_#ffffff] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#ffffff] transition-all text-sm sm:text-base">
              {t.exploreAgency}
            </a>
          </div>

          <div className="flex-shrink-0 relative z-10">
            <div className="w-48 h-48 sm:w-64 sm:h-64 bg-neo-bg border-4 border-neo-border p-6 sm:p-8 flex items-center justify-center rotate-3 group-hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              <img src={gapaiLogo} alt="Gapai Digital" className="w-full h-full object-contain filter drop-shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 mb-20 md:mb-32 text-center">
        <div className="bg-neo-accent border-4 border-neo-border p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative rotate-1">
          <div className="absolute -top-5 -left-5 bg-neo-primary border-4 border-neo-border w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-neo flex items-center justify-center text-2xl sm:text-3xl">
            💬
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading uppercase text-white mb-5" style={{ textShadow: "4px 4px 0px black" }}>
            {t.contactTitle}
          </h2>
          <p className="text-base sm:text-xl text-white font-medium mb-8 max-w-2xl mx-auto">
            {t.contactDesc}
          </p>

          <a href="https://www.linkedin.com/in/rafi-rachmawan-2a8728233/" target="_blank" rel="noreferrer" className="inline-block bg-[#fdfdfd] text-[#1a1a1a] border-4 border-[#1a1a1a] px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-xl font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] transition-all -rotate-2">
            {t.sayHello}
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t-4 border-neo-border bg-neo-primary py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="font-bold uppercase tracking-wider text-sm sm:text-base">© {new Date().getFullYear()} Rafi Rachmawan.</p>
          <p className="font-bold uppercase bg-neo-bg border-2 border-neo-border px-3 sm:px-4 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm sm:text-base">
            {t.designedWith}
          </p>
        </div>
      </footer>
    </div>
  );
}
