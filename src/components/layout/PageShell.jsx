/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Navbar from "../navbar";

/** Shared page shell: cream bg, sticky glass navbar, consistent container. */
export function PageShell({ children }) {
  return (
    <div className="bg-[#fffaf0] min-h-screen font-body text-[#161616] selection:bg-[#ff9e00] selection:text-black flex flex-col">
      <Navbar />
      <main className="w-full flex-grow">{children}</main>
    </div>
  );
}

/** Shared section heading: dot + soft label, no uppercase-everywhere. */
export function SectionHeading({ label, title, accent, desc }) {
  return (
    <div className="mb-8 max-w-2xl">
      {label && (
        <p className="text-[13px] font-semibold text-black/40 flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#ff9e00]" /> {label}
        </p>
      )}
      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-balance text-[#161616] leading-[1.15]">
        {title} {accent && <span className="text-[#e98a00]">{accent}</span>}
      </h2>
      {desc && (
        <p className="mt-3 font-body text-sm sm:text-[15px] leading-relaxed text-black/55 max-w-xl">{desc}</p>
      )}
    </div>
  );
}

/** Shared footer: single language, no duplication across pages. */
export function Footer({ note, backToHome }) {
  return (
    <footer className="border-t border-black/10 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="font-bold text-sm">© {new Date().getFullYear()} Rafi Rachmawan.</p>
        {note && <p className="text-[12px] text-black/40 font-medium">{note}</p>}
        {backToHome && (
          <Link to="/" className="font-bold text-sm bg-[#161616] text-white rounded-full px-5 py-2.5 hover:bg-black transition-colors">
            {backToHome}
          </Link>
        )}
      </div>
    </footer>
  );
}
