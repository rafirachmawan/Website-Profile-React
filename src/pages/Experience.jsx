import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../utils/translations";
import { PageShell, SectionHeading, Footer } from "../components/layout/PageShell";

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language].experience;
  const tHome = translations[language].home;

  return (
    <PageShell>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <SectionHeading
          label={language === "id" ? "Karier" : "Career"}
          title={t.myJourney}
          desc={language === "id" ? "Perjalanan peran saya dari freelance sampai full-time." : "My journey from freelance work to full-time roles."}
        />
        <div className="flex flex-col gap-3">
          {tHome.experiences.map((exp, i) => (
            <div key={i} className="bg-white border border-black/10 rounded-3xl p-6 flex gap-5 items-start hover:border-[#ff9e00]/60 hover:shadow-soft transition-all">
              <span className="w-11 h-11 rounded-2xl bg-[#fff3dd] border border-[#ff9e00]/30 text-[#161616] font-heading font-extrabold flex items-center justify-center flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <span className="text-[12px] font-semibold text-[#e98a00]">{exp.date}</span>
                <h3 className="font-heading font-bold text-lg mt-1 leading-snug">{exp.role}</h3>
                <p className="font-body text-[13px] font-semibold text-black/50 mt-0.5">{exp.company}</p>
                <div className="w-10 h-[3px] bg-[#ff9e00] rounded-full my-3" />
                <p className="font-body text-[13px] text-black/55 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer note={t.footer.replace('{year}', new Date().getFullYear())} backToHome={t.backToHome} />
    </PageShell>
  );
}
