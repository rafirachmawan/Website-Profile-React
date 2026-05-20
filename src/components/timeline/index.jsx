import { useEffect, useRef, useState } from "react";
import "./style.css";

const CHAPTERS = [
  {
    id: "01",
    year: "2017",
    emoji: "🎓",
    tag: "Education",
    title: "Lulus SMA",
    subtitle: "The Beginning",
    story:
      "Menyelesaikan pendidikan SMA dan untuk pertama kalinya bersentuhan dengan dunia teknologi. Rasa ingin tahu terhadap cara kerja software mulai tumbuh — sebuah percikan kecil yang kelak mengubah segalanya.",
    color: "#a855f7",
    tagBg: "rgba(168,85,247,0.12)",
    tagText: "#c084fc",
  },
  {
    id: "02",
    year: "2018",
    emoji: "🏛️",
    tag: "Education",
    title: "Mulai Kuliah",
    subtitle: "Foundations Built",
    story:
      "Resmi masuk jurusan Teknik Informatika. Fundamental programming, algoritma, dan logika komputasi dibentuk satu per satu. Setiap baris kode adalah pelajaran baru yang menyenangkan.",
    color: "#c026d3",
    tagBg: "rgba(192,38,211,0.12)",
    tagText: "#e879f9",
  },
  {
    id: "03",
    year: "2020",
    emoji: "💼",
    tag: "Career",
    title: "Magang",
    subtitle: "Real World Begins",
    story:
      "Pertama kali terjun ke real-world project. Belajar berkolaborasi dalam tim, menghadapi deadline, dan memahami bahwa coding bukan hanya tentang syntax — tapi tentang solusi nyata untuk manusia nyata.",
    color: "#db2777",
    tagBg: "rgba(219,39,119,0.12)",
    tagText: "#f472b6",
  },
  {
    id: "04",
    year: "2022",
    emoji: "🏆",
    tag: "Milestone",
    title: "Lulus Kuliah",
    subtitle: "Mission Accomplished",
    story:
      "Gelar di tangan, semangat membara. Fokus sepenuhnya beralih ke UI/UX dan Frontend Development. Mulai membangun portofolio dan memperdalam React sebagai senjata utama.",
    color: "#e11d48",
    tagBg: "rgba(225,29,72,0.12)",
    tagText: "#fb7185",
  },
  {
    id: "05",
    year: "2023",
    emoji: "🚀",
    tag: "Career",
    title: "Frontend Dev",
    subtitle: "Level Up",
    story:
      "Berkarir sebagai Frontend Developer profesional. Membangun produk digital untuk berbagai klien — dari landing page premium hingga dashboard aplikasi kompleks.",
    color: "#ea580c",
    tagBg: "rgba(234,88,12,0.12)",
    tagText: "#fb923c",
  },
  {
    id: "06",
    year: "2025+",
    emoji: "⭐",
    tag: "Vision",
    title: "Senior / Lead",
    subtitle: "The Next Chapter",
    story:
      "Target selanjutnya adalah mencapai posisi Senior atau Lead Developer — merancang arsitektur sistem, memimpin tim, dan menginspirasi developer lain untuk terus berkembang.",
    color: "#ca8a04",
    tagBg: "rgba(202,138,4,0.12)",
    tagText: "#fbbf24",
  },
];

