import portfolio1 from "../../assets/SistemRekapitulasiDosen1.jpeg";
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
];
