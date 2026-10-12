import React from 'react';
import aboutImage from "../assets/profil.jpeg";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { PageShell, Footer } from '../components/layout/PageShell';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;
  const tExp = translations[language].experience;

  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 w-full">
        <div className="bg-white border border-black/10 rounded-[2rem] p-6 sm:p-10 grid md:grid-cols-[300px_1fr] gap-8 items-center shadow-soft">
          <div className="rounded-3xl overflow-hidden bg-[#ffe3b3] p-2 ring-1 ring-black/10">
            <img src={aboutImage} alt="Rafi" className="w-full h-80 object-cover rounded-2xl" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-black/40 mb-2">About me</p>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight leading-[1.12] mb-3">
              {t.whoIsRafi}
            </h1>
            <p className="font-body text-sm sm:text-[15px] text-black/60 leading-relaxed border-l-2 border-[#ff9e00] pl-4 mb-4">{t.p1}</p>
            <p className="font-body text-sm sm:text-[15px] text-black/60 leading-relaxed mb-7">{t.p2}</p>
            <div className="flex flex-wrap gap-2 mb-7">
              {[t.problemSolver, t.creativeCoder].map((b) => (
                <span key={b} className="text-[12px] font-bold bg-[#fff3dd] border border-[#ff9e00]/20 text-black/70 rounded-full px-4 py-2">✦ {b}</span>
              ))}
            </div>
            <a href="/CV RAFI RACHMAWAN  TERBARU.pdf" target="_blank" rel="noreferrer" className="inline-flex bg-[#161616] text-white font-bold rounded-full px-6 py-3 text-sm hover:bg-black transition-colors">
              Download CV ↓
            </a>
          </div>
        </div>
      </section>
      <Footer backToHome={tExp.backToHome} />
    </PageShell>
  );
}
