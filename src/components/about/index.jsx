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

function index() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Halo! Saya Rafi Rachmawan, seorang Front-End Developer dengan
          pengalaman mendalam dalam membangun aplikasi web interaktif dan
          responsif. Saya memiliki keahlian di berbagai teknologi front-end
          modern seperti HTML, CSS, JavaScript, React, serta alat pengembangan
          seperti Vite. Dalam pekerjaan saya, saya sangat berfokus pada
          performa, aksesibilitas, dan desain yang user-friendly.
        </p>
        <p>
          Sebagai seorang pengembang, saya memiliki minat besar pada animasi
          web, terutama menggunakan GSAP untuk memberikan sentuhan dinamis pada
          antarmuka pengguna. Selain itu, saya juga aktif dalam melakukan riset
          untuk menemukan solusi inovatif yang memadukan estetika dan
          fungsionalitas.
        </p>
        <p>
          Saat ini, saya mengelola sebuah e-commerce yang menjual hijab, dan
          saya senang menerapkan fitur-fitur unik seperti integrasi WhatsApp
          langsung dengan produk yang dijual. Tujuan saya adalah selalu
          memberikan pengalaman digital yang memuaskan pengguna dan menjaga agar
          setiap proyek yang saya kerjakan tetap up-to-date dengan teknologi
          terbaru.
        </p>
        <h4>Programming Language & Tools</h4>
        <div className="skills">
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
    </section>
  );
}

export default index;
