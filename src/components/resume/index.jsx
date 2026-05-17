import React from "react";
import "./style.css";

const index = () => {
  return (
    <section id="resume" className="py-16 px-6 bg-transparent text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-heading">
          My <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,255,255,0.2)]">Resume</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-16 text-center">
          {/* Language Programming */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-heading text-white">Language Programming</h3>
            
            <div className="mb-6 text-left">
              <p className="text-slate-100 font-semibold text-sm mb-1">Javascript</p>
              <div className="bg-white/10 w-full h-2.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full w-4/5 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
              </div>
            </div>
            
            <div className="mb-6 text-left">
              <p className="text-slate-100 font-semibold text-sm mb-1">PHP</p>
              <div className="bg-white/10 w-full h-2.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full w-3/4 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
              </div>
            </div>
            
            <div className="mb-6 text-left">
              <p className="text-slate-100 font-semibold text-sm mb-1">Next Js</p>
              <div className="bg-white/10 w-full h-2.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full w-2/3 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-heading text-white">Experience</h3>
            <ul className="text-slate-200 space-y-5 text-left list-disc list-inside font-body">
              <li className="hover:text-cyan-300 transition-colors duration-300"><span className="font-semibold text-white">Staff IT</span> In Rumah Sakit Era Medika</li>
              <li className="hover:text-cyan-300 transition-colors duration-300"><span className="font-semibold text-white">Freelance</span> Web Development</li>
              <li className="hover:text-cyan-300 transition-colors duration-300"><span className="font-semibold text-white">Freelance</span> Full Stack Development</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-heading text-white">Soft Skills</h3>
            
            <div className="mb-6 text-left">
              <p className="text-slate-100 font-semibold text-sm mb-1">Communication</p>
              <div className="bg-white/10 w-full h-2.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-full rounded-full w-4/5 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
              </div>
            </div>
            
            <div className="mb-6 text-left">
              <p className="text-slate-100 font-semibold text-sm mb-1">Teamwork</p>
              <div className="bg-white/10 w-full h-2.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-full rounded-full w-3/4 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
              </div>
            </div>
            
            <div className="mb-6 text-left">
              <p className="text-slate-100 font-semibold text-sm mb-1">Problem-Solving</p>
              <div className="bg-white/10 w-full h-2.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-full rounded-full w-5/6 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
