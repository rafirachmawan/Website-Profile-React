import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import { portfolioList } from "../components/data/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const tExp = translations[language].experience;

  return (
    <div className="bg-[#fffaf0] min-h-screen font-body text-[#161616] flex flex-col">
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 w-full">
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl tracking-tight mb-8">{t.featuredWork}</h1>
        <div className="grid sm:grid-cols-2 gap-4">
          {portfolioList.map((project) => (
            <article key={project.id} className="group bg-white border border-black/10 rounded-3xl overflow-hidden hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
              <div className="h-60 overflow-hidden bg-[#f3ede0]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#e98a00] mb-1">{project.subtitle} · {project.year}</p>
                <h3 className="font-heading font-bold text-xl mb-3">{project.title}</h3>
                <p className="text-sm text-black/55 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.skill.split(',').map((s) => (
                    <span key={s} className="text-[11px] font-semibold bg-[#fff3dd] rounded-full px-2.5 py-1">{s.trim()}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#161616] text-white rounded-full py-3 text-sm font-bold group-hover:bg-[#ff9e00] group-hover:text-black transition-colors">
                  {t.viewLive} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-[11px]" />
                </a>
              </div>
            </article>
          ))}
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
