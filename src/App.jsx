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
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";

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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
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
    <>
      <Preloader />
      <CustomCursor />
      
      {/* Brutalist Floating Dark Mode Toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-8 right-8 z-[9999] w-16 h-16 border-4 border-black bg-[#ffe600] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center text-2xl font-black rounded-full"
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

