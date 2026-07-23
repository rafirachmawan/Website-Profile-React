import portfolio1 from "../../assets/SistemRekapitulasiDosen1.jpeg";
import portfolio2 from "../../assets/Portofolio1.jpeg";
import portfolio3 from "../../assets/ErtigaStore1.jpeg";
import portfolio4 from "../../assets/Undangan1.jpeg";
import portfolio5 from "../../assets/RentalMobil1.jpeg";
import portfolio6 from "../../assets/Galery1.jpeg";
import shiningSun from "../../assets/bookingShiningsun/bookingClassShiningsun.jpg";
import absensiShiningSun from "../../assets/absensiShiningsun/absensiShiningsun.jpg";

export const portfolioList = [
  {
    id: "0",
    title: "Aplikasi Jadwal & Booking Class Shiningsun",
    subtitle: "Class Scheduling Platform",
    description:
      "Aplikasi manajemen jadwal kelas dan booking sesi untuk Shiningsun. Fitur multi-cabang, auto-booking bulanan, manajemen siswa, dan dashboard admin real-time.",
    image: shiningSun,
    skill: "Next.js, Supabase, TypeScript, Tailwind CSS",
    category: "Web App",
    year: "2025",
    featured: true,
    link: "https://aplikasi-booking-class-shiningsun.vercel.app/login",
  },
  {
    id: "0b",
    title: "Aplikasi Absensi Shiningsun",
    subtitle: "Attendance Tracking App",
    description:
      "Platform absensi dan manajemen kehadiran khusus untuk instruktur dan staf Shiningsun dengan pencatatan real-time.",
    image: absensiShiningSun,
    skill: "React.js, Firebase, Tailwind CSS",
    category: "Web App",
    year: "2025",
    featured: false,
    link: "https://absensi-shiningsun.web.app/",
  },
  {
    id: "1",
    title: "Sistem Rekapitulasi Kinerja Dosen",
    subtitle: "Profile Matching Method",
    description:
      "Aplikasi web untuk merekap dan mengevaluasi kinerja dosen menggunakan metode Profile Matching. Dibangun sebagai proyek skripsi dengan sistem scoring otomatis.",
    image: portfolio1,
    skill: "React.js, PHP, Express, HTML, CSS",
    category: "Web App",
    year: "2024",
    featured: false,
    link: "https://github.com/rafirachmawan/skripsi_profile_matching-",
  },
  {
    id: "2",
    title: "Website Profile Company",
    subtitle: "Corporate Landing Page",
    description:
      "Website profil perusahaan modern dengan desain neobrutalism, animasi scroll, dan tampilan responsif untuk semua perangkat.",
    image: portfolio2,
    skill: "React.js, HTML, CSS, JavaScript",
    category: "Website",
    year: "2024",
    featured: false,
    link: "https://github.com/rafirachmawan/Website-Profile-React",
  },
  {
    id: "3",
    title: "Website E-Commerce",
    subtitle: "Online Store Platform",
    description:
      "Platform e-commerce lengkap dengan fitur keranjang belanja, manajemen produk, dan dashboard admin yang intuitif.",
    image: portfolio3,
    skill: "React.js, PHP, Express, CSS",
    category: "Web App",
    year: "2023",
    featured: false,
    link: "",
  },
  {
    id: "4",
    title: "Undangan Digital",
    subtitle: "Digital Invitation Card",
    description:
      "Undangan pernikahan digital yang elegan dengan animasi interaktif, countdown timer, dan form RSVP online.",
    image: portfolio4,
    skill: "React.js, HTML, CSS, JavaScript",
    category: "Website",
    year: "2023",
    featured: false,
    link: "",
  },
  {
    id: "5",
    title: "Website Rental Mobil",
    subtitle: "Binar Academy Bootcamp",
    description:
      "Platform rental mobil online dengan sistem booking real-time, manajemen armada kendaraan, dan integrasi pembayaran.",
    image: portfolio5,
    skill: "React.js, PHP, Express, CSS",
    category: "Web App",
    year: "2022",
    featured: false,
    link: "",
  },
  {
    id: "6",
    title: "Website Gallery Film",
    subtitle: "Movie Discovery App",
    description:
      "Aplikasi galeri film dengan fitur pencarian, rating, dan ulasan. Terintegrasi dengan API film untuk data terkini.",
    image: portfolio6,
    skill: "Laravel, PHP, HTML, CSS, JavaScript",
    category: "Web App",
    year: "2022",
    featured: false,
    link: "",
  },
];
