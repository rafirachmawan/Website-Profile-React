import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { FaReact, FaDatabase, FaServer, FaCode } from "react-icons/fa";

const Konsep = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      desc: "React, Tailwind, UI Modern",
      icon: <FaReact />,
      color: "from-blue-500 to-cyan-400",
      company: "Freelance / Client Project",
      impact: "20+ Projects",
      details: ["Landing Page Modern", "Dashboard Admin", "E-commerce UI"],
    },
    {
      title: "Database",
      desc: "PostgreSQL, MongoDB",
      icon: <FaDatabase />,
      color: "from-green-500 to-emerald-400",
      company: "Project Internal",
      impact: "Optimized Queries",
      details: ["Database Design", "Query Optimization", "Data Modeling"],
    },
    {
      title: "Backend",
      desc: "Node.js, Express",
      icon: <FaServer />,
      color: "from-orange-500 to-yellow-400",
      company: "API Development",
      impact: "REST API Systems",
      details: ["REST API", "Authentication JWT", "Server Architecture"],
    },
    {
      title: "UI/UX Design",
      desc: "Figma, Design System",
      icon: <FaCode />,
      color: "from-purple-500 to-pink-400",
      company: "UI Research",
      impact: "Design Systems",
      details: ["Wireframing", "Design System", "User Research"],
    },
  ];

  const skills = [
    { name: "HTML", value: 90 },
    { name: "JavaScript", value: 85 },
    { name: "React", value: 88 },
    { name: "Node.js", value: 75 },
  ];

  const refs = useRef([]);
  const skillRef = useRef(null);

  const [visible, setVisible] = useState([]);
  const [skillProgress, setSkillProgress] = useState(skills.map(() => 0));
  const [selected, setSelected] = useState(null); // 🔥 MODAL STATE

  // REVEAL EXPERIENCE
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible((prev) =>
                prev.includes(index) ? prev : [...prev, index],
              );
            }, index * 150);
          } else {
            setVisible((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.3 },
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // SKILL ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skills.forEach((skill, i) => {
            let start = 0;

            const interval = setInterval(() => {
              start += 2;

              setSkillProgress((prev) => {
                const updated = [...prev];
                updated[i] = Math.min(start, skill.value);
                return updated;
              });

              if (start >= skill.value) clearInterval(interval);
            }, 20);
          });
        } else {
          setSkillProgress(skills.map(() => 0));
        }
      },
      { threshold: 0.4 },
    );

    if (skillRef.current) observer.observe(skillRef.current);
    return () => observer.disconnect();
  }, []);

  // 3D TILT
  const handleTilt = (e, el) => {
    if (window.innerWidth < 768) return; // 🔥 disable di mobile
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const rx = -((y - cy) / cy) * 10;
    const ry = ((x - cx) / cx) * 10;

    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.05)`;
  };

  const resetTilt = (el) => {
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  };

  const handleMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="relative py-20 px-4 md:px-6 bg-transparent overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <h1 className="text-center text-3xl md:text-4xl font-bold text-white mb-16">
        My{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,255,255,0.2)]">
          Experience
        </span>
      </h1>

      {/* EXPERIENCE */}
      <div className="group max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
        {experiences.map((exp, index) => {
          const isVisible = visible.includes(index);

          return (
            <div
              key={index}
              data-index={index}
              ref={(el) => (refs.current[index] = el)}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } group-hover:opacity-40 hover:!opacity-100`}
            >
              <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 group hover:scale-[1.05] transition-all duration-500 float cursor-pointer">
                <div
                  onClick={() => setSelected(exp)}
                  onMouseMove={(e) => {
                    handleTilt(e, e.currentTarget);
                    handleMouseMove(e, e.currentTarget);
                  }}
                  onMouseLeave={(e) => resetTilt(e.currentTarget)}
                  className="bg-slate-950/65 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 h-full relative overflow-hidden"
                >
                  {/* ICON */}
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${exp.color} text-white text-lg md:text-xl mb-4 shadow-lg`}
                  >
                    {exp.icon}
                  </div>

                  <h3 className="text-white font-bold text-base md:text-lg">
                    {exp.title}
                  </h3>

                  <p className="text-slate-200 text-xs md:text-sm mt-1 font-body">
                    {exp.company}
                  </p>

                  <p className="text-slate-100 text-xs md:text-sm mt-3 font-body">
                    {exp.desc}
                  </p>

                  <p className="text-xs text-cyan-300 mt-3 font-semibold font-body tracking-wider">
                    {exp.impact}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* SKILLS */}
      <div ref={skillRef} className="max-w-3xl mx-auto">
        <h2 className="text-white text-xl md:text-2xl font-bold mb-6 text-center">
          Skills
        </h2>

        {skills.map((skill, i) => (
          <div key={i} className="mb-6">
            <div className="flex justify-between text-gray-300 text-sm mb-1">
              <span>{skill.name}</span>
              <span>{skillProgress[i]}%</span>
            </div>

            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                style={{ width: `${skillProgress[i]}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 border border-white/10 rounded-2xl p-6 md:p-8 max-w-md w-full animate-fadeIn"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <div className="text-2xl mb-4 text-blue-400">{selected.icon}</div>

            <h2 className="text-white text-lg md:text-xl font-bold mb-2">
              {selected.title}
            </h2>

            <p className="text-gray-400 text-sm mb-4">{selected.company}</p>

            <p className="text-gray-300 text-sm mb-4">{selected.desc}</p>

            <ul className="space-y-2">
              {selected.details.map((item, i) => (
                <li key={i} className="text-sm text-gray-300 flex gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-1"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Konsep;
