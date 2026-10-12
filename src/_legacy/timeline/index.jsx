import { useEffect, useRef } from "react";
import "./style.css";

const CHAPTERS = [
  {
    id: "01",
    year: "2017",
    emoji: "🎓",
    tag: "Education",
    title: "High School Graduation",
    subtitle: "The Beginning",
    story:
      "Graduated high school and had my first encounter with the tech world. Curiosity about how software works began to grow—a small spark that would eventually change everything.",
    color: "#a855f7",
    tagBg: "rgba(168,85,247,0.12)",
    tagText: "#c084fc",
  },
  {
    id: "02",
    year: "2018",
    emoji: "🏛️",
    tag: "Education",
    title: "College Started",
    subtitle: "Foundations Built",
    story:
      "Officially enrolled in Informatics Engineering. Built the fundamentals of programming, algorithms, and computational logic step by step. Every line of code was a fun new lesson.",
    color: "#c026d3",
    tagBg: "rgba(192,38,211,0.12)",
    tagText: "#e879f9",
  },
  {
    id: "03",
    year: "2020",
    emoji: "💼",
    tag: "Career",
    title: "Internship",
    subtitle: "Real World Begins",
    story:
      "First dive into real-world projects. Learned team collaboration, met deadlines, and realized that coding isn't just about syntax—it's about real solutions for real people.",
    color: "#db2777",
    tagBg: "rgba(219,39,119,0.12)",
    tagText: "#f472b6",
  },
  {
    id: "04",
    year: "2022",
    emoji: "🏆",
    tag: "Milestone",
    title: "Graduated",
    subtitle: "Mission Accomplished",
    story:
      "Degree in hand, passion ignited. Fully shifted focus to UI/UX and Front-End Development. Started building a portfolio and mastering React as my primary weapon.",
    color: "#e11d48",
    tagBg: "rgba(225,29,72,0.12)",
    tagText: "#fb7185",
  },
  {
    id: "05",
    year: "2023",
    emoji: "🚀",
    tag: "Career",
    title: "Front-End Dev",
    subtitle: "Level Up",
    story:
      "Began career as a professional Front-End Developer. Built digital products for various clients—from premium landing pages to complex application dashboards.",
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
      "The next target is reaching a Senior or Lead Developer position—designing system architectures, leading teams, and inspiring other developers to keep growing.",
    color: "#ca8a04",
    tagBg: "rgba(202,138,4,0.12)",
    tagText: "#fbbf24",
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden font-body"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none opacity-30">
        <div className="absolute top-[10%] left-[-10%] w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 bg-pink-600/20 rounded-full mix-blend-screen filter blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24" data-aos="fade-up">
          <span className="inline-block text-xs tracking-[0.3em] uppercase font-bold text-purple-400 mb-4">
            Career & Life
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Journey
            </span>
          </h2>
          <p className="text-slate-400 mt-5 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Looking back at the journey from learning to code to becoming a professional.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative">
          {/* Vertical Line Background (Desktop) */}
          <div className="hidden md:block absolute left-[110px] top-4 bottom-4 w-[2px] bg-white/5 rounded-full" />

          {CHAPTERS.map((ch, i) => (
            <div 
              key={i} 
              className="relative flex flex-col md:flex-row gap-6 md:gap-12 mb-10 sm:mb-16 group"
              data-aos="fade-up"
            >
              {/* Left: Year (Desktop) */}
              <div className="hidden md:block w-[90px] shrink-0 text-right pt-6">
                <span className="text-xl font-bold transition-all duration-300 group-hover:text-white text-white/30 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  {ch.year}
                </span>
              </div>

              {/* Middle: Dot */}
              <div className="hidden md:flex flex-col items-center pt-7 relative z-10">
                <div 
                  className="w-4 h-4 rounded-full border-2 bg-black/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-150"
                  style={{ borderColor: ch.color, boxShadow: `0 0 20px ${ch.color}80` }}
                />
                {/* Glowing line overlay when hovered */}
                {i !== CHAPTERS.length - 1 && (
                  <div 
                    className="w-[2px] h-full absolute top-12 bottom-[-4rem] transition-all duration-500 opacity-0 group-hover:opacity-100"
                    style={{ background: `linear-gradient(to bottom, ${ch.color}, transparent)` }}
                  />
                )}
              </div>

              {/* Right: Content Card */}
              <div className="flex-1">
                <div 
                  className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all duration-500 border border-white/5 bg-white/[0.015] hover:bg-white/[0.04] group-hover:-translate-y-1"
                  style={{
                    boxShadow: "0 10px 30px -15px rgba(0,0,0,0.5)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Hover Accent Bar */}
                  <div 
                    className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full transition-all duration-500 opacity-0 group-hover:opacity-100 scale-y-50 group-hover:scale-y-100"
                    style={{ background: ch.color, boxShadow: `0 0 10px ${ch.color}` }}
                  />

                  {/* Mobile Year */}
                  <div className="flex items-center gap-3 md:hidden mb-5">
                    <div 
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: ch.color, boxShadow: `0 0 10px ${ch.color}` }}
                    />
                    <span className="text-sm font-bold tracking-widest text-white/60">{ch.year}</span>
                  </div>

                  {/* Content Header */}
                  <div className="flex items-center gap-4 sm:gap-5 mb-5">
                    <div 
                      className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{ 
                        background: `linear-gradient(135deg, ${ch.color}20, transparent)`,
                        border: `1px solid ${ch.color}30`
                      }}
                    >
                      <span className="text-2xl sm:text-3xl filter drop-shadow-md">{ch.emoji}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mb-1 tracking-tight">
                        {ch.title}
                      </h3>
                      <span className="text-xs sm:text-sm font-medium tracking-wide" style={{ color: ch.color }}>
                        {ch.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent my-5" />

                  {/* Story */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {ch.story}
                  </p>

                  {/* Tag */}
                  <div className="mt-6">
                    <span 
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10"
                      style={{ background: ch.tagBg, color: ch.tagText }}
                    >
                      {ch.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
