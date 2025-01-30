import React from "react";
import "./style.css"; // Pastikan file CSS diimpor dengan benar
import ProfileImage from "../../assets/profil.jpeg";

const Index = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Kolom Kiri - Teks */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-4 text-white">About</h2>
          <p className="text-gray-400 mb-4">
            Halo! Saya Rafi Rachmawan, seorang Front-End Developer dengan
            pengalaman mendalam dalam membangun aplikasi web interaktif dan
            responsif. Saya memiliki keahlian di berbagai teknologi front-end
            modern seperti HTML, CSS, JavaScript, React, serta alat pengembangan
            seperti Vite dan sekarang saya lagi memperdalam ilmu saya di
            Backend. Dalam pekerjaan saya, saya sangat berfokus pada performa,
            aksesibilitas, dan desain yang user-friendly.
          </p>
          <p className="text-gray-400 font-semibold">
            Programming Language & Tools
          </p>
          <p className="text-gray-400 font-semibold">Full Stack Developer</p>
        </div>

        {/* Kolom Kanan - Gambar */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={ProfileImage}
            alt="Profile"
            className="rounded-lg shadow-lg w-full max-w-xs lg:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
