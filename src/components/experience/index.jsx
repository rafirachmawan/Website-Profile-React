import React, { useEffect, useState } from "react";
import { FaReact, FaDatabase, FaServer, FaPaintBrush, FaMicrochip } from "react-icons/fa";
import "./style.css";

const TABS = [
  {
    id: "frontend",
    title: "Frontend Developer",
    short: "Frontend",
    desc: "Mengembangkan antarmuka modern yang responsif dan interaktif dengan ekosistem React. Berfokus pada performa, aksesibilitas, dan pengalaman pengguna yang luar biasa (UI/UX).",
    icon: <FaReact />,
    color: "#a855f7", // purple-500
    company: "Freelance / Client Project",
    impact: "20+ Projects Completed",
    details: ["React & Vite Architecture", "Tailwind CSS Styling", "State Management (Redux/Zustand)", "Responsive Web Design"],
  },
  {
    id: "database",
    title: "Database Management",
    short: "Database",
    desc: "Merancang dan mengelola basis data relasional maupun non-relasional. Mengoptimalkan query untuk memastikan pengambilan data yang cepat, aman, dan efisien.",
    icon: <FaDatabase />,
    color: "#10b981", // emerald-500
    company: "Internal Projects",
    impact: "Query Optimization",
    details: ["PostgreSQL & MySQL", "MongoDB", "Data Modeling", "Indexing & Performance"],
  },
  {
    id: "backend",
    title: "Backend Systems",
    short: "Backend",
    desc: "Membangun arsitektur server-side yang tangguh dan scalable. Merancang RESTful API yang aman untuk menghubungkan frontend dengan layanan database.",
    icon: <FaServer />,
    color: "#f59e0b", // amber-500
    company: "API Development",
    impact: "REST API Architecture",
    details: ["Node.js & Express", "Authentication (JWT)", "Middleware & Security", "Server Deployment"],
  },
  {
    id: "uiux",
    title: "UI/UX Research",
    short: "UI/UX",
    desc: "Mendesain purwarupa (prototype) dan sistem desain sebelum pengembangan. Memastikan setiap interaksi terasa natural dan memenuhi standar aksesibilitas.",
    icon: <FaPaintBrush />,
    color: "#ec4899", // pink-500
    company: "Design Systems",
    impact: "Pixel Perfect Interfaces",
    details: ["Figma Prototyping", "Wireframing", "Design System Creation", "User Flow Mapping"],
  },
  {
    id: "skills",
    title: "System Specifications",
    short: "Tech Stack",
    desc: "Memori sistem dan kapasitas prosesor yang mendukung operasional saat ini. Bar indikator di bawah menunjukkan tingkat penguasaan pada berbagai bahasa pemrograman dan alat.",
    icon: <FaMicrochip />,
    color: "#f43f5e", // rose-500
    company: "Skill Assessment",
    impact: "Core Capabilities",
    details: [], // Akan render skill bars di bawah
  }
];

