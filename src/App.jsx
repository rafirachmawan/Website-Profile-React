import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Lenis from "lenis";
import Preloader from "./components/Preloader";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/scrolltop";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Force scroll to top on refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Global Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  // Global Sound Effect
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const isInteractive = e.target.closest('a') || e.target.closest('button') || e.target.classList.contains('neo-btn');
      if (isInteractive) {
        import("./utils/playSound").then((module) => {
          module.playClickSound();
        });
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <LanguageProvider>
      <Preloader />
      
      {/* Soft Floating Dark Mode Toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-6 right-6 z-[9999] w-12 h-12 bg-[#161616] dark:bg-[#ff9e00] text-white dark:text-black shadow-[0_12px_32px_rgba(0,0,0,0.2)] hover:scale-105 transition-all flex items-center justify-center text-lg rounded-full"
        aria-label="Toggle dark mode"
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;

