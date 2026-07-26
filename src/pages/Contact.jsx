import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import gapaiLogo from "../assets/GapaiDigitalIcon.png";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const tExp = translations[language].experience;

  return (
    <div className="bg-neo-bg min-h-screen font-body text-neo-dark selection:bg-neo-primary selection:text-black flex flex-col">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 mt-16 mb-20 flex-grow w-full">

        {/* Top Row: Big CTA + Status Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-5">

          {/* Main CTA Box — spans 2 cols */}
          <div className="md:col-span-2 border-4 border-neo-border bg-neo-secondary p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[280px] relative overflow-hidden">
            {/* decorative corner dot */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-neo-primary border-l-4 border-b-4 border-neo-border flex items-center justify-center text-3xl select-none">
              ✦
            </div>

            <div>
              <p className="text-white/60 font-bold uppercase tracking-widest text-sm mb-3">— Let's collaborate</p>
              <h1 className="text-5xl md:text-7xl font-black font-heading uppercase text-white leading-none" style={{ textShadow: "4px 4px 0px black" }}>
                {t.title1} <br />
                {t.title2} <br />
                <span className="text-neo-primary">{t.title3}</span>
              </h1>
            </div>

            <p className="text-white font-bold text-lg border-l-4 border-neo-primary pl-4 max-w-lg mt-6">
              {t.desc}
            </p>
          </div>

          {/* Right Column: Status + Location stacked */}
          <div className="flex flex-col gap-4 md:gap-5">
            {/* Status */}
            <div className="border-4 border-neo-border bg-neo-primary p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-1 flex flex-col justify-center">
              <p className="font-bold uppercase tracking-widest text-xs text-neo-dark/60 mb-2">{t.availableFor}</p>
              <p className="font-black text-2xl text-neo-dark uppercase">{t.status}</p>
            </div>

            {/* Location */}
            <div className="border-4 border-neo-border bg-neo-bg p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-1 flex flex-col justify-center">
              <p className="font-bold uppercase tracking-widest text-xs text-neo-dark/60 mb-2">Based In</p>
              <p className="font-black text-2xl text-neo-dark uppercase">{t.location}</p>
            </div>
          </div>
        </div>

        {/* Bottom Row: GapaiDigital Founder + Say Hello + Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">

          {/* GapaiDigital Founder Box — spans 2 cols */}
          <div className="md:col-span-2 border-4 border-neo-border bg-neo-bg p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-8 items-start">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 border-4 border-neo-border bg-neo-secondary p-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center rotate-2 hover:rotate-0 transition-transform duration-300">
                <img src={gapaiLogo} alt="GapaiDigital" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="bg-neo-primary border-2 border-neo-border px-3 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {t.founderTag}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black font-heading uppercase mt-2 mb-3">
                {t.founderOf}
              </h2>
              <p className="font-bold text-neo-dark/80 leading-relaxed text-base mb-5">
                {t.founderDesc}
              </p>
              <a
                href="https://gapaidigital.app"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-neo-secondary text-white border-4 border-neo-border px-6 py-3 font-black uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-sm"
              >
                {t.visitAgency}
              </a>
            </div>
          </div>

          {/* Right Column: Say Hello + Contact Links */}
          <div className="flex flex-col gap-4 md:gap-5">
            {/* Say Hello CTA */}
            <div className="border-4 border-neo-border bg-neo-dark p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between flex-1">
              <p className="text-neo-bg/60 font-bold uppercase text-xs tracking-widest mb-3">{t.orReach}</p>
              <a
                href="https://wa.me/6285707185783?text=Halo%20Rafi%2C%20saya%20melihat%20website%20Anda%20dan%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut."
                target="_blank"
                rel="noreferrer"
                className="block bg-neo-primary border-4 border-neo-border px-4 py-3 text-center font-black uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-neo-dark text-sm mb-3"
              >
                {t.sayHello} — WhatsApp
              </a>
              <a
                href="mailto:rafirachmawan1987@gmail.com"
                className="block bg-neo-bg border-4 border-neo-border px-4 py-3 text-center font-black uppercase tracking-wide shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-neo-dark text-sm"
              >
                {t.email} ✉️
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-neo-border bg-neo-primary py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold uppercase tracking-wider">© {new Date().getFullYear()} Rafi Rachmawan.</p>
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="font-bold uppercase bg-white border-2 border-neo-border px-4 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            {tExp.backToHome}
          </Link>
        </div>
      </footer>
    </div>
  );
}
