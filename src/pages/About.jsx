import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import aboutImage from "../assets/profil.jpeg";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;
  const tExp = translations[language].experience;

  return (
    <div className="bg-[#fffaf0] min-h-screen font-body text-[#161616] flex flex-col">
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 w-full">
        <div className="bg-[#161616] text-white rounded-[2rem] p-6 sm:p-10 grid md:grid-cols-[300px_1fr] gap-8 items-center">
          <div className="rounded-3xl overflow-hidden bg-[#ff9e00] p-2 -rotate-2">
            <img src={aboutImage} alt="Rafi" className="w-full h-80 object-cover rounded-2xl" />
          </div>
          <div>
            <p className="text-[12px] font-bold text-white/40 mb-2">About Me</p>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight mb-5">
              {t.whoIsRafi}
            </h1>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed border-l-2 border-[#ff9e00] pl-4 mb-4">{t.p1}</p>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-7">{t.p2}</p>
            <div className="flex flex-wrap gap-2 mb-7">
              {[t.problemSolver, t.creativeCoder].map((b) => (
                <span key={b} className="text-[12px] font-bold bg-white/10 rounded-full px-4 py-2">✦ {b}</span>
              ))}
            </div>
            <a href="/CV RAFI RACHMAWAN  TERBARU.pdf" target="_blank" rel="noreferrer" className="inline-flex bg-[#ff9e00] text-black font-bold rounded-full px-6 py-3 text-sm">
              DOWNLOAD CV ↓
            </a>
          </div>
        </div>
      </section>
      <footer className="border-t border-black/10 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold text-sm">© {new Date().getFullYear()} Rafi Rachmawan.</p>
          <Link to="/" className="font-bold text-sm bg-[#161616] text-white rounded-full px-5 py-2.5">{tExp.backToHome}</Link>
        </div>
      </footer>
    </div>
  );
}