export default function Timeline() {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState(null);
  const [animDir, setAnimDir] = useState("right"); // "left" | "right"
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const tabsWrapRef = useRef(null);
  const tabEls = useRef([]);
  const pillRef = useRef(null);

  // Entrance observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Move sliding pill to active tab
  useEffect(() => {
    const tab = tabEls.current[active];
    const pill = pillRef.current;
    if (!tab || !pill) return;
    pill.style.left = `${tab.offsetLeft}px`;
    pill.style.width = `${tab.offsetWidth}px`;
  }, [active]);

  const goTo = (index) => {
    if (index === active) return;
    setAnimDir(index > active ? "right" : "left");
    setPrevActive(active);
    setActive(index);
  };

  const ch = CHAPTERS[active];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* ── BACKGROUND GLOW ── */}
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse 55% 45% at 50% 35%, ${ch.color}0f, transparent 70%)`,
        }}
      />

      {/* ── SECTION TITLE ── */}
      <div
        className={`text-center mb-10 sm:mb-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span className="inline-block text-[10px] tracking-[0.35em] uppercase font-semibold font-body mb-3"
          style={{ color: ch.color }}>
          Career &amp; Life
        </span>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
          My{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg,#a855f7,#ec4899)" }}
          >
            Journey
          </span>
        </h2>
        <p className="font-body text-slate-400 text-sm mt-3 max-w-sm mx-auto leading-relaxed">
          Six chapters that shaped who I am as a developer.
        </p>
      </div>

      {/* ── TAB BAR ── */}
      <div
        className={`flex justify-center mb-8 sm:mb-10 transition-all duration-700 delay-100 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Outer pill container */}
        <div
          ref={tabsWrapRef}
          className="relative flex items-stretch rounded-2xl p-1 gap-0.5 overflow-x-auto scrollbar-hide"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Active sliding pill */}
          <div
            ref={pillRef}
            className="absolute top-1 bottom-1 rounded-xl pointer-events-none transition-all duration-350 ease-out"
            style={{
              background: `linear-gradient(135deg, ${ch.color}28, ${ch.color}10)`,
              border: `1px solid ${ch.color}30`,
              boxShadow: `0 0 18px ${ch.color}18`,
            }}
          />

          {CHAPTERS.map((c, i) => (
            <button
              key={i}
              ref={(el) => (tabEls.current[i] = el)}
              onClick={() => goTo(i)}
              className={`relative z-10 flex flex-col items-center justify-center px-3 sm:px-5 py-2 sm:py-3 rounded-xl transition-all duration-300 min-w-[56px] sm:min-w-[72px] gap-0.5`}
            >
              <span className="text-base sm:text-lg leading-none">{c.emoji}</span>
              <span
                className="text-[8px] sm:text-[9px] font-black tracking-widest uppercase font-body transition-colors duration-300"
                style={{ color: active === i ? c.color : "rgba(255,255,255,0.3)" }}
              >
                {c.id}
              </span>
              <span
                className="text-[8px] sm:text-[10px] font-semibold font-body whitespace-nowrap transition-colors duration-300"
                style={{ color: active === i ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.25)" }}
              >
                {c.year}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTENT CARD ── */}
      <div
        key={active}
        className={`relative max-w-3xl mx-auto journey-card-enter-${animDir}`}
      >
        {/* Card */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{
            background: "rgba(8,4,20,0.8)",
            border: `1px solid ${ch.color}20`,
            boxShadow: `0 0 60px ${ch.color}0d, 0 24px 80px rgba(0,0,0,0.5)`,
            backdropFilter: "blur(24px)",
          }}
        >
          {/* Top accent bar */}
          <div
            className="absolute top-0 inset-x-0 h-[2px]"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${ch.color} 30%, ${ch.color} 70%, transparent 100%)`,
            }}
          />

          <div className="p-5 sm:p-8 md:p-10">
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              {/* Left: emoji + meta */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${ch.color}22, ${ch.color}08)`,
                    border: `1px solid ${ch.color}28`,
                    boxShadow: `0 4px 20px ${ch.color}18`,
                  }}
                >
                  {ch.emoji}
                </div>
                <div>
                  {/* Tag */}
                  <span
                    className="inline-flex items-center px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-bold tracking-widest uppercase font-body mb-1.5"
                    style={{
                      background: ch.tagBg,
                      color: ch.tagText,
                      border: `1px solid ${ch.color}25`,
                    }}
                  >
                    {ch.tag}
                  </span>
                  {/* Year */}
                  <p
                    className="text-xs sm:text-sm font-bold font-body"
                    style={{ color: ch.color }}
                  >
                    {ch.year}
                  </p>
                </div>
              </div>

              {/* Right: chapter badge */}
              <div
                className="self-start sm:self-center flex-shrink-0 px-3 py-1.5 rounded-xl"
                style={{
                  background: `${ch.color}0d`,
                  border: `1px solid ${ch.color}18`,
                }}
              >
                <p
                  className="text-[9px] sm:text-[10px] font-black tracking-[0.25em] uppercase font-body"
                  style={{ color: `${ch.color}99` }}
                >
                  Chapter {ch.id}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div
              className="h-px mb-6 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${ch.color}40, rgba(255,255,255,0.05), transparent)`,
              }}
            />

            {/* Title + Subtitle */}
            <div className="mb-5">
              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                {ch.title}
              </h3>
              <p className="font-body text-sm mt-1.5 italic" style={{ color: `${ch.color}70` }}>
                — {ch.subtitle}
              </p>
            </div>

            {/* Story text */}
            <div
              className="rounded-xl sm:rounded-2xl p-4 sm:p-6"
              style={{
                background: `linear-gradient(135deg, ${ch.color}08, rgba(255,255,255,0.015))`,
                border: `1px solid ${ch.color}12`,
              }}
            >
              <svg
                className="w-5 h-5 mb-3 opacity-40"
                style={{ color: ch.color }}
                viewBox="0 0 24 24" fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-body text-slate-300 text-sm sm:text-base leading-relaxed">
                {ch.story}
              </p>
            </div>

            {/* ── BOTTOM NAV ── */}
            <div className="flex items-center justify-between mt-6 pt-5"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>

              {/* PREV BUTTON */}
              <button
                onClick={() => goTo(Math.max(0, active - 1))}
                disabled={active === 0}
                className="group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
                style={{
                  background: active === 0 ? "rgba(255,255,255,0.03)" : `${ch.color}12`,
                  border: `1px solid ${active === 0 ? "rgba(255,255,255,0.07)" : ch.color + "28"}`,
                  boxShadow: active === 0 ? "none" : `0 0 14px ${ch.color}18`,
                }}
              >
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5 group-disabled:translate-x-0"
                  style={{ color: active === 0 ? "rgba(255,255,255,0.25)" : ch.color }}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* CENTER INDICATOR */}
              <div className="flex flex-col items-center gap-2">
                {/* Dots */}
                <div className="flex items-center gap-1.5">
                  {CHAPTERS.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className="rounded-full transition-all duration-350"
                      style={{
                        width: active === i ? "22px" : "5px",
                        height: "5px",
                        background:
                          active === i
                            ? ch.color
                            : i < active
                            ? `${c.color}50`
                            : "rgba(255,255,255,0.1)",
                        boxShadow: active === i ? `0 0 8px ${ch.color}80` : "none",
                      }}
                    />
                  ))}
                </div>
                {/* Counter */}
                <span
                  className="text-[9px] font-black tracking-[0.2em] uppercase font-body tabular-nums"
                  style={{ color: `${ch.color}70` }}
                >
                  {ch.id} / {CHAPTERS.length.toString().padStart(2, "0")}
                </span>
              </div>

              {/* NEXT BUTTON */}
              <button
                onClick={() => goTo(Math.min(CHAPTERS.length - 1, active + 1))}
                disabled={active === CHAPTERS.length - 1}
                className="group flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
                style={{
                  background: active === CHAPTERS.length - 1 ? "rgba(255,255,255,0.03)" : `${ch.color}12`,
                  border: `1px solid ${active === CHAPTERS.length - 1 ? "rgba(255,255,255,0.07)" : ch.color + "28"}`,
                  boxShadow: active === CHAPTERS.length - 1 ? "none" : `0 0 14px ${ch.color}18`,
                }}
              >
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  style={{ color: active === CHAPTERS.length - 1 ? "rgba(255,255,255,0.25)" : ch.color }}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

            </div>
          </div>
        </div>

        {/* Watermark year behind card */}
        <div
          className="absolute -right-4 -bottom-8 pointer-events-none select-none font-black leading-none"
          style={{
            fontSize: "clamp(80px, 14vw, 160px)",
            color: "transparent",
            WebkitTextStroke: `1px ${ch.color}10`,
            zIndex: -1,
          }}
        >
          {ch.year.replace("+", "")}
        </div>
      </div>
    </section>
  );
}
