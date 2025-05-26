import React, { useEffect } from "react";
import "./style.css"; // Pastikan sudah ada AOS CSS kalau dipakai
import ProfileImage from "../../assets/profil.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="py-16 px-6 bg-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Kolom Kiri - Deskripsi */}
        <div className="w-full lg:w-1/2 text-left" data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Halo! Saya{" "}
            <span className="font-semibold text-white">Rafi Rachmawan</span>,
            seorang Front-End Developer yang antusias dalam menciptakan
            antarmuka web yang interaktif, modern, dan responsif. Saya memiliki
            pengalaman menggunakan HTML, CSS, JavaScript, React, serta alat
            bantu seperti Vite. Saat ini saya sedang memperluas kemampuan saya
            ke dunia Backend.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Dalam setiap proyek, saya selalu mengedepankan performa,
            aksesibilitas, dan desain yang ramah pengguna. Saya juga percaya
            bahwa detail kecil adalah kunci dari pengalaman pengguna yang luar
            biasa.
          </p>

          <p className="text-white font-semibold mt-6 mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-600 text-white px-3 py-1 text-sm rounded-full">
              HTML
            </span>
            <span className="bg-yellow-500 text-black px-3 py-1 text-sm rounded-full">
              JavaScript
            </span>
            <span className="bg-cyan-500 text-white px-3 py-1 text-sm rounded-full">
              React
            </span>
            <span className="bg-purple-600 text-white px-3 py-1 text-sm rounded-full">
              Vite
            </span>
            <span className="bg-green-600 text-white px-3 py-1 text-sm rounded-full">
              Node.js
            </span>
          </div>

          <p className="text-white font-semibold mt-6 mb-2">My Journey:</p>
          <ul className="border-l-2 border-blue-500 pl-4 text-gray-400 space-y-2 text-sm">
            <li>
              <span className="font-bold text-white">2022:</span> Mulai belajar
              dasar-dasar pemrograman web.
            </li>
            <li>
              <span className="font-bold text-white">2023:</span> Fokus ke
              Front-End dengan React & Tailwind.
            </li>
            <li>
              <span className="font-bold text-white">2024:</span> Mengerjakan
              berbagai proyek freelance & klien.
            </li>
            <li>
              <span className="font-bold text-white">2025:</span> Memperdalam
              Backend & bangun aplikasi skala real.
            </li>
          </ul>
        </div>

        {/* Kolom Kanan - Gambar */}
        <div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          data-aos="fade-left"
        >
          <div className="bg-white rounded-xl p-2 shadow-lg transform transition-transform hover:scale-105 duration-300">
            <img
              src={ProfileImage}
              alt="Rafi Rachmawan"
              className="rounded-lg w-full max-w-xs lg:max-w-sm"
            />
            <p className="text-center text-sm text-gray-800 mt-2 font-semibold">
              Rafi Rachmawan ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
