import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const events = [
    {
      year: 2017,
      description: "🎓 Lulus SMA",
      detail:
        "Saya lulus dari SMA Negeri 1 dengan jurusan IPA dan mulai mengejar passion di dunia teknologi.",
      image: "https://unsplash.it/400/250?image=1050",
    },
    {
      year: 2018,
      description: "🏫 Mulai Kuliah",
      detail:
        "Memulai kuliah di jurusan Teknik Informatika, belajar dasar-dasar pemrograman dan pengembangan web.",
      image: "https://unsplash.it/400/250?image=1025",
    },
    {
      year: 2020,
      description: "🧑‍💻 Magang Pertama",
      detail:
        "Melakukan magang di perusahaan startup, memperdalam frontend development.",
      image: "https://unsplash.it/400/250?image=1011",
    },
    {
      year: 2022,
      description: "🎓 Lulus Sarjana",
      detail:
        "Lulus dari perguruan tinggi dengan IPK yang memuaskan dan skripsi tentang UI/UX.",
      image: "https://unsplash.it/400/250?image=999",
    },
    {
      year: 2023,
      description: "💼 Mulai Bekerja",
      detail:
        "Mulai bekerja sebagai Frontend Developer di perusahaan teknologi.",
      image: "https://unsplash.it/400/250?image=950",
    },
    {
      year: 2025,
      description: "🎯 Target Karir",
      detail:
        "Mengejar posisi senior developer atau lead di bidang pengembangan web.",
      image: "https://unsplash.it/400/250?image=930",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  const refs = useRef([]);

  const scrollToEvent = (index) => {
    if (refs.current[index]) {
      refs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="relative container mx-auto px-6 flex flex-col space-y-16 mt-20">
      <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-10">
        TIMELINE
      </h2>

      {/* Garis tengah timeline */}
      <div className="absolute left-1/2 w-1 h-[calc(100%-3rem)] bg-gradient-to-b from-cyan-400 to-blue-500 transform -translate-x-1/2 top-20 z-0"></div>

      {/* Event loop */}
      {events.map((event, index) => (
        <div
          key={index}
          className="relative flex items-center justify-between w-full z-10"
          ref={(el) => (refs.current[index] = el)}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          {index % 2 === 0 ? (
            <>
              <div className="w-1/2 pr-8 flex justify-end">
                <div
                  className="bg-white bg-opacity-80 p-6 rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl w-fit max-w-xs cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <p className="text-gray-700 text-lg font-medium">
                    {event.description}
                  </p>
                </div>
              </div>
              <div className="w-1/2 pl-8"></div>
            </>
          ) : (
            <>
              <div className="w-1/2 pr-8"></div>
              <div className="w-1/2 pl-8 flex justify-start">
                <div
                  className="bg-white bg-opacity-80 p-6 rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl w-fit max-w-xs cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  <p className="text-gray-700 text-lg font-medium">
                    {event.description}
                  </p>
                </div>
              </div>
            </>
          )}

          <div
            className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-blue-500 rounded-full w-14 h-14 flex items-center justify-center z-20 cursor-pointer transition hover:scale-110 hover:shadow-lg"
            onClick={() => scrollToEvent(index)}
            title="Klik untuk scroll ke event"
          >
            <span className="text-lg font-bold text-gray-800">
              {event.year}
            </span>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/20 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-2xl p-6 max-w-lg shadow-2xl relative mx-4 animate__animated animate__fadeInUp"
            data-aos="zoom-in"
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setSelectedEvent(null)}
            >
              &times;
            </button>
            <img
              src={selectedEvent.image}
              alt={selectedEvent.description}
              className="rounded-lg mb-4 w-full h-auto object-cover"
            />
            <h3 className="text-2xl font-bold mb-2 text-blue-600">
              {selectedEvent.description}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {selectedEvent.detail}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
