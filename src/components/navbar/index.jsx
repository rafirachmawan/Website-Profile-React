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
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;
  const navLinks = getNavLinks(t);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-neo-accent underline decoration-4 underline-offset-4'
      : 'hover:text-neo-accent transition-colors';
  };

  return (
    <>
      {/* ── MAIN NAVBAR ── */}
      <nav
        className={`border-b-4 border-neo-border bg-neo-bg sticky top-0 z-[200] transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_4px_0px_0px_rgba(0,0,0,1)]' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          {/* LOGO */}
          <Link
            to="/"
            className="font-heading font-black text-2xl tracking-tighter uppercase glitch-hover inline-block"
          >
            Rafi<span className="text-neo-primary" style={{ WebkitTextStroke: '1px black' }}>.</span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-8 font-bold uppercase tracking-wider items-center">
            {navLinks.slice(1).map((link) => (
              <Link key={link.path} to={link.path} className={getLinkClass(link.path)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* LANGUAGE TOGGLE */}
            <button
              onClick={toggleLanguage}
              className="border-2 border-neo-border bg-white text-black font-bold px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all text-sm flex items-center gap-1"
            >
              <span className={language === 'en' ? 'text-neo-accent' : 'opacity-50'}>EN</span>
              <span>/</span>
              <span className={language === 'id' ? 'text-neo-accent' : 'opacity-50'}>ID</span>
            </button>

            {/* DESKTOP CTA */}
            <Link to="/contact" className="neo-btn">
              {t.letsTalk}
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-12 h-12 border-4 border-neo-border bg-neo-primary shadow-neo flex flex-col items-center justify-center gap-[5px] transition-all active:translate-x-1 active:translate-y-1 active:shadow-neo-hover"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[3px] bg-black transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[8px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[3px] bg-black transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[3px] bg-black transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[8px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER OVERLAY ── */}
      <div
        className={`fixed inset-0 z-[190] md:hidden transition-all duration-300 ${
          menuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            menuOpen ? 'opacity-50' : 'opacity-0'
          }`}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 left-0 h-full w-[80vw] max-w-xs bg-neo-bg border-r-4 border-neo-border shadow-[8px_0px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Drawer header */}
          <div className="border-b-4 border-neo-border px-6 py-4 bg-neo-primary flex items-center justify-between">
            <Link to="/" className="font-heading font-black text-2xl uppercase">
              Rafi<span style={{ WebkitTextStroke: '1px black' }}>.</span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-9 h-9 border-2 border-neo-border bg-neo-bg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-black text-lg"
            >
              ✕
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-6 pt-6 gap-1">
            {navLinks.map((link, i) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 border-2 border-neo-border font-bold uppercase tracking-wider transition-all active:translate-x-1 active:translate-y-1 ${
                    isActive
                      ? 'bg-neo-accent text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
                      : 'bg-neo-bg hover:bg-neo-primary shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="w-6 h-6 border-2 border-neo-border bg-neo-primary flex items-center justify-center text-xs font-black">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Language inside drawer */}
          <div className="px-6 pt-8 flex flex-col gap-4">
            <button
              onClick={toggleLanguage}
              className="border-2 border-neo-border bg-white text-black font-bold py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2"
            >
              <span className={language === 'en' ? 'text-neo-accent' : 'opacity-50'}>English</span>
              <span>/</span>
              <span className={language === 'id' ? 'text-neo-accent' : 'opacity-50'}>Indonesia</span>
            </button>
            <Link
              to="/contact"
              className="neo-btn w-full text-center block"
            >
              {t.letsTalk}
            </Link>
          </div>

          {/* Decorative bottom tag */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="border-2 border-neo-border bg-neo-secondary text-white px-4 py-2 text-xs font-bold uppercase text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1">
              {t.freelanceTag}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
