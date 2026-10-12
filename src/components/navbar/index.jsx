import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../utils/translations';

const getNavLinks = (t) => [
  { path: '/', label: t.home },
  { path: '/about', label: t.about },
  { path: '/projects', label: t.projects },
  { path: '/experience', label: t.experience },
  { path: '/contact', label: t.contact },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;
  const navLinks = getNavLinks(t);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <div className="sticky top-3 sm:top-5 z-[200] px-3 sm:px-6">
        <nav className="navbar-soft max-w-6xl mx-auto rounded-full pl-4 pr-2 sm:pl-6 sm:pr-2 py-2 flex items-center justify-between shadow-soft">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 font-heading font-extrabold text-base sm:text-lg tracking-tight">
            <span className="w-8 h-8 rounded-full bg-[#ff9e00] flex items-center justify-center text-black text-sm font-black">
              R
            </span>
            <span className="hidden xs:inline sm:inline">Rafi</span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-1 text-[13px] font-medium">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link transition-colors rounded-full px-3.5 py-2 ${active ? 'nav-link-active font-semibold' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex text-[12px] font-bold opacity-60 hover:opacity-100 border border-black/10 rounded-full px-3 py-1.5 transition-opacity"
            >
              <span className={language === 'en' ? 'text-[#e98a00]' : ''}>EN</span>
              <span className="mx-1 opacity-40">/</span>
              <span className={language === 'id' ? 'text-[#e98a00]' : ''}>ID</span>
            </button>
            <Link
              to="/contact"
              className="bg-[#ff9e00] hover:bg-[#ffb02e] text-black text-[13px] font-bold rounded-full px-5 py-2.5 transition-colors flex items-center gap-1"
            >
              {t.letsTalk.replace(' 🤙', '')} <span aria-hidden>↗</span>
            </Link>
            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-black/5 flex flex-col items-center justify-center gap-[5px]"
              aria-label="Toggle menu"
            >
              <span className={`block w-4 h-[2px] bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-4 h-[2px] bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-4 h-[2px] bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[190] md:hidden transition-all ${menuOpen ? 'visible' : 'invisible'}`}>
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black transition-opacity ${menuOpen ? 'opacity-40' : 'opacity-0'}`}
        />
        <div
          className={`drawer-soft absolute top-0 right-0 h-full w-[82vw] max-w-xs rounded-l-3xl border-l border-black/10 p-6 pt-20 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-black/5 flex items-center justify-center font-bold"
          >
            ✕
          </button>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-2xl font-semibold text-lg ${location.pathname === link.path ? 'bg-[#ff9e00] text-black' : 'hover:bg-black/5'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={toggleLanguage}
              className="rounded-full border border-black/10 py-2.5 font-bold text-sm"
            >
              {language === 'en' ? 'English / Indonesia' : 'Indonesia / English'}
            </button>
            <Link to="/contact" className="bg-[#ff9e00] text-black rounded-full py-3 text-center font-bold">
              {t.letsTalk}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
