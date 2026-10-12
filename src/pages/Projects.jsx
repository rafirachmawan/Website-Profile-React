import React from 'react';
import { portfolioList } from "../components/data/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { PageShell, SectionHeading, Footer } from "../components/layout/PageShell";

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const tExp = translations[language].experience;

  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 w-full">
        <SectionHeading
          label={language === "id" ? "Portofolio" : "Portfolio"}
          title={t.featuredWork}
          desc={language === "id" ? "Kumpulan proyek web dan aplikasi pilihan." : "A curated set of featured web and app projects."}
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {portfolioList.map((project) => (
            <article key={project.id} className="group bg-white border border-black/10 rounded-3xl overflow-hidden hover:shadow-soft-lg hover:-translate-y-1 transition-all">
              <div className="h-60 overflow-hidden bg-[#f3ede0]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <p className="text-[12px] font-semibold text-[#e98a00] mb-1">{project.subtitle} · {project.year}</p>
                <h3 className="font-heading font-bold text-lg leading-snug mb-2">{project.title}</h3>
                <p className="font-body text-[13px] text-black/55 leading-relaxed mb-4">{project.description}</p>
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
      <Footer backToHome={tExp.backToHome} />
    </PageShell>
  );
}
