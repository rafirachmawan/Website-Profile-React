import React, { useEffect } from "react";
import "./style.css";
import Telepon from "../../assets/telepon.png";
import Gmail from "../../assets/gmail.png";
import Github from "../../assets/github.png";

const ContactMe = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 800, once: true });
    });
  }, []);

  return (
    <section id="contact" className="relative py-24 bg-transparent text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-fuchsia-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-[10px] tracking-[0.3em] uppercase font-bold text-fuchsia-400 mb-6 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
            // Let's Connect
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">Me</span>
          </h2>
          <p className="text-slate-400 mt-5 text-sm sm:text-base max-w-md mx-auto leading-relaxed font-body">
            Terbuka untuk kolaborasi, proyek kerja sama, atau sekadar berbincang tentang teknologi.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-5xl mx-auto">
          
          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/6285707185783" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center text-center rounded-3xl border border-white/10 bg-white/[0.015] backdrop-blur-xl p-10 hover:bg-white/[0.04] hover:border-fuchsia-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(217,70,239,0.15)] overflow-hidden"
            data-aos="fade-up" data-aos-delay="0"
          >
            {/* Inner Glow Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/0 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon Container */}
            <div className="w-20 h-20 mb-6 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-fuchsia-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={Telepon}
                alt="WhatsApp"
                className="w-12 h-12 object-contain relative z-10 filter drop-shadow-[0_0_8px_rgba(217,70,239,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(217,70,239,0.6)] group-hover:scale-110 transition-all duration-500"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-white font-heading mb-2">WhatsApp</h3>
            <p className="text-fuchsia-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-4">Direct Message</p>
            <p className="text-slate-300 font-medium font-body group-hover:text-white transition-colors">+62 857 0718 5783</p>
          </a>

          {/* Email Card */}
          <a 
            href="mailto:rafirachmawan1987@gmail.com"
            className="group relative flex flex-col items-center text-center rounded-3xl border border-white/10 bg-white/[0.015] backdrop-blur-xl p-10 hover:bg-white/[0.04] hover:border-pink-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(236,72,153,0.15)] overflow-hidden"
            data-aos="fade-up" data-aos-delay="100"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/0 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-20 h-20 mb-6 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-pink-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={Gmail}
                alt="Email"
                className="w-12 h-12 object-contain relative z-10 filter drop-shadow-[0_0_8px_rgba(236,72,153,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.6)] group-hover:scale-110 transition-all duration-500"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-white font-heading mb-2">Email</h3>
            <p className="text-pink-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-4">Business Inquiries</p>
            <p className="text-slate-300 font-medium font-body text-sm group-hover:text-white transition-colors break-all">rafirachmawan1987@gmail.com</p>
          </a>

          {/* GitHub Card */}
          <a 
            href="https://github.com/rafirachmawan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center text-center rounded-3xl border border-white/10 bg-white/[0.015] backdrop-blur-xl p-10 hover:bg-white/[0.04] hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] overflow-hidden"
            data-aos="fade-up" data-aos-delay="200"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-20 h-20 mb-6 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={Github}
                alt="GitHub"
                className="w-12 h-12 object-contain relative z-10 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-all duration-500"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-white font-heading mb-2">GitHub</h3>
            <p className="text-purple-400 text-[10px] font-mono uppercase tracking-[0.2em] mb-4">Code Repository</p>
            <p className="text-slate-300 font-medium font-body group-hover:text-white transition-colors">@rafirachmawan</p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default ContactMe;
