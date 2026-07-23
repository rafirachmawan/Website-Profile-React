import React from "react";
import { Link } from "react-router-dom";
import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs, FaReact, FaLaravel } from "react-icons/fa";
import Navbar from "../components/navbar";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;
  const tHome = translations[language].home;

  const experiences = tHome.experiences.map((exp, index) => {
    let icon, color;
    switch(index) {
      case 0:
        icon = <RiNextjsFill />;
        color = "bg-neo-accent";
        break;
      case 1:
        icon = <FaVuejs />;
        color = "bg-neo-primary";
        break;
      case 2:
        icon = <FaReact />;
        color = "bg-neo-secondary";
        break;
      default:
        icon = <FaLaravel />;
        color = "bg-[#00d084]";
        break;
    }
    return { ...exp, icon, color };
  });

  return (
    <div className="bg-neo-bg min-h-screen font-body text-neo-dark selection:bg-neo-primary selection:text-black">
      <Navbar />

      {/* EXPERIENCE SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="inline-block border-4 border-neo-border bg-neo-primary px-6 py-2 shadow-neo mb-16 rotate-1">
          <h1 className="text-5xl md:text-7xl font-black font-heading uppercase" style={{ textShadow: "3px 3px 0px white" }}>
            {t.myJourney}
          </h1>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-10 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-neo-border before:z-0">
          {experiences.map((exp, i) => (
            <div key={i} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
              
              {/* Timeline Icon */}
              <div className={`flex items-center justify-center w-20 h-20 rounded-full border-4 border-neo-border ${exp.color} shadow-neo text-3xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mx-auto`}>
                {exp.icon}
              </div>

              {/* Card */}
              <div className="w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] p-6 neo-box">
                <div className="flex flex-col mb-4">
                  <span className="font-bold text-neo-accent uppercase tracking-wider mb-1">{exp.date}</span>
                  <h3 className="text-3xl font-black font-heading uppercase leading-none">{exp.role}</h3>
                  <h4 className="text-lg font-bold mt-2">{exp.company}</h4>
                </div>
                <p className="font-medium text-gray-700 leading-relaxed border-t-2 border-dashed border-neo-border pt-4">
                  {exp.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-neo-border bg-neo-primary py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold uppercase tracking-wider">{t.footer.replace('{year}', new Date().getFullYear())}</p>
          <Link to="/" className="font-bold uppercase bg-white border-2 border-neo-border px-4 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            {t.backToHome}
          </Link>
        </div>
      </footer>
    </div>
  );
}
