import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const getLinkClass = (path) => {
    return location.pathname === path 
      ? "text-neo-accent underline decoration-4 underline-offset-4" 
      : "hover:text-neo-accent transition-colors";
  };

  return (
    <nav className="border-b-4 border-neo-border bg-neo-bg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-heading font-black text-2xl tracking-tighter uppercase glitch-hover inline-block">
          Rafi<span className="text-neo-primary" style={{ WebkitTextStroke: "1px black" }}>.</span>
        </Link>
        <div className="hidden md:flex gap-8 font-bold uppercase tracking-wider items-center">
          <Link to="/about" className={getLinkClass('/about')}>About</Link>
          <Link to="/projects" className={getLinkClass('/projects')}>Projects</Link>
          <Link to="/experience" className={getLinkClass('/experience')}>Experience</Link>
          <Link to="/contact" className={getLinkClass('/contact')}>Contact</Link>
        </div>
        <Link to="/contact" className="neo-btn hidden md:inline-block">Let's Talk</Link>
      </div>
    </nav>
  );
}
