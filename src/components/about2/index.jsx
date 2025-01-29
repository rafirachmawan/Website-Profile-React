import React from "react";
import "./style.css"; // Mengimpor CSS dengan benar
import ProfileImage from "../../assets/profil.jpeg";

const index = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-gray-400 mb-4">
            Halo! Saya Rafi Rachmawan, seorang Front-End Developer dengan
            pengalaman mendalam dalam membangun aplikasi web interaktif dan
            responsif. Saya memiliki keahlian di berbagai teknologi front-end
            modern seperti HTML, CSS, JavaScript, React, serta alat pengembangan
            seperti Vite dan sekarang saya lagi memperdalam ilmu saya di Backend
            . Dalam pekerjaan saya, saya sangat berfokus pada performa,
            aksesibilitas, dan desain yang user-friendly.
          </p>
          <p className="text-gray-400">Programming Language & Tools</p>
          <p className="text-gray-400">Full Stack Developers</p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={ProfileImage}
            alt="Profile"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
