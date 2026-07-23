import React from 'react';
import Navbar from '../components/navbar';
import gapaiLogo from "../assets/GapaiDigitalIcon.png";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <div className="bg-neo-bg min-h-screen font-body text-neo-dark selection:bg-neo-primary selection:text-black flex flex-col">
      <Navbar />
      
      <section className="max-w-7xl mx-auto px-6 mt-16 mb-20 flex-grow w-full">
        <div className="border-4 border-neo-border bg-neo-secondary p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] gap-12 group">
          <div className="flex-1 text-white">
            <h2 className="text-5xl md:text-7xl font-black font-heading uppercase mb-6" style={{ textShadow: "4px 4px 0px black" }}>
              {t.title1} <br/> {t.title2} <br/> {t.title3}
            </h2>
            <p className="text-xl font-bold border-l-4 border-white pl-4 max-w-lg mb-8">
              {t.desc}
            </p>
            
            <a href="https://www.linkedin.com/in/rafi-rachmawan-2a8728233/" target="_blank" rel="noreferrer" className="inline-block bg-neo-bg text-neo-dark border-4 border-neo-border px-10 py-5 text-xl font-bold uppercase shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover transition-all -rotate-2">
              {t.sayHello}
            </a>
          </div>
          
          <div className="flex-shrink-0 relative z-10">
            <div className="w-64 h-64 bg-neo-bg border-4 border-neo-border p-8 flex items-center justify-center rotate-3 group-hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              <img src={gapaiLogo} alt="Gapai Digital" className="w-full h-full object-contain filter drop-shadow-md" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-neo-border bg-neo-primary py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold uppercase tracking-wider">© {new Date().getFullYear()} Rafi Rachmawan.</p>
          <p className="font-bold uppercase bg-neo-bg border-2 border-neo-border px-4 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {t.designedWith}
          </p>
        </div>
      </footer>
    </div>
  );
}
