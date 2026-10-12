import React from 'react';
import gapaiLogo from "../assets/GapaiDigitalIcon.png";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import { PageShell, Footer } from '../components/layout/PageShell';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const tExp = translations[language].experience;

  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-16 w-full flex-grow">
        <div className="bg-white border border-black/10 rounded-[2rem] p-8 sm:p-12 text-center mb-4 shadow-soft">
          <p className="text-[13px] font-semibold text-black/40 mb-3">Let&apos;s collaborate</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight leading-[1.12]">
            {t.title1} {t.title2} <span className="text-[#e98a00]">{t.title3}</span>
          </h1>
          <p className="font-body text-sm leading-relaxed text-black/55 max-w-lg mx-auto mt-3">{t.desc}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-7">
            <a href="https://wa.me/6285196221716" target="_blank" rel="noreferrer" className="bg-[#161616] text-white font-bold rounded-full px-7 py-3.5 text-sm min-w-[200px] hover:bg-black transition-colors">
              {t.sayHello} via WhatsApp
            </a>
            <a href="mailto:rafirachmawan1987@gmail.com" className="bg-white font-bold rounded-full px-7 py-3.5 text-sm border border-black/10 min-w-[200px] hover:border-black/25 transition-colors">
              {t.email}
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#f5eddc] border border-black/5 text-[#161616] rounded-[2rem] p-7 flex gap-5 items-start">
            <img src={gapaiLogo} alt="GapaiDigital" className="w-16 h-16 rounded-2xl bg-white p-2 object-contain flex-shrink-0 ring-1 ring-[#ff9e00]/50" />
            <div>
              <span className="text-[12px] font-semibold bg-black/5 rounded-full px-3 py-1">{t.founderTag}</span>
              <h2 className="font-heading font-extrabold text-xl mt-2">{t.founderOf}</h2>
              <p className="font-body text-[13px] text-black/55 mt-2 leading-relaxed">{t.founderDesc}</p>
              <a href="https://gapaidigital.vercel.app/" target="_blank" rel="noreferrer" className="inline-block mt-4 bg-[#161616] text-white font-bold rounded-full px-5 py-2.5 text-sm hover:bg-black transition-colors">
                {t.visitAgency}
              </a>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="bg-white border border-black/10 rounded-[2rem] p-6 flex flex-col justify-center">
              <p className="text-[13px] font-semibold text-black/40">{t.availableFor}</p>
              <p className="font-heading font-extrabold text-lg mt-1">{t.status}</p>
            </div>
            <div className="bg-white border border-black/10 rounded-[2rem] p-6 flex flex-col justify-center">
              <p className="text-[13px] font-semibold text-black/40">Based in</p>
              <p className="font-heading font-extrabold text-lg mt-1">{t.location}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer backToHome={tExp.backToHome} />
    </PageShell>
  );
}
