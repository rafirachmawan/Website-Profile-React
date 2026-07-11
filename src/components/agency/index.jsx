import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import gapaiLogo from "../../assets/GapaiDigitalIcon.png";

const Agency = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="agency" className="relative w-full py-20 px-6 sm:px-12 lg:px-24 flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="w-[20rem] h-[20rem] bg-orange-500/20 rounded-full blur-[100px] mix-blend-screen translate-x-32 translate-y-20"></div>
      </div>

      <div 
        className="relative z-10 w-full max-w-5xl rounded-3xl p-10 sm:p-14 border border-gray-700/50 bg-gray-900/40 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10"
        data-aos="fade-up"
      >
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide mb-6" data-aos="fade-right" data-aos-delay="100">
            Founder
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight" data-aos="fade-right" data-aos-delay="200">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              GapaiDigital
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8" data-aos="fade-right" data-aos-delay="300">
            I founded <strong>GapaiDigital</strong> to empower global businesses through scalable <strong>Web</strong>, <strong>Mobile</strong>, 
            and <strong>Custom Software</strong> solutions. We turn complex ideas into seamless digital experiences.
          </p>
          
          <div className="relative inline-block group" data-aos="fade-right" data-aos-delay="400">
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <a 
              href="https://gapaidigital.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gray-950 border border-white/10 rounded-full hover:bg-gray-900 hover:scale-[1.02]"
            >
              Explore My Agency
              <svg className="w-5 h-5 ml-2 -mr-1 text-orange-400 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content / Graphic */}
        <div className="flex-1 w-full flex justify-center items-center" data-aos="fade-left" data-aos-delay="200">
          <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center group hover:border-orange-500/50 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_20px_50px_-15px_rgba(249,115,22,0.4)]">
            
            {/* Inner glowing orb behind the logo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 bg-orange-500/20 rounded-full blur-[60px] group-hover:scale-150 group-hover:bg-orange-500/30 transition-all duration-700"></div>
            </div>

            <div className="relative z-10 text-center p-8 flex flex-col items-center justify-center h-full">
              <img 
                src={gapaiLogo} 
                alt="Gapai Digital Logo" 
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain mx-auto mb-6 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)] transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
              />
              <h3 className="text-3xl font-bold text-white mb-2 tracking-wide">GapaiDigital</h3>
              <p className="text-orange-400 font-medium text-sm tracking-widest uppercase">Tech & Digital Agency</p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 w-2 h-2 bg-orange-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(249,115,22,1)]"></div>
            <div className="absolute bottom-10 left-8 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-700 shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
            <div className="absolute top-1/2 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agency;
