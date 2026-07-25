import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { portfolioList } from "../components/data/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs, FaReact, FaLaravel } from "react-icons/fa";
import gapaiLogo from "../assets/GapaiDigitalIcon.png";
import gapaiScreenshot from "../assets/gapaidigital/gapaidigital.jpg";
import heroImage from "../assets/foto-normal-remove.png";
import aboutImage from "../assets/profil.jpeg";
import smanImage from "../assets/sman1boyolangu/sman1boyolangu.jpg";
import polinemaImage from "../assets/politeknikNegeriMalang/politeknikNegeriMalang.jpg";
import binarImage from "../assets/binarAcademy/binarAcademy.jpg";
import Navbar from "../components/navbar";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].home;
  const [selectedTimelineItem, setSelectedTimelineItem] = useState(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedTimelineItem) {
      document.documentElement.classList.add("modal-open");
      document.body.classList.add("modal-open");
    } else {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
    };
  }, [selectedTimelineItem]);

  const timelineData = [
    {
      year: "2017 - 2019",
      title: "SMAN 1 Boyolangu",
      desc: "Bersekolah di SMAN 1 Boyolangu.",
      longDesc:
        "Menempuh pendidikan sekolah menengah atas di SMAN 1 Boyolangu. Masa ini menjadi titik awal perjalanan dan pengembangan diri saya, di mana saya mulai mengenal dunia teknologi dan komputer.",
      color: "bg-[#00d084]",
      image: smanImage,
      link: "https://sman1boyolangu.sch.id/",
    },
    {
      year: "2019 - 2023",
      title: "Politeknik Negeri Malang",
      desc: "Kuliah Teknik Informatika.",
      longDesc:
        "Menempuh jenjang pendidikan tinggi di Politeknik Negeri Malang, jurusan Teknik Informatika. Di sini saya mempelajari fundamental pemrograman, basis data, rekayasa perangkat lunak, dan memulai membangun proyek-proyek pertama saya.",
      color: "bg-[#0055ff]",
      image: polinemaImage,
      link: "https://ppid.polinema.ac.id/",
    },
    {
      year: "2023 - 2024",
      title: "Lulus & Bootcamp Binar",
      desc: "Lulus kuliah dan lanjut Binar Academy.",
      longDesc:
        "Setelah lulus dari Politeknik Negeri Malang, saya langsung melanjutkan ke program intensive bootcamp di Binar Academy. Di sini saya memperdalam praktik industri nyata, modern web development, dan kolaborasi tim secara profesional.",
      color: "bg-[#ff4d4d]",
      image: binarImage,
      link: "https://www.binar.co.id/",
    },
    {
      year: "2025 ++",
      title: "Frontend & Fullstack Dev",
      desc: "Karir profesional sebagai developer.",
      longDesc:
        "Membangun karir profesional sebagai Frontend dan Fullstack Developer. Fokus pada pembuatan aplikasi web modern berskala besar, performa tinggi, dan pengalaman pengguna yang responsif. Juga mendirikan GapaiDigital sebagai startup digitalisasi.",
      color: "bg-[#ffe600]",
      image: gapaiScreenshot,
    },
  ];

  const experiences = t.experiences.map((exp, index) => {
    let icon, color;
    switch (index) {
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
    <>
      <div className="bg-neo-bg min-h-screen font-body text-neo-dark selection:bg-neo-primary selection:text-black">
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
                {t.rolePrefix} <br />
                <span
                  className="text-neo-accent"
                  style={{ textShadow: "4px 4px 0px var(--color-neo-border)" }}
                >
                  {t.roleSuffix}
                </span>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl font-medium mb-8 max-w-lg border-l-4 border-neo-border pl-4 sm:pl-6 bg-neo-bg p-3 sm:p-4 shadow-neo">
                {t.description}
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a href="#projects" className="neo-btn text-base sm:text-lg">
                  {t.viewProjects}
                </a>
                <div className="flex gap-3">
                  {[
                    {
                      icon: faGithub,
                      link: "https://github.com/rafirachmawan",
                      color: "bg-neo-dark text-neo-bg",
                    },
                    {
                      icon: faLinkedin,
                      link: "https://www.linkedin.com/in/rafi-rachmawan-2a8728233/",
                      color: "bg-[#0A66C2] text-white",
                    },
                    {
                      icon: faInstagram,
                      link: "https://www.instagram.com/rrrafi.rachmawan/",
                      color: "bg-[#E4405F] text-white",
                    },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-4 border-neo-border shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover transition-all text-xl sm:text-2xl ${social.color}`}
                    >
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
              <div
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-neo-secondary border-4 border-neo-border shadow-neo rounded-full z-20 animate-bounce"
                style={{ animationDuration: "3s" }}
              ></div>

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
        <section
          id="about"
          className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32"
        >
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
            <div className="md:col-span-3 text-white relative">
              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-16 h-16 md:w-24 md:h-24 bg-neo-primary border-4 border-neo-border flex items-center justify-center rounded-full z-0 opacity-80 animate-[spin_10s_linear_infinite] shadow-neo">
                <span className="text-4xl md:text-5xl text-black">❋</span>
              </div>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black font-heading uppercase mb-5 w-max relative z-10 glitch-hover transition-all cursor-default"
                style={{ textShadow: "3px 3px 0px black" }}
              >
                {t.whoIsRafi}
              </h2>
              <div className="space-y-3 font-bold text-base sm:text-lg relative z-10">
                <p className="border-l-4 border-white pl-4 bg-neo-dark/20 p-2">
                  {t.about1}
                </p>
                <p>{t.about2}</p>
              </div>

              <div className="flex flex-col gap-8 relative z-10 mt-6 sm:mt-8">
                <div className="flex gap-3 flex-wrap">
                  <div className="bg-neo-bg text-neo-dark border-4 border-neo-border px-3 py-2 font-black uppercase shadow-neo rotate-2 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-neo-lg hover:rotate-0 transition-all cursor-default text-sm sm:text-base">
                    {t.problemSolver}
                  </div>
                  <div className="bg-neo-primary text-black border-4 border-neo-border px-3 py-2 font-black uppercase shadow-neo -rotate-2 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-neo-lg hover:rotate-0 transition-all cursor-default text-sm sm:text-base">
                    {t.creativeThinker}
                  </div>
                </div>

                <div className="w-max">
                  <a
                    href="/CV RAFI RACHMAWAN  TERBARU.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="neo-btn flex items-center gap-2 group text-sm sm:text-base">
                      DOWNLOAD CV
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-y-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SKILLS MARQUEE ── */}
        <section className="border-y-4 border-neo-border bg-neo-primary py-6 sm:py-8 mb-20 md:mb-32 overflow-hidden flex whitespace-nowrap">
          <div className="flex gap-8 sm:gap-12 font-heading font-black text-2xl sm:text-4xl uppercase items-center animate-marquee text-black">
            <span>React.js</span> <span className="text-xl sm:text-2xl">★</span>
            <span>Tailwind CSS</span>{" "}
            <span className="text-xl sm:text-2xl">★</span>
            <span>Node.js</span> <span className="text-xl sm:text-2xl">★</span>
            <span>TypeScript</span>{" "}
            <span className="text-xl sm:text-2xl">★</span>
            <span>MongoDB</span> <span className="text-xl sm:text-2xl">★</span>
            <span>Laravel</span> <span className="text-xl sm:text-2xl">★</span>
            <span>Figma</span> <span className="text-xl sm:text-2xl">★</span>
            {/* Duplicate for seamless loop */}
            <span>React.js</span> <span className="text-xl sm:text-2xl">★</span>
            <span>Tailwind CSS</span>{" "}
            <span className="text-xl sm:text-2xl">★</span>
            <span>Node.js</span> <span className="text-xl sm:text-2xl">★</span>
            <span>TypeScript</span>{" "}
            <span className="text-xl sm:text-2xl">★</span>
            <span>MongoDB</span> <span className="text-xl sm:text-2xl">★</span>
            <span>Laravel</span> <span className="text-xl sm:text-2xl">★</span>
            <span>Figma</span> <span className="text-xl sm:text-2xl">★</span>
          </div>
        </section>

        {/* ── GAPAIDIGITAL FOUNDER SPOTLIGHT (BENTO GRID) ── */}
        <section
          id="agency"
          className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32"
        >
          {/* Top Marquee Bar */}
          <div className="w-full bg-[#f97316] border-4 border-b-0 border-neo-border py-2 overflow-hidden flex items-center shadow-none">
            <div className="whitespace-nowrap animate-marquee flex gap-4 text-black font-black uppercase text-sm tracking-widest">
              {Array(10)
                .fill(
                  "⚡ FOUNDER & CEO • GAPAIDIGITAL • DIGITALIZATION STARTUP ",
                )
                .map((text, i) => (
                  <span key={i}>{text}</span>
                ))}
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-neo-border shadow-[12px_12px_0px_0px_#f97316]">

            {/* Row 1: Screenshot (2/3) + Founder Info (1/3) */}
            {/* Screenshot Box */}
            <div className="md:col-span-2 relative overflow-hidden h-64 sm:h-80 md:h-[380px] border-b-4 md:border-b-0 md:border-r-4 border-neo-border group/img">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-[#f97316]/0 group-hover/img:bg-[#f97316]/15 transition-all duration-500 z-10 pointer-events-none mix-blend-overlay" />
              {/* Star */}
              <div className="absolute top-4 right-4 z-20 text-[#ffe600] font-black text-5xl drop-shadow-[4px_4px_0px_#000] rotate-12 group-hover/img:rotate-45 transition-transform duration-500 pointer-events-none select-none">
                ✦
              </div>
              <img
                src={gapaiScreenshot}
                alt="GapaiDigital – Indonesia Digitalization Startup"
                className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
              />
              {/* Live badge */}
              <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 bg-[#f97316] border-4 border-neo-border px-4 py-2 font-black uppercase text-black text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse inline-block border border-black" />
                LIVE STARTUP
              </div>
            </div>

            {/* Founder Info Box */}
            <div
              className="flex flex-col justify-between p-7 sm:p-8 border-b-4 md:border-b-0 border-neo-border"
              style={{
                backgroundColor: "#111111",
                backgroundImage: "radial-gradient(#2a2a2a 2px, transparent 2px)",
                backgroundSize: "22px 22px",
              }}
            >
              {/* Logo + Tag */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-[#f97316] border-4 border-neo-border flex items-center justify-center p-1.5 shadow-[4px_4px_0px_0px_#ffe600] -rotate-3 hover:rotate-0 transition-transform flex-shrink-0">
                    <img src={gapaiLogo} alt="GapaiDigital Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="bg-[#ffe600] border-2 border-neo-border px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black">
                    Founder &amp; CEO
                  </span>
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-black font-heading uppercase text-white leading-none tracking-tight mb-4"
                  style={{ textShadow: "3px 3px 0px #f97316" }}
                >
                  GapaiDigital
                </h2>
                <p className="text-white/80 font-medium text-sm leading-relaxed border-l-4 border-[#f97316] pl-3">
                  {language === "id"
                    ? "Saya mendirikan GapaiDigital — startup digitalisasi yang membantu bisnis berkembang melalui Landing Page, Mobile App, dan Custom Web System yang modern dan skalabel."
                    : "I founded GapaiDigital — a digitalization startup helping businesses grow through modern Landing Pages, Mobile Apps, and Custom Web Systems at scale."}
                </p>
              </div>
            </div>

            {/* Row 2: Stats (1/3) + CTA wide (2/3) */}
            {/* Stats Box */}
            <div
              className="border-t-4 md:border-r-4 border-neo-border p-6 sm:p-8 flex flex-col justify-center gap-3"
              style={{ backgroundColor: "#0f0f0f" }}
            >
              <p className="text-[#f97316] font-black uppercase text-xs tracking-widest mb-2">— Stats</p>
              <div className="flex gap-3 flex-wrap">
                <div className="flex-1 min-w-[70px] text-center border-4 border-neo-border p-3 bg-[#ffe600] text-black shadow-[4px_4px_0px_0px_#f97316] rotate-2 hover:-translate-y-2 hover:rotate-0 transition-all">
                  <div className="text-2xl font-black font-heading">5.0</div>
                  <div className="text-[10px] font-black uppercase">Rating</div>
                </div>
                <div className="flex-1 min-w-[70px] text-center border-4 border-neo-border p-3 bg-[#0055ff] text-white shadow-[4px_4px_0px_0px_#f97316] -rotate-2 hover:-translate-y-2 hover:rotate-0 transition-all">
                  <div className="text-2xl font-black font-heading">10+</div>
                  <div className="text-[10px] font-black uppercase">Projects</div>
                </div>
                <div className="flex-1 min-w-[70px] text-center border-4 border-neo-border p-3 bg-[#ff4d4d] text-white shadow-[4px_4px_0px_0px_#f97316] rotate-1 hover:-translate-y-2 hover:rotate-0 transition-all">
                  <div className="text-2xl font-black font-heading">100%</div>
                  <div className="text-[10px] font-black uppercase">Clients</div>
                </div>
              </div>
            </div>

            {/* CTA Box — spans 2 cols */}
            <div className="md:col-span-2 border-t-4 border-neo-border bg-[#f97316] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div>
                <p className="text-black/60 font-bold uppercase text-xs tracking-widest mb-1">
                  {language === "id" ? "Ingin kolaborasi?" : "Want to collaborate?"}
                </p>
                <p className="text-black font-black text-xl sm:text-2xl uppercase leading-tight">
                  {language === "id"
                    ? "Kunjungi startup saya →"
                    : "Check out my startup →"}
                </p>
              </div>
              <a
                href="https://gapaidigital.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 flex items-center justify-center gap-3 border-4 border-neo-border bg-black px-8 py-4 font-black uppercase text-sm tracking-widest text-white transition-all duration-200 hover:translate-x-1 hover:translate-y-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none whitespace-nowrap"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                {language === "id" ? "Kunjungi GapaiDigital" : "Visit GapaiDigital"}
              </a>
            </div>

          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section
          id="projects"
          className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
            <div className="inline-block border-4 border-neo-border bg-neo-bg px-4 sm:px-6 py-2 shadow-neo -rotate-1">
              <h2
                className="text-4xl sm:text-5xl md:text-7xl font-black font-heading uppercase"
                style={{ textShadow: "3px 3px 0px #ffe600" }}
              >
                {t.featuredWork}
              </h2>
            </div>
            <Link
              to="/projects"
              className="neo-btn self-start sm:self-auto text-sm sm:text-base"
            >
              {language === "id" ? "Semua Proyek →" : "All Projects →"}
            </Link>
          </div>

          {/* ── FEATURED CARD (project #1) ── */}
          {(() => {
            const featured = portfolioList.find((p) => p.featured);
            if (!featured) return null;
            return (
              <div className="neo-box overflow-hidden group mb-8 sm:mb-12 flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-3/5 border-b-4 lg:border-b-0 lg:border-r-4 border-neo-border h-64 sm:h-80 lg:h-auto overflow-hidden bg-[#0f0f0f] relative p-4 flex items-center justify-center">
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4 z-10 bg-neo-primary border-4 border-neo-border px-3 py-1 font-black uppercase text-xs sm:text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-2">
                    ★ Featured
                  </div>
                  {/* Project number */}
                  <div className="absolute bottom-4 right-4 z-10 font-black font-heading text-7xl sm:text-9xl text-white/10 leading-none select-none pointer-events-none">
                    01
                  </div>
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>

                {/* Content */}
                <div className="lg:w-2/5 p-6 sm:p-10 flex flex-col justify-between bg-neo-bg">
                  <div>
                    {/* Category + Year */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-black uppercase bg-neo-accent text-white border-2 border-neo-border px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {featured.category}
                      </span>
                      <span className="text-xs font-bold uppercase bg-neo-primary border-2 border-neo-border px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {featured.year}
                      </span>
                    </div>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-neo-dark opacity-50 mb-2">
                      {featured.subtitle}
                    </p>

                    {/* Title */}
                    <h3
                      className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading uppercase leading-tight mb-4"
                      style={{ textShadow: "2px 2px 0px #ffe600" }}
                    >
                      {featured.title}
                    </h3>

                    {/* Description */}
                    <p className="font-medium text-neo-dark opacity-70 text-sm sm:text-base leading-relaxed border-l-4 border-neo-primary pl-4 mb-6">
                      {featured.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featured.skill.split(",").map((skill, j) => {
                        const colors = [
                          "bg-[#61dafb] border-neo-border text-black",
                          "bg-neo-secondary border-neo-border text-white",
                          "bg-neo-dark border-neo-border text-neo-bg",
                          "bg-[#ff4d4d] border-neo-border text-white",
                          "bg-[#00d084] border-neo-border text-black",
                        ];
                        return (
                          <span
                            key={j}
                            className={`text-xs font-black uppercase border-2 px-2 sm:px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${colors[j % colors.length]}`}
                          >
                            {skill.trim()}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={featured.link || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 bg-neo-dark text-neo-bg border-4 border-neo-border px-6 py-4 font-black uppercase text-sm sm:text-base shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all tracking-wide"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    {featured.link && featured.link.includes("github.com")
                      ? language === "id"
                        ? "Lihat di GitHub"
                        : "View on GitHub"
                      : language === "id"
                        ? "Kunjungi Aplikasi"
                        : "Visit App"}
                  </a>
                </div>
              </div>
            );
          })()}

          {/* ── GRID (projects #2–6) ── */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {portfolioList
              .filter((p) => !p.featured)
              .map((project, i) => {
                const tagColors = [
                  "bg-[#61dafb] text-black",
                  "bg-neo-secondary text-white",
                  "bg-neo-dark text-neo-bg",
                  "bg-[#ff4d4d] text-white",
                  "bg-[#00d084] text-black",
                ];
                const catColor =
                  project.category === "Website"
                    ? "bg-neo-primary text-black"
                    : "bg-neo-accent text-white";

                return (
                  <div
                    key={project.id}
                    className="neo-box overflow-hidden group flex flex-col"
                  >
                    {/* Image */}
                    <div className="border-b-4 border-neo-border h-48 sm:h-56 overflow-hidden bg-gray-200 relative">
                      {/* Brutalist number */}
                      <div className="absolute top-3 left-3 z-10 font-black font-heading text-6xl text-white/15 leading-none select-none pointer-events-none">
                        {String(i + 2).padStart(2, "0")}
                      </div>
                      {/* Category badge */}
                      <div
                        className={`absolute top-3 right-3 z-10 text-xs font-black uppercase border-2 border-neo-border px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${catColor}`}
                      >
                        {project.category}
                      </div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                      <p className="text-xs font-bold uppercase tracking-widest text-neo-dark opacity-40 mb-1">
                        {project.subtitle} · {project.year}
                      </p>
                      <h3 className="text-lg sm:text-xl font-black font-heading uppercase leading-tight mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-neo-dark opacity-60 leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.skill.split(",").map((skill, j) => (
                          <span
                            key={j}
                            className={`text-xs font-black uppercase border-2 border-neo-border px-2 py-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] ${tagColors[j % tagColors.length]}`}
                          >
                            {skill.trim()}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <a
                        href={project.link || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="text-center bg-neo-bg text-neo-dark border-4 border-neo-border px-4 py-2.5 font-bold uppercase text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-neo-primary hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all tracking-wide"
                      >
                        {t.viewLive}
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section
          id="timeline"
          className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32"
        >
          <div className="flex justify-center mb-12 sm:mb-20">
            <h2
              className="text-4xl sm:text-5xl md:text-7xl font-black font-heading uppercase inline-block border-4 border-neo-border bg-[#ffe600] px-6 py-2 shadow-[8px_8px_0px_0px_#ff4d4d] -rotate-2"
              style={{ color: "#000" }}
            >
              {t.timeline}
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto py-10">
            {/* Vertical center line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-2 sm:w-3 bg-neo-border -translate-x-1/2 z-0" />

            {timelineData.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-center mb-12 sm:mb-20 last:mb-0 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Node */}
                <div className="absolute left-6 md:left-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white border-4 border-neo-border rounded-full -translate-x-1/2 z-20 shadow-[4px_4px_0px_0px_#000] flex items-center justify-center">
                  <div
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-neo-border ${item.color}`}
                  />
                </div>

                {/* Content Box */}
                <div
                  className={`w-full pl-16 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 lg:pr-16 md:text-right" : "md:pl-12 lg:pl-16"}`}
                >
                  <div
                    onClick={() => setSelectedTimelineItem(item)}
                    className="neo-box p-6 sm:p-8 bg-neo-bg relative group hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
                  >
                    {/* Connecting line */}
                    <div
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 lg:w-16 h-2 sm:h-3 bg-neo-border z-0 ${i % 2 === 0 ? "-right-12 lg:-right-16" : "-left-12 lg:-left-16"}`}
                    />

                    {/* Arrow indicator */}
                    <div
                      className={`absolute top-4 ${i % 2 === 0 ? "left-4" : "right-4"} opacity-0 group-hover:opacity-100 transition-opacity font-black text-neo-accent text-xl`}
                    >
                      ↗
                    </div>

                    {/* Year Badge */}
                    <span
                      className={`text-black font-black px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border-4 border-neo-border inline-block mb-4 shadow-[4px_4px_0px_0px_#000] ${item.color} ${i % 2 === 0 ? "md:ml-auto" : ""}`}
                    >
                      {item.year}
                    </span>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-heading uppercase mb-2 sm:mb-3 leading-tight text-neo-border">
                      {item.title}
                    </h3>
                    <p className="font-medium text-neo-dark opacity-80 text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section
          id="experience"
          className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
            <div className="inline-block border-4 border-neo-border bg-neo-bg px-4 sm:px-6 py-2 shadow-neo rotate-1">
              <h2
                className="text-4xl sm:text-5xl md:text-7xl font-black font-heading uppercase"
                style={{ textShadow: "3px 3px 0px #ff4d4d" }}
              >
                {t.workHistory}
              </h2>
            </div>
            <Link
              to="/experience"
              className="neo-btn self-start sm:self-auto text-sm sm:text-base"
            >
              {t.seeFullExperience}
            </Link>
          </div>

          {/* Timeline vertical */}
          <div className="space-y-0 relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-neo-border z-0" />

            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative flex gap-4 sm:gap-8 pb-10 last:pb-0"
              >
                {/* Circle icon — white bg wrapper ensures icon visible in both modes */}
                <div
                  className={`relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-neo-border ${exp.color} shadow-neo flex items-center justify-center text-xl sm:text-2xl`}
                >
                  <span className="flex items-center justify-center">
                    {exp.icon}
                  </span>
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
        <section
          id="resume"
          className="border-y-4 border-neo-border py-14 sm:py-20 mb-20 md:mb-32"
          style={{ backgroundColor: "var(--color-neo-bg)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2
              className="text-4xl sm:text-5xl md:text-7xl font-black font-heading uppercase mb-8 sm:mb-12 text-neo-dark"
              style={{ textShadow: "4px 4px 0px #0055ff" }}
            >
              {t.resume}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
              {/* ── Programming card — ALWAYS yellow bg ── */}
              <div
                className="border-4 border-neo-border shadow-neo p-6 sm:p-8"
                style={{ backgroundColor: "#ffe600" }}
              >
                <h3
                  className="text-2xl sm:text-3xl font-black font-heading uppercase mb-5 sm:mb-6 pb-4 text-black"
                  style={{ borderBottom: "4px solid #000" }}
                >
                  {t.programming}
                </h3>
                <div className="space-y-5 sm:space-y-6">
                  {[
                    { name: "JavaScript", val: 85 },
                    { name: "PHP", val: 75 },
                    { name: "Next.js", val: 65 },
                  ].map((lang, i) => (
                    <div key={i}>
                      <div className="flex justify-between font-bold uppercase mb-2 text-sm sm:text-base text-black">
                        <span>{lang.name}</span>
                        <span>{lang.val}%</span>
                      </div>
                      {/* Track */}
                      <div
                        className="w-full h-5 border-2 border-black"
                        style={{ backgroundColor: "rgba(0,0,0,0.15)" }}
                      >
                        {/* Fill */}
                        <div
                          className="h-full"
                          style={{
                            width: `${lang.val}%`,
                            backgroundColor: "#1a1a1a",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Soft Skills card ── */}
              <div
                className="border-4 border-neo-border shadow-neo p-6 sm:p-8"
                style={{ backgroundColor: "var(--color-neo-bg)" }}
              >
                <h3
                  className="text-2xl sm:text-3xl font-black font-heading uppercase mb-5 sm:mb-6 pb-4 text-neo-dark"
                  style={{ borderBottom: "4px solid var(--color-neo-border)" }}
                >
                  {t.softSkills}
                </h3>
                <ul className="space-y-5 font-bold text-base sm:text-lg uppercase text-neo-dark">
                  {[
                    { label: t.communication, emoji: "💬" },
                    { label: t.teamwork, emoji: "🤝" },
                    { label: t.problemSolving, emoji: "🧠" },
                  ].map((skill, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span
                        className="w-10 h-10 flex items-center justify-center border-2 border-neo-border text-xl flex-shrink-0"
                        style={{ backgroundColor: "#ffe600" }}
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

        {/* ── CONTACT ── */}
        <section
          id="contact"
          className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32"
        >
          {/* Top Row: Big CTA + Status Stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-4 md:mb-5">

            {/* Main CTA Box — 2 cols */}
            <div className="md:col-span-2 border-4 border-neo-border bg-neo-secondary p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[260px] relative overflow-hidden">
              {/* decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-neo-primary border-l-4 border-b-4 border-neo-border flex items-center justify-center text-3xl select-none">
                ✦
              </div>
              <div>
                <p className="text-white/60 font-bold uppercase tracking-widest text-sm mb-3">— Let's collaborate</p>
                <h2
                  className="text-4xl sm:text-5xl md:text-7xl font-black font-heading uppercase text-white leading-none"
                  style={{ textShadow: "4px 4px 0px black" }}
                >
                  {t.contactTitle.split("!")[0]}
                  <span className="text-neo-primary">!</span>
                </h2>
              </div>
              <p className="text-white font-bold text-lg border-l-4 border-neo-primary pl-4 max-w-lg mt-6">
                {t.contactDesc}
              </p>
            </div>

            {/* Right: Status + Location stacked */}
            <div className="flex flex-col gap-4 md:gap-5">
              {/* Status */}
              <div className="border-4 border-neo-border bg-neo-primary p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-1 flex flex-col justify-center">
                <p className="font-bold uppercase tracking-widest text-xs text-neo-dark/60 mb-2">
                  {language === "id" ? "Tersedia untuk Freelance" : "Available for Freelance"}
                </p>
                <p className="font-black text-2xl text-neo-dark uppercase">
                  {language === "id" ? "Siap Bekerja ✅" : "Open to Work ✅"}
                </p>
              </div>
              {/* Location */}
              <div className="border-4 border-neo-border bg-neo-bg p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-1 flex flex-col justify-center">
                <p className="font-bold uppercase tracking-widest text-xs text-neo-dark/60 mb-2">Based In</p>
                <p className="font-black text-2xl text-neo-dark uppercase">📍 Indonesia</p>
              </div>
            </div>
          </div>

          {/* Bottom Row: Say Hello dark box (full width) */}
          <div className="border-4 border-neo-border bg-neo-dark p-7 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-neo-bg/60 font-bold uppercase text-xs tracking-widest mb-1">
                {language === "id" ? "Atau hubungi saya langsung:" : "Or reach me directly:"}
              </p>
              <p className="text-neo-bg font-black text-xl sm:text-2xl uppercase">
                {language === "id" ? "WhatsApp · Email" : "WhatsApp · Email"}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://wa.me/6285707185783?text=Halo%20Rafi%2C%20saya%20melihat%20website%20Anda%20dan%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-neo-primary border-4 border-neo-border px-6 py-3 font-black uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-neo-dark text-sm"
              >
                {t.sayHello} — WhatsApp
              </a>
              <a
                href="mailto:rafirachmawan1987@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-neo-bg border-4 border-neo-border px-6 py-3 font-black uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-neo-dark text-sm"
              >
                Email ✉️
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t-4 border-neo-border bg-neo-primary py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="font-bold uppercase tracking-wider text-sm sm:text-base">
              © {new Date().getFullYear()} Rafi Rachmawan.
            </p>
            <p className="font-bold uppercase bg-neo-bg border-2 border-neo-border px-3 sm:px-4 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-sm sm:text-base">
              {t.designedWith}
            </p>
          </div>
        </footer>
      </div>

      {/* ── TIMELINE MODAL ── */}
      {selectedTimelineItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedTimelineItem(null)}
        >
          <div
            className="bg-neo-bg border-4 border-neo-border shadow-[12px_12px_0px_0px_#000] max-w-2xl w-full relative max-h-[90vh] overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedTimelineItem(null)}
              className="absolute top-4 right-4 z-10 bg-[#ff4d4d] text-white w-10 h-10 flex items-center justify-center border-4 border-neo-border font-black text-xl shadow-[2px_2px_0px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              ✕
            </button>

            {/* Image */}
            <div className="w-full h-32 sm:h-48 border-b-4 border-neo-border bg-[#111111] overflow-hidden flex-shrink-0">
              <img
                src={selectedTimelineItem.image}
                alt={selectedTimelineItem.title}
                className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              <span
                className={`text-black font-black px-3 py-1 border-4 border-neo-border inline-block mb-3 shadow-[3px_3px_0px_0px_#000] ${selectedTimelineItem.color}`}
              >
                {selectedTimelineItem.year}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-heading uppercase mb-2 text-neo-border leading-tight">
                {selectedTimelineItem.title}
              </h2>
              <div className="w-12 h-1.5 bg-neo-border mb-4" />
              <p className="text-neo-dark opacity-80 font-medium text-sm sm:text-base leading-relaxed mb-4">
                {selectedTimelineItem.longDesc}
              </p>
              {selectedTimelineItem.link && (
                <a
                  href={selectedTimelineItem.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#f97316] text-black border-4 border-neo-border px-4 py-2 font-black uppercase text-sm shadow-[3px_3px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                >
                  Kunjungi Situs{" "}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
