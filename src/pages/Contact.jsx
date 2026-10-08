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
    <div className="bg-[#fffaf0] min-h-screen font-body text-[#161616] flex flex-col">
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 w-full flex-grow">
        <div className="bg-[#ff9e00] rounded-[2rem] p-8 sm:p-12 text-center mb-4">
          <p className="text-[12px] font-bold uppercase tracking-widest text-black/50 mb-3">— Let&apos;s collaborate</p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl tracking-tight leading-tight">
            {t.title1} {t.title2} {t.title3}
          </h1>
          <p className="text-black/60 text-sm max-w-lg mx-auto mt-4">{t.desc}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-7">
            <a href="https://wa.me/6285707185783" target="_blank" rel="noreferrer" className="bg-[#161616] text-white font-bold rounded-full px-7 py-3.5 text-sm min-w-[200px]">
              {t.sayHello} via WhatsApp
            </a>
            <a href="mailto:rafirachmawan1987@gmail.com" className="bg-white font-bold rounded-full px-7 py-3.5 text-sm border border-black/10 min-w-[200px]">
              {t.email}
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#161616] text-white rounded-[2rem] p-7 flex gap-5 items-start">
            <img src={gapaiLogo} alt="GapaiDigital" className="w-16 h-16 rounded-2xl bg-white p-2 object-contain flex-shrink-0 ring-2 ring-[#ff9e00]/60" />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest bg-white/10 rounded-full px-3 py-1">{t.founderTag}</span>
              <h2 className="font-heading font-extrabold text-2xl mt-2">{t.founderOf}</h2>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">{t.founderDesc}</p>
              <a href="https://gapaidigital.vercel.app/" target="_blank" rel="noreferrer" className="inline-block mt-4 bg-[#ff9e00] text-black font-bold rounded-full px-5 py-2.5 text-sm">
                {t.visitAgency}
              </a>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="bg-white border border-black/10 rounded-[2rem] p-6 flex flex-col justify-center">
              <p className="text-[11px] font-bold uppercase tracking-widest text-black/40">{t.availableFor}</p>
              <p className="font-heading font-extrabold text-xl mt-1">{t.status}</p>
            </div>
            <div className="bg-white border border-black/10 rounded-[2rem] p-6 flex flex-col justify-center">
              <p className="text-[11px] font-bold uppercase tracking-widest text-black/40">Based In</p>
              <p className="font-heading font-extrabold text-xl mt-1">{t.location}</p>
            </div>
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
