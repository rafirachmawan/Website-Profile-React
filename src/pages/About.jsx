import React from 'react';
import Navbar from '../components/navbar';
import aboutImage from "../assets/profil.jpeg";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className="bg-neo-bg min-h-screen font-body text-neo-dark selection:bg-neo-primary selection:text-black pb-20">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid md:grid-cols-5 gap-8 items-center bg-neo-secondary border-4 border-neo-border p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="md:col-span-2">
            <div className="w-full h-64 md:h-full min-h-[300px] border-4 border-neo-border bg-neo-bg shadow-neo relative overflow-hidden group">
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

            <h2 className="text-4xl md:text-5xl font-black font-heading uppercase mb-6 w-max relative z-10 glitch-hover transition-all cursor-default" style={{ textShadow: "3px 3px 0px black" }}>
              {t.whoIsRafi}
            </h2>
            <p className="text-xl mb-6 font-bold border-l-4 border-white pl-4 relative z-10 bg-neo-dark/20 p-2">
              {t.p1}
            </p>
            <p className="text-lg mb-8 font-medium relative z-10">
              {t.p2}
            </p>
            
            <div className="flex flex-col gap-8 relative z-10">
              <div className="flex gap-4 flex-wrap">
                <div className="bg-neo-bg text-neo-dark border-4 border-neo-border px-4 py-2 font-black uppercase shadow-neo rotate-2 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-neo-lg hover:rotate-0 transition-all cursor-default">
                  {t.problemSolver}
                </div>
                <div className="bg-neo-primary text-neo-dark border-4 border-neo-border px-4 py-2 font-black uppercase shadow-neo -rotate-2 hover:-translate-y-2 hover:-translate-x-1 hover:shadow-neo-lg hover:rotate-0 transition-all cursor-default">
                  {t.creativeCoder}
                </div>
              </div>

              <div className="w-max">
                <a href="/CV RAFI RACHMAWAN  TERBARU.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="neo-btn flex items-center gap-2 group text-lg">
                    DOWNLOAD CV
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
