import React, { useEffect } from "react";
import "./style.css";
import {
  FaPhp,
  FaHtml5,
  FaReact,
  FaBootstrap,
  FaRust,
  FaLaravel,
  FaGit,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";
import ProfileImage from "../../assets/profil.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="py-16 px-6 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Deskripsi - Kiri */}
        <div className="w-full lg:w-2/3" data-aos="fade-right">
          <h3 className="text-3xl font-bold mb-4 text-white">About</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Halo! Saya{" "}
            <span className="font-semibold text-white">Rafi Rachmawan</span>,
            seorang Front-End Developer dengan pengalaman mendalam dalam
            membangun aplikasi web interaktif dan responsif. Saya memiliki
            keahlian di berbagai teknologi front-end modern seperti HTML, CSS,
            JavaScript, React, serta alat pengembangan seperti Vite. Dalam
            pekerjaan saya, saya sangat berfokus pada performa, aksesibilitas,
            dan desain yang user-friendly.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Sebagai seorang pengembang, saya memiliki minat besar pada animasi
            web, terutama menggunakan GSAP untuk memberikan sentuhan dinamis
            pada antarmuka pengguna. Selain itu, saya juga aktif dalam melakukan
            riset untuk menemukan solusi inovatif yang memadukan estetika dan
            fungsionalitas.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Saat ini, saya mengelola sebuah e-commerce yang menjual hijab, dan
            saya senang menerapkan fitur-fitur unik seperti integrasi WhatsApp
            langsung dengan produk yang dijual. Tujuan saya adalah selalu
            memberikan pengalaman digital yang memuaskan pengguna dan menjaga
            agar setiap proyek yang saya kerjakan tetap up-to-date dengan
            teknologi terbaru.
          </p>

          <h4 className="text-xl font-semibold mb-3">
            Programming Language & Tools
          </h4>
          <div className="flex flex-wrap gap-4 text-3xl text-gray-400">
            <FaPhp />
            <FaHtml5 />
            <SiJavascript />
            <FaReact />
            <MdOutlineCss />
            <FaGolang />
            <FaBootstrap />
            <FaRust />
            <RiTailwindCssFill />
            <FaLaravel />
            <DiCodeigniter />
            <FaGit />
          </div>
        </div>

        {/* Foto Profil - Kanan */}
        <div
          className="w-full lg:w-1/3 flex justify-center"
          data-aos="fade-left"
        >
          <div className="bg-white rounded-xl p-3 shadow-xl transform transition-transform hover:scale-105 duration-300">
            <img
              src={ProfileImage}
              alt="Rafi Rachmawan"
              className="rounded-lg w-full max-w-sm"
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
