import React, { useEffect } from "react";
import "./style.css";

const Resume = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 800, once: true });
    });
  }, []);

  return (
    <section id="resume" className="relative py-20 px-4 sm:px-6 overflow-hidden font-body text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-[10px] tracking-[0.3em] uppercase font-bold text-pink-400 mb-6 shadow-[0_0_15px_rgba(236,72,153,0.2)]">
            // Core Competencies
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">Resume</span>
          </h2>
        </div>

        {/* Grid Container -> Changed to Flex for safer mobile stacking */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* 1. Language Programming Panel */}
          <div 
            className="w-full lg:w-1/3 group rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)] hover:-translate-y-1"
            data-aos="fade-up" data-aos-delay="0"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-8 font-heading text-white flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              Programming
            </h3>
            
            <div className="space-y-7">
              {[
                { name: "JavaScript", val: "85%", color: "#a855f7" },
                { name: "PHP", val: "75%", color: "#c026d3" },
                { name: "Next.js", val: "65%", color: "#ec4899" },
              ].map((lang, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between text-xs mb-2 font-mono uppercase tracking-[0.15em]">
                    <span className="text-slate-300 group-hover:text-white transition-colors">{lang.name}</span>
                    <span style={{ color: lang.color }} className="font-bold">{lang.val}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: lang.val, background: lang.color, boxShadow: `0 0 10px ${lang.color}` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Experience Panel */}
          <div 
            className="w-full lg:w-1/3 group rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(217,70,239,0.15)] hover:-translate-y-1"
            data-aos="fade-up" data-aos-delay="100"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-8 font-heading text-white flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-fuchsia-500 shadow-[0_0_10px_#d946ef]" />
              Experience
            </h3>
            
            <div className="relative border-l border-white/10 ml-2 space-y-8">
              {[
                { title: "Staff IT", place: "Era Medika Hospital", color: "#d946ef" },
                { title: "Freelance", place: "Web Development", color: "#ec4899" },
                { title: "Freelance", place: "Full Stack Development", color: "#f43f5e" },
              ].map((exp, i) => (
                <div key={i} className="relative pl-6 group/item cursor-default">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-black border-2 border-white/30 group-hover/item:border-fuchsia-500 transition-colors duration-300 shadow-sm" />
                  
                  {/* Content */}
                  <h4 className="text-white font-bold text-base sm:text-lg mb-1 group-hover/item:text-fuchsia-400 transition-colors tracking-wide">{exp.title}</h4>
                  <p className="text-slate-400 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em]">{exp.place}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Soft Skills Panel */}
          <div 
            className="w-full lg:w-1/3 group rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 sm:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(236,72,153,0.15)] hover:-translate-y-1"
            data-aos="fade-up" data-aos-delay="200"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-8 font-heading text-white flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]" />
              Soft Skills
            </h3>
            
            <div className="flex flex-col gap-4">
              {[
                { name: "Communication", desc: "Verbal & Written" },
                { name: "Teamwork", desc: "Collaboration & Empathy" },
                { name: "Problem-Solving", desc: "Analytical Thinking" },
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-2xl p-3 sm:p-4 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300 group/badge">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl flex items-center justify-center bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-pink-400 font-bold font-mono text-sm sm:text-base group-hover/badge:scale-110 transition-transform duration-300">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base">{skill.name}</h4>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest mt-1 font-semibold">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
