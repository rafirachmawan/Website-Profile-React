import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const Timeline = () => {
  const events = [
    {
      year: 2017,
      description: "🎓 Lulus SMA",
      detail: "Mulai tertarik dunia teknologi.",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      year: 2018,
      description: "🏫 Mulai Kuliah",
      detail: "Masuk Teknik Informatika.",
      image: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
    },
    {
      year: 2020,
      description: "🧑‍💻 Magang",
      detail: "Mulai belajar real project.",
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    },
    {
      year: 2022,
      description: "🎓 Lulus",
      detail: "Fokus UI/UX & frontend.",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
    },
    {
      year: 2023,
      description: "💼 Kerja",
      detail: "Frontend Developer.",
      image: "https://cdn-icons-png.flaticon.com/512/1689/1689170.png",
    },
    {
      year: 2025,
      description: "🎯 Target",
      detail: "Senior / Lead Dev.",
      image: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const refs = useRef([]);
  const progressRef = useRef(null);
  const containerRef = useRef(null);

  // 🔥 INTERSECTION (ANIMASI BERURUT + RESET)
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
            }, index * 150);
          } else {
            setVisibleItems((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.3 },
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 🔥 SCROLL PROGRESS + ACTIVE
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

  // 🔥 3D TILT
  const handleTilt = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rx = -((y - centerY) / centerY) * 10;
    const ry = ((x - centerX) / centerX) * 10;

    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.05)`;
  };

  const resetTilt = (el) => {
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div ref={containerRef} className="max-w-6xl mx-auto relative">
        <h2 className="text-center text-4xl font-bold text-white mb-16">
          My <span className="text-blue-500">Journey</span>
        </h2>

        {/* BASE LINE */}
        <div className="absolute left-1/2 w-1 h-full bg-white/10 -translate-x-1/2"></div>

        {/* PROGRESS LINE */}
        <div
          ref={progressRef}
          className="absolute left-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 -translate-x-1/2 transition-all duration-200"
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
              className={`relative flex items-center justify-between mb-16 transition-all duration-700
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* CARD */}
              <div
                className={`w-1/2 ${
                  index % 2 === 0
                    ? "pr-8 flex justify-end"
                    : "pl-8 flex justify-start ml-auto"
                }`}
              >
                <div
                  onClick={() => setSelectedEvent(event)}
                  onMouseMove={(e) => handleTilt(e, e.currentTarget)}
                  onMouseLeave={(e) => resetTilt(e.currentTarget)}
                  className={`backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-xl shadow-xl transition-all duration-300 cursor-pointer max-w-xs
                  ${isActive ? "scale-110 shadow-blue-500/30" : "hover:scale-105"}`}
                >
                  <p className="text-white text-lg font-medium">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* DOT */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold z-20 transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg"
                    : "bg-white/20"
                }`}
              >
                {event.year}
              </div>
            </div>
          );
        })}

        {/* MODAL */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-lg w-full mx-4 shadow-2xl">
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                &times;
              </button>

              <img
                src={selectedEvent.image}
                alt=""
                className="rounded-lg mb-4 w-full max-h-60 object-contain"
              />

              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                {selectedEvent.description}
              </h3>

              <p className="text-gray-200">{selectedEvent.detail}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Timeline;