const SKILLS_DATA = [
  { name: "React / Vite", value: 92, color: "#a855f7" },
  { name: "Tailwind CSS", value: 95, color: "#c026d3" },
  { name: "JavaScript", value: 85, color: "#f59e0b" },
  { name: "Node.js", value: 75, color: "#10b981" },
  { name: "Figma", value: 80, color: "#ec4899" },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [descText, setDescText] = useState("");

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 800, once: true });
    });
  }, []);

  const active = TABS[activeTab];

  // Efek Mesin Ketik (Typewriter) untuk Deskripsi Terminal
  useEffect(() => {
    if (isAnimating) {
      setDescText("");
    } else {
      let currentText = "";
      let i = 0;
      const interval = setInterval(() => {
        if (i < active.desc.length) {
          currentText += active.desc[i];
          setDescText(currentText);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isAnimating, active]);

  const handleTabChange = (index) => {
    if (activeTab === index) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsAnimating(false);
    }, 250); // fade transisi cepat
  };

  return (
    <section id="experience" className="relative py-20 sm:py-32 px-4 md:px-6 overflow-hidden font-body text-slate-300">
      
      {/* Heading */}
      <div className="text-center mb-16" data-aos="fade-up">
        <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] tracking-[0.3em] uppercase font-bold text-purple-400 mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          // Terminal Access
        </span>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">Experience</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="100">
        
        {/* === KIRI: SIDEBAR CONTROL PANEL === */}
        <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-3 z-10 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory scroll-smooth" style={{ scrollbarWidth: 'none' }}>
          {TABS.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(idx)}
                className={`group relative flex-shrink-0 w-[85%] sm:w-[280px] lg:w-full snap-center flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl border transition-all duration-300 overflow-hidden text-left focus:outline-none bg-transparent
                  ${isActive 
                    ? 'border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)] scale-100' 
                    : 'border-white/5 hover:border-white/15 hover:scale-[1.01]'}`}
                style={{
                  backgroundColor: isActive ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.02)'
                }}
              >
                {/* Active Glow Background */}
                {isActive && (
                  <div 
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{ background: `linear-gradient(90deg, ${tab.color}, transparent)` }}
                  />
                )}

                {/* Garis Aksen Vertikal (Kiri) */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 scale-y-50 group-hover:opacity-50 group-hover:scale-y-100'}`}
                  style={{ background: tab.color, boxShadow: `0 0 10px ${tab.color}` }}
                />

                {/* Ikon */}
                <div 
                  className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-xl border transition-all duration-300 z-10
                    ${isActive ? 'border-white/20' : 'border-white/5'}`}
                  style={{ 
                    background: isActive ? `${tab.color}30` : 'rgba(255,255,255,0.03)',
                    color: isActive ? tab.color : 'rgba(255,255,255,0.4)',
                    boxShadow: isActive ? `0 0 15px ${tab.color}40` : 'none'
                  }}
                >
                  {tab.icon}
                </div>

                {/* Teks Label */}
                <div className="z-10 flex-1">
                  <h4 className={`font-bold transition-colors duration-300 tracking-wide ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {tab.short}
                  </h4>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono mt-1 opacity-70">
                    {idx === 4 ? 'SYS.SPECS' : `MOD_0${idx + 1}`}
                  </p>
                </div>
                
                {/* Arrow indicator (hanya tampil jika aktif) */}
                <div className={`transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <span style={{ color: tab.color }} className="text-sm font-bold">›</span>
                </div>
              </button>
            );
          })}
        </div>


        {/* === KANAN: MAIN TERMINAL === */}
        <div className="w-full lg:w-2/3 z-10">
          <div className="relative h-full min-h-[440px] w-full rounded-3xl border border-white/10 bg-[#060411]/60 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
            
            {/* Terminal Header (Lampu Mac/Windows) */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-white/[0.02]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)] border border-white/10"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)] border border-white/10"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)] border border-white/10"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-[10px] text-slate-400/70 font-mono tracking-[0.3em] uppercase">
                  user_access // {active.id}.exe
                </span>
              </div>
              {/* Fake Network Status */}
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-white/20 rounded-full animate-pulse"></div>
                <div className="w-1 h-3 bg-white/40 rounded-full animate-pulse delay-75"></div>
                <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>

            {/* Terminal Content (Dengan Animasi Transisi) */}
            <div className={`flex-1 p-6 sm:p-8 md:p-10 transition-all duration-300 ${isAnimating ? 'opacity-0 scale-[0.98] blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
              
              {/* Header Konten */}
              <div className="flex items-start gap-5 mb-8">
                <div 
                  className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-2xl items-center justify-center text-3xl border border-white/20"
                  style={{ background: `${active.color}20`, color: active.color, boxShadow: `0 0 20px ${active.color}40` }}
                >
                  {active.icon}
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mb-2 tracking-tight">
                    {active.title}
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span 
                      className="px-2.5 py-1 bg-white/5 border border-white/10 rounded uppercase text-[10px] font-bold tracking-widest"
                      style={{ color: active.color }}
                    >
                      {active.impact}
                    </span>
                    <span className="text-xs text-slate-400 font-mono tracking-wide">{active.company}</span>
                  </div>
                </div>
              </div>

              {/* Teks Konsol Hacker (Typewriter) */}
              <div className="bg-black/50 border border-white/5 rounded-xl p-5 mb-8 font-mono text-sm leading-relaxed relative group shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-xl opacity-70" style={{ background: active.color }} />
                <p className="text-slate-300">
                  <span className="mr-2 font-bold" style={{ color: active.color }}>{'>'}</span> 
                  {descText}
                  <span className="animate-pulse inline-block ml-1 w-2 h-4 align-middle" style={{ background: active.color }}></span>
                </p>
              </div>

              {/* === DYNAMIC CONTENT: SKILLS ATAU DETAIL === */}
              {activeTab === 4 ? (
                /* Mode: SYSTEM SPECS (SKILL BARS) */
                <div className="grid gap-6">
                  {SKILLS_DATA.map((skill, i) => (
                    <div key={i} className="w-full">
                      <div className="flex justify-between text-[11px] mb-2 font-mono uppercase tracking-[0.2em]">
                        <span className="text-white/80">{skill.name}</span>
                        <span className="font-bold" style={{ color: skill.color }}>{skill.value}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div
                          className="h-full rounded-full transition-all duration-[1200ms] ease-out"
                          style={{ 
                            width: isAnimating ? '0%' : `${skill.value}%`, 
                            background: skill.color, 
                            boxShadow: `0 0 15px ${skill.color}` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Mode: MODULE DETAILS */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {active.details.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-colors rounded-xl p-3.5">
                      <div 
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0" 
                        style={{ background: active.color, boxShadow: `0 0 10px ${active.color}` }} 
                      />
                      <span className="text-sm font-medium text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Glowing Accent di belakang terminal (Pojok Kanan Bawah) */}
            <div 
              className="absolute -bottom-32 -right-32 w-80 h-80 blur-[120px] rounded-full pointer-events-none opacity-30 transition-colors duration-700"
              style={{ background: active.color }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
