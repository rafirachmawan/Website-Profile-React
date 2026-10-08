import React, { useState } from "react";
import { Link } from "react-router-dom";
import { portfolioList } from "../components/data/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import heroImage from "../assets/foto-normal-remove.png";
import aboutImage from "../assets/profil.jpeg";
import gapaiLogo from "../assets/GapaiDigitalIcon.png";
import gapaiScreenshot from "../assets/gapaidigital/gapaidigital.jpg";
import Navbar from "../components/navbar";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

const services = [
  {
    id: "01",
    title: "Frontend Development",
    desc: "React, Next.js & Tailwind — fast, responsive interfaces with clean, maintainable code.",
    tags: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    id: "02",
    title: "Fullstack Web Apps",
    desc: "End-to-end apps: auth, database, dashboards. Supabase, Firebase, Postgres & Express.",
    tags: ["Supabase", "Firebase", "Postgres", "Express"],
  },
  {
    id: "03",
    title: "Company & Landing Pages",
    desc: "High-converting landing pages for startups & businesses — SEO-friendly and blazing fast.",
    tags: ["Landing Page", "SEO", "Vite"],
  },
  {
    id: "04",
    title: "Dashboard & Admin Systems",
    desc: "Booking systems, attendance apps, recaps — real-time data with role-based access.",
    tags: ["Dashboard", "Realtime", "Multi-branch"],
  },
  {
    id: "05",
    title: "API Integration & Deployment",
    desc: "REST APIs, third-party integrations, and smooth deploys to Vercel / Firebase / VPS.",
    tags: ["REST API", "Vercel", "Firebase"],
  },
];

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].home;
  const [openService, setOpenService] = useState(1);

  return (
    <div className="bg-[#fffaf0] min-h-screen font-body text-[#161616] selection:bg-[#ff9e00] selection:text-black">
      <Navbar />

      {/* ── HERO ── */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-black/10 rounded-full pl-1.5 pr-4 py-1.5 text-[12px] font-semibold shadow-sm mb-6">
          <span className="bg-[#161616] text-white rounded-full px-2.5 py-1 text-[11px]">✦</span>
          {t.freelance}
        </div>

        <h1 className="font-heading font-extrabold tracking-tight leading-[1.02] text-4xl sm:text-6xl md:text-7xl">
          I&apos;m <span className="text-[#ff9e00]">Rafi Rachmawan</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-black/60 font-medium">
          {t.rolePrefix} {t.roleSuffix} based in Indonesia
        </p>

        {/* Hero 3-col */}
        <div className="mt-10 grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center text-left">
          {/* Left */}
          <div className="order-2 md:order-1 flex md:flex-col items-center md:items-start justify-between md:justify-center gap-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-black/40 mb-3">Follow Me On</p>
              <div className="flex gap-2">
                {[
                  { icon: faGithub, link: "https://github.com/rafirachmawan" },
                  { icon: faLinkedin, link: "https://www.linkedin.com/in/rafi-rachmawan-2a8728233/" },
                  { icon: faInstagram, link: "https://www.instagram.com/rrrafi.rachmawan/" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white border border-black/10 flex items-center justify-center hover:bg-[#161616] hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={s.icon} />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((n) => (
                  <img
                    key={n}
                    src={aboutImage}
                    alt="client"
                    className="w-8 h-8 rounded-full border-2 border-[#fffaf0] object-cover"
                  />
                ))}
              </div>
              <div className="text-[12px] leading-tight">
                <div className="flex items-center gap-1 font-bold">
                  5.0 <FontAwesomeIcon icon={faStar} className="text-[#ff9e00] text-[11px]" />
                  <FontAwesomeIcon icon={faStar} className="text-[#ff9e00] text-[11px]" />
                  <FontAwesomeIcon icon={faStar} className="text-[#ff9e00] text-[11px]" />
                </div>
                <p className="text-black/50 font-medium">Reviews from valued clients</p>
              </div>
            </div>
          </div>

          {/* Center photo */}
          <div className="order-1 md:order-2 justify-self-center relative">
            <div className="w-64 h-72 sm:w-80 sm:h-[22rem] rounded-t-full rounded-b-[2rem] overflow-hidden bg-[#ffe3b3] border-[6px] border-white shadow-[0_24px_60px_rgba(0,0,0,0.12)] mx-auto">
              <img src={heroImage} alt="Rafi Rachmawan" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white rounded-full pl-2 pr-2 py-1.5 shadow-lg border border-black/5 whitespace-nowrap">
              <a href="#projects" className="bg-[#ff9e00] text-black text-[13px] font-bold rounded-full px-5 py-2">
                {language === "id" ? "Portofolio" : "Portfolio"}
              </a>
              <a
                href="https://wa.me/6285707185783"
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-bold rounded-full px-5 py-2 border border-black/10 hover:bg-black hover:text-white transition-colors"
              >
                Hire Me
              </a>
            </div>
            <div className="absolute top-6 -right-3 sm:-right-8 w-14 h-14 rounded-full bg-[#161616] text-[#ff9e00] hidden sm:flex items-center justify-center text-[10px] font-bold text-center leading-tight rotate-12">
              3+ YEARS ● CODE ●
            </div>
          </div>

          {/* Right */}
          <div className="order-3 flex md:flex-col gap-4 justify-center">
            <p className="text-[13px] text-black/60 leading-relaxed max-w-[240px]">{t.description}</p>
            <div className="flex flex-col gap-2">
              {["Highly Professional", "Clean Code & Creative Design"].map((b, i) => (
                <span
                  key={i}
                  className={`text-[11px] font-bold rounded-full px-3 py-1.5 border w-max ${i === 0 ? "bg-[#161616] text-white" : "bg-white border-black/10"}`}
                >
                  ✦ {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── MARQUEE STRIP ── */}
      <div className="mt-14 bg-[#161616] text-white py-3.5 overflow-hidden -rotate-[0.5deg] scale-[1.01]">
        <div className="flex whitespace-nowrap animate-marquee gap-8 text-[13px] font-bold uppercase tracking-widest">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-8 items-center" aria-hidden={dup === 1}>
              {["React.js", "Next.js", "Tailwind CSS", "Fullstack Apps", "Dashboard Systems", "Landing Pages"].map((s) => (
                <span key={s + dup} className="flex items-center gap-8">
                  <span>{s}</span>
                  <span className="text-[#ff9e00]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-[12px] font-bold text-black/40 flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ff9e00]" /> My Services
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight">
              How I Bring <span className="text-[#ff9e00]">Ideas to Life</span>
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-white border border-black/10 rounded-full p-1.5 pl-4 text-[12px] font-bold">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Available
            <span className="bg-[#161616] text-white rounded-full px-3 py-1.5">For Projects</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {services.map((s, i) => {
            const open = openService === i;
            return (
              <div
                key={s.id}
                className={`rounded-3xl border transition-all overflow-hidden ${open ? "bg-[#161616] text-white border-[#161616]" : "bg-white border-black/10 hover:border-black/25"}`}
              >
                <button
                  onClick={() => setOpenService(open ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-[12px] font-bold ${open ? "text-[#ff9e00]" : "text-black/30"}`}>{s.id}</span>
                    <span className="font-heading font-bold text-base sm:text-xl">{s.title}</span>
                  </div>
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${open ? "bg-[#ff9e00] text-black" : "bg-[#fff3dd] text-black"}`}
                  >
                    <FontAwesomeIcon icon={open ? faMinus : faPlus} className="text-xs" />
                  </span>
                </button>
                {open && (
                  <div className="px-5 sm:px-7 pb-6 sm:pl-[4.2rem]">
                    <p className="text-white/60 text-sm leading-relaxed max-w-xl mb-4">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-bold bg-white/10 border border-white/10 rounded-full px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── GAPAI SPOTLIGHT ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-2 gap-4 bg-white border border-black/10 rounded-[2rem] p-4 sm:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
          <div className="rounded-3xl overflow-hidden h-64 sm:h-80 relative group">
            <img src={gapaiScreenshot} alt="GapaiDigital" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            <span className="absolute bottom-4 left-4 bg-[#ff9e00] text-black text-[11px] font-bold rounded-full px-3 py-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" /> LIVE STARTUP
            </span>
          </div>
          <div className="bg-[#161616] text-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img src={gapaiLogo} alt="GapaiDigital" className="w-11 h-11 rounded-2xl bg-white p-1.5 object-contain ring-2 ring-[#ff9e00]/60" />
                <span className="text-[11px] font-bold uppercase tracking-widest bg-white/10 rounded-full px-3 py-1.5">Founder & CEO</span>
              </div>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl mb-3">GapaiDigital</h3>
              <p className="text-white/60 text-sm leading-relaxed border-l-2 border-[#ff9e00] pl-4">
                {language === "id"
                  ? "Startup digitalisasi yang membantu bisnis berkembang melalui Landing Page, Mobile App, dan Custom Web System."
                  : "A digitalization startup helping businesses grow through Landing Pages, Mobile Apps, and Custom Web Systems."}
              </p>
              <div className="flex gap-6 mt-6">
                {[["10+", "Projects"], ["5.0", "Rating"], ["100%", "Commitment"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-heading font-extrabold text-2xl text-[#ff9e00]">{n}</div>
                    <div className="text-[11px] uppercase tracking-widest text-white/40 font-bold">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="https://gapaidigital.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 bg-[#ff9e00] text-black font-bold rounded-full px-6 py-3.5 text-sm hover:bg-[#ffb02e] transition-colors"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Visit GapaiDigital
            </a>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight">{t.featuredWork}</h2>
          <Link to="/projects" className="hidden sm:inline-flex text-sm font-bold bg-[#161616] text-white rounded-full px-5 py-2.5 hover:bg-black">
            {language === "id" ? "Semua Proyek →" : "All Projects →"}
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioList.map((p) => (
            <article key={p.id} className="group bg-white border border-black/10 rounded-3xl overflow-hidden hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
              <div className="h-52 overflow-hidden bg-[#f3ede0] relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {p.featured && (
                  <span className="absolute top-3 left-3 bg-[#ff9e00] text-black text-[11px] font-bold rounded-full px-3 py-1">★ Featured</span>
                )}
                <span className="absolute top-3 right-3 bg-[#161616] text-white text-[11px] font-bold rounded-full px-3 py-1">{p.year}</span>
              </div>
              <div className="p-5">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#e98a00] mb-1">{p.subtitle}</p>
                <h3 className="font-heading font-bold text-lg leading-snug mb-2">{p.title}</h3>
                <p className="text-[13px] text-black/55 leading-relaxed line-clamp-2 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.skill.split(",").slice(0, 3).map((s) => (
                    <span key={s} className="text-[11px] font-semibold bg-[#fff3dd] rounded-full px-2.5 py-1">{s.trim()}</span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#161616] text-white rounded-full py-2.5 text-[13px] font-bold group-hover:bg-[#ff9e00] group-hover:text-black transition-colors">
                  {t.viewLive} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[11px]" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── ABOUT (dark) ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-[#161616] text-white rounded-[2rem] p-6 sm:p-10 grid md:grid-cols-[280px_1fr] gap-8 items-center overflow-hidden relative">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#ff9e00]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="rounded-3xl overflow-hidden bg-[#ff9e00] p-2 rotate-[-2deg]">
            <img src={aboutImage} alt="Rafi" className="w-full h-72 object-cover rounded-2xl" />
          </div>
          <div>
            <p className="text-[12px] font-bold text-white/40 flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ff9e00]" /> About Me
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4">
              Who is <span className="text-[#ff9e00]">Rafi Rachmawan?</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-3 border-l-2 border-[#ff9e00] pl-4">{t.about1}</p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{t.about2}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/about" className="bg-[#ff9e00] text-black font-bold rounded-full px-6 py-3 text-sm">
                More About Me
              </Link>
              <a href="/CV RAFI RACHMAWAN  TERBARU.pdf" target="_blank" rel="noreferrer" className="border border-white/20 rounded-full px-6 py-3 text-sm font-bold hover:bg-white hover:text-black transition-colors">
                Download CV ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE PREVIEW ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight">{t.workHistory}</h2>
          <Link to="/experience" className="text-sm font-bold underline underline-offset-4 decoration-[#ff9e00] decoration-2">{t.seeFullExperience}</Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 items-stretch">
          {t.experiences.slice(0, 4).map((exp, i) => (
            <div key={i} className="bg-white border border-black/10 rounded-3xl p-6 flex flex-col h-full hover:border-[#ff9e00] transition-colors">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#e98a00]">{exp.date}</span>
              <h3 className="font-heading font-bold text-lg mt-2 leading-snug">{exp.role}</h3>
              <p className="text-[13px] font-semibold text-black/50 mt-0.5">{exp.company}</p>
              <div className="w-10 h-[3px] bg-[#ff9e00] rounded-full my-3" />
              <p className="text-[13px] text-black/55 leading-relaxed flex-grow">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 pb-16">
        <div className="bg-[#ff9e00] rounded-[2rem] px-6 py-10 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-16 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.4),transparent)] pointer-events-none" />
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-black/50 mb-3">Let&apos;s collaborate</p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-black tracking-tight leading-tight mb-4">
            Let&apos;s build something great!
          </h2>
          <p className="text-black/60 text-sm max-w-lg mx-auto mb-8">{t.contactDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <a href="https://wa.me/6285707185783" target="_blank" rel="noreferrer" className="bg-[#161616] text-white font-bold rounded-full px-8 py-3.5 text-sm hover:bg-black min-w-[200px]">
              {t.sayHello} via WhatsApp
            </a>
            <a href="mailto:rafirachmawan1987@gmail.com" className="bg-white text-black font-bold rounded-full px-8 py-3.5 text-sm border border-black/10 min-w-[200px]">
              Email
            </a>
          </div>
          <div className="mt-7 inline-flex items-center rounded-full bg-black/10 px-5 py-2 text-[12px] font-bold text-black/70">
            Open to Work · Indonesia
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
          <p className="font-bold text-sm">© {new Date().getFullYear()} Rafi Rachmawan.</p>
          <p className="text-[12px] text-black/40 font-medium">{t.designedWith}</p>
        </div>
      </footer>
    </div>
  );
}
