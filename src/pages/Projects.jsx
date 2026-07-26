import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import { portfolioList } from "../components/data/index";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const tExp = translations[language].experience;

  return (
    <div className="bg-neo-bg min-h-screen font-body text-neo-dark selection:bg-neo-primary selection:text-black flex flex-col">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 mt-16 mb-20">
        <div className="inline-block border-4 border-neo-border bg-neo-bg px-6 py-2 shadow-neo mb-12 -rotate-1">
          <h2 className="text-5xl md:text-7xl font-black font-heading uppercase" style={{ textShadow: "3px 3px 0px #ffe600" }}>
            {t.featuredWork}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {portfolioList.map((project, i) => (
            <div key={i} className="group flex flex-col h-full border-4 border-neo-border bg-neo-bg shadow-neo hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              
              <div className="w-full h-64 border-b-4 border-neo-border overflow-hidden bg-neo-dark relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-neo-primary border-4 border-neo-border font-bold px-3 py-1 -rotate-6 shadow-neo">
                  {t.pro}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-black uppercase font-heading mb-4">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-8 flex-grow">
                  {project.skill.split(',').map((skill, j) => (
                    <span key={j} className="text-sm font-bold bg-neo-bg border-2 border-neo-border px-3 py-1 uppercase">
                      {skill.trim()}
                    </span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noreferrer" className="neo-btn text-center block w-full mt-auto">
                  {t.viewLive}
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
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
