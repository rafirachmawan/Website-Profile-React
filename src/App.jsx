import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Lenis from "lenis";
import Preloader from "./components/Preloader";
import { LanguageProvider } from "./context/LanguageContext";
import ScrollToTop from "./components/scrolltop";

function App() {
  // Hapus dark mode — paksa light mode
  useEffect(() => {
    document.body.className = "light";
    localStorage.removeItem("darkMode");
  }, []);

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
      const isInteractive = e.target.closest('a') || e.target.closest('button') || e.target.classList.contains('soft-btn') || e.target.classList.contains('neo-btn');
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
      
      {/* Floating WhatsApp Chat */}
      <a
        href="https://wa.me/6285196221716?text=Halo%20Rafi%2C%20saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-[#1ebe5b] transition-all flex items-center justify-center text-3xl rounded-full"
        aria-label="Chat WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>

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

