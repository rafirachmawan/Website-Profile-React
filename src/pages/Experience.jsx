import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;
  const tHome = translations[language].home;

  return (
    <div className="bg-[#fffaf0] min-h-screen font-body text-[#161616]">
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-[12px] font-bold text-black/40 mb-2">Career</p>
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl tracking-tight mb-10">{t.myJourney}</h1>
        <div className="flex flex-col gap-3">
          {tHome.experiences.map((exp, i) => (
            <div key={i} className="bg-white border border-black/10 rounded-3xl p-6 flex gap-5 items-start hover:border-[#ff9e00] transition-colors">
              <span className="w-11 h-11 rounded-2xl bg-[#161616] text-[#ff9e00] font-heading font-extrabold flex items-center justify-center flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#e98a00]">{exp.date}</span>
                <h3 className="font-heading font-bold text-xl mt-1 leading-snug">{exp.role}</h3>
                <p className="text-sm font-semibold text-black/50 mt-0.5">{exp.company}</p>
                <div className="w-10 h-[3px] bg-[#ff9e00] rounded-full my-3" />
                <p className="text-sm text-black/55 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="border-t border-black/10 py-8 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold text-sm">{t.footer.replace('{year}', new Date().getFullYear())}</p>
          <Link to="/" className="font-bold text-sm bg-[#161616] text-white rounded-full px-5 py-2.5">{t.backToHome}</Link>
        </div>
      </footer>
    </div>
  );
}
