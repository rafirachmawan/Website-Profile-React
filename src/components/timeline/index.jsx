"use client";

import { useEffect, useRef, useState } from "react";

export default function Timeline() {
  const events = [
    {
      year: 2017,
      title: "Lulus SMA",
      detail: "Mulai tertarik dunia teknologi.",
    },
    {
      year: 2018,
      title: "Mulai Kuliah",
      detail: "Masuk Teknik Informatika.",
    },
    {
      year: 2020,
      title: "Magang",
      detail: "Mulai belajar real project.",
    },
    {
      year: 2022,
      title: "Lulus",
      detail: "Fokus UI/UX & frontend.",
    },
    {
      year: 2023,
      title: "Kerja",
      detail: "Frontend Developer.",
    },
    {
      year: 2025,
      title: "Target",
      detail: "Senior / Lead Developer.",
    },
  ];

  const [visibleItems, setVisibleItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const refs = useRef([]);
  const progressRef = useRef(null);
  const containerRef = useRef(null);

  // 🔥 INTERSECTION
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) =>
                prev.includes(index) ? prev : [...prev, index],
              );
            }, index * 120);
          }
        });
      },
      { threshold: 0.3 },
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 🔥 SCROLL PROGRESS
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = (windowHeight - rect.top) / rect.height;
      progress = Math.max(0, Math.min(1, progress));

      if (progressRef.current) {
        progressRef.current.style.height = `${progress * 100}%`;
      }

      refs.current.forEach((el, index) => {
        if (!el) return;
        const r = el.getBoundingClientRect();

        if (r.top < windowHeight * 0.5 && r.bottom > windowHeight * 0.3) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-24 px-6 bg-transparent">
      <div ref={containerRef} className="max-w-6xl mx-auto relative">
        <h2 className="font-heading text-center text-6xl font-semibold text-white mb-20 tracking-tight">
          My{" "}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            Journey
          </span>
        </h2>

        <p className="font-body text-center text-slate-200 max-w-xl mx-auto -mt-10 mb-16 leading-relaxed">
          A timeline of my growth, learning, and career progression in tech.
        </p>

        {/* BASE LINE */}
        <div className="absolute left-1/2 w-[2px] h-full bg-white/10 -translate-x-1/2"></div>

        {/* PROGRESS LINE */}
        <div
          ref={progressRef}
          className="absolute left-1/2 w-[2px] bg-gradient-to-b from-purple-400 to-pink-500 -translate-x-1/2 transition-all duration-200 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          style={{ height: "0%" }}
        ></div>

        {events.map((event, index) => {
          const isVisible = visibleItems.includes(index);
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              data-index={index}
              ref={(el) => (refs.current[index] = el)}
              className={`relative flex items-center justify-between mb-32 transition-all duration-700
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* CARD */}
              <div
                className={`w-1/2 ${
                  index % 2 === 0
                    ? "pr-10 flex justify-end"
                    : "pl-10 flex justify-start ml-auto"
                }`}
              >
                <div
                  className={`relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg max-w-sm w-full transition-all duration-300
                  ${isActive ? "scale-105 border-purple-500/40 shadow-purple-500/20" : "hover:border-white/20 hover:scale-105"}`}
                >
                  {/* MINI TIMELINE LINE */}
                  <div className="absolute left-4 top-6 bottom-6 w-[2px] bg-white/10"></div>

                  <div className="ml-6 font-body">
                    {/* YEAR */}
                    <p className="text-xs text-purple-300 font-bold tracking-wide mb-1">
                      {event.year}
                    </p>

                    {/* TITLE */}
                    <h3 className="font-heading text-white text-lg font-medium leading-snug">
                      {event.title}
                    </h3>

                    {/* DETAIL */}
                    <p className="text-slate-200 text-sm mt-2 leading-relaxed font-body">
                      {event.detail}
                    </p>
                  </div>
                </div>
              </div>

              {/* DOT */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold z-20 transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500 scale-110 shadow-[0_0_25px_rgba(168,85,247,0.7)]"
                    : "bg-white/10 border border-white/20"
                }`}
              >
                {event.year}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
