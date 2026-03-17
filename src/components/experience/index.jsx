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
    },
    {
      title: "Database",
      desc: "PostgreSQL, MongoDB",
      icon: <FaDatabase />,
      color: "from-green-500 to-emerald-400",
      company: "Project Internal",
    },
    {
      title: "Backend",
      desc: "Node.js, Express",
      icon: <FaServer />,
      color: "from-orange-500 to-yellow-400",
      company: "API Development",
    },
    {
      title: "UI/UX Design",
      desc: "Figma, Design System",
      icon: <FaCode />,
      color: "from-purple-500 to-pink-400",
      company: "UI Research",
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

  // 🔥 REVEAL EXPERIENCE
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

  // 🔥 SKILL ANIMATION ON SCROLL
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

              if (start >= skill.value) {
                clearInterval(interval);
              }
            }, 20);
          });
        } else {
          // reset kalau keluar viewport (biar animasi ulang)
          setSkillProgress(skills.map(() => 0));
        }
      },
      { threshold: 0.4 },
    );

    if (skillRef.current) observer.observe(skillRef.current);
    return () => observer.disconnect();
  }, []);

  // 🔥 3D TILT
  const handleTilt = (e, el) => {
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

  // 🔥 SPOTLIGHT
  const handleMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-center text-4xl font-bold text-white mb-16">
        My <span className="text-blue-500">Experience</span>
      </h1>

      {/* EXPERIENCE */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {experiences.map((exp, index) => {
          const isVisible = visible.includes(index);

          return (
            <div
              key={index}
              data-index={index}
              ref={(el) => (refs.current[index] = el)}
              className={`transition-all duration-700
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div
                onMouseMove={(e) => {
                  handleTilt(e, e.currentTarget);
                  handleMouseMove(e, e.currentTarget);
                }}
                onMouseLeave={(e) => resetTilt(e.currentTarget)}
                className="relative backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl shadow-xl cursor-pointer transition-all duration-300 overflow-hidden group"
              >
                {/* SPOTLIGHT */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at var(--x) var(--y), rgba(59,130,246,0.25), transparent 40%)",
                  }}
                />

                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r ${exp.color} text-white text-xl mb-4`}
                >
                  {exp.icon}
                </div>

                <h3 className="text-white font-semibold text-lg">
                  {exp.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1">{exp.company}</p>

                <p className="text-gray-300 text-sm mt-3">{exp.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* SKILLS */}
      <div ref={skillRef} className="max-w-3xl mx-auto">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Skills
        </h2>

        {skills.map((skill, i) => (
          <div key={i} className="mb-5">
            <div className="flex justify-between text-gray-300 text-sm mb-1">
              <span>{skill.name}</span>
              <span>{skillProgress[i]}%</span>
            </div>

            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                style={{ width: `${skillProgress[i]}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Konsep;
