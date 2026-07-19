import React from 'react';
import { Link } from "react-router-dom";
import { portfolioList } from "../components/data/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import gapaiLogo from "../assets/GapaiDigitalIcon.png";
import heroImage from "../assets/foto-normal-remove.png";
import aboutImage from "../assets/profil.jpeg";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-neo-bg min-h-screen font-body text-neo-dark selection:bg-neo-primary selection:text-black pb-20">
      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 mt-16 md:mt-32 mb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-neo-primary border-4 border-neo-border px-4 py-1 font-bold mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
              Available for Freelance ✌️
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-heading leading-[0.9] uppercase tracking-tighter mb-6">
              Full Stack <br/>
              <span className="text-neo-accent" style={{ textShadow: "4px 4px 0px black" }}>Developer</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-10 max-w-lg border-l-4 border-neo-border pl-6 bg-neo-bg p-4 shadow-neo">
              Hi, I'm Rafi Rachmawan. Crafting modern web experiences with clean code and creative design.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#projects" className="neo-btn text-lg">View Projects</a>
              <div className="flex gap-4">
                {[
                  { icon: faGithub, link: "https://github.com/rafirachmawan", color: "bg-white" },
                  { icon: faLinkedin, link: "https://www.linkedin.com/in/rafi-rachmawan-2a8728233/", color: "bg-[#0A66C2] text-white" },
                  { icon: faInstagram, link: "https://www.instagram.com/rrrafi.rachmawan/", color: "bg-[#E4405F] text-white" }
                ].map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noreferrer" 
                     className={`w-14 h-14 flex items-center justify-center border-4 border-neo-border shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover transition-all text-2xl ${social.color}`}>
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative justify-self-center md:justify-self-end mt-12 md:mt-0 w-full flex justify-center">
            {/* Abstract shapes behind */}
            <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-neo-primary border-4 border-neo-border shadow-neo translate-x-4 translate-y-4"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-neo-secondary border-4 border-neo-border shadow-neo rounded-full z-20 animate-bounce" style={{ animationDuration: "3s" }}></div>
            
            <div className="relative z-10 border-4 border-neo-border bg-neo-bg shadow-neo w-72 h-72 md:w-96 md:h-96 p-4 md:p-6 group -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="w-full h-[85%] border-4 border-neo-border overflow-hidden bg-neo-primary">
                <img 
                  src={heroImage} 
                  alt="Rafi Rachmawan" 
                  className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <div className="w-full h-[15%] flex items-center justify-center font-bold font-heading uppercase tracking-widest mt-2">
                Rafi.jpeg
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-6 bg-neo-accent text-white border-4 border-neo-border px-6 py-4 shadow-neo z-20 font-bold rotate-3 pointer-events-none">
              3+ Years Coding
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-5 gap-8 items-center bg-neo-secondary border-4 border-neo-border p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="md:col-span-2">
            <div className="w-full h-64 md:h-full min-h-[300px] border-4 border-neo-border bg-neo-bg shadow-neo relative overflow-hidden group">
              <img 
                src={aboutImage} 
                alt="Rafi" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          </div>
          <div className="md:col-span-3 text-white">
            <h2 className="text-4xl md:text-5xl font-black font-heading uppercase mb-6" style={{ textShadow: "3px 3px 0px black" }}>
              Who is Rafi?
            </h2>
            <div className="space-y-4 font-bold text-lg">
              <p>
                Saya adalah seorang Frontend Engineer dan Full Stack Developer yang berdomisili di Indonesia. Saya sangat passionate dalam membuat website yang tidak hanya berfungsi dengan baik, tapi juga memiliki desain yang unik dan "out of the box".
              </p>
              <p>
                Mulai dari mendesain antarmuka (UI/UX) hingga membangun sistem backend yang kompleks, saya senang terlibat dalam seluruh proses pengembangan web.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="bg-neo-bg text-neo-dark border-4 border-neo-border px-4 py-2 font-black uppercase shadow-neo rotate-2">
                Problem Solver
              </div>
              <div className="bg-neo-primary text-neo-dark border-4 border-neo-border px-4 py-2 font-black uppercase shadow-neo -rotate-2">
                Creative Thinker
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS MARQUEE */}
      <section className="border-y-4 border-neo-border bg-neo-primary py-8 mb-32 overflow-hidden flex whitespace-nowrap">
        <div className="flex gap-12 font-heading font-black text-4xl uppercase items-center animate-marquee">
          <span>React.js</span> <span className="text-2xl">★</span>
          <span>Tailwind CSS</span> <span className="text-2xl">★</span>
          <span>Node.js</span> <span className="text-2xl">★</span>
          <span>TypeScript</span> <span className="text-2xl">★</span>
          <span>MongoDB</span> <span className="text-2xl">★</span>
          <span>Laravel</span> <span className="text-2xl">★</span>
          <span>Figma</span> <span className="text-2xl">★</span>
          
          {/* Duplicate for seamless loop */}
          <span>React.js</span> <span className="text-2xl">★</span>
          <span>Tailwind CSS</span> <span className="text-2xl">★</span>
          <span>Node.js</span> <span className="text-2xl">★</span>
          <span>TypeScript</span> <span className="text-2xl">★</span>
          <span>MongoDB</span> <span className="text-2xl">★</span>
          <span>Laravel</span> <span className="text-2xl">★</span>
          <span>Figma</span> <span className="text-2xl">★</span>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 mb-32">
        <div className="inline-block border-4 border-neo-border bg-neo-bg px-6 py-2 shadow-neo mb-12 -rotate-1">
          <h2 className="text-5xl md:text-7xl font-black font-heading uppercase" style={{ textShadow: "3px 3px 0px #ffe600" }}>
            Featured Work
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {portfolioList.map((project, i) => (
            <div key={project.id} className="neo-box overflow-hidden group flex flex-col">
              <div className="border-b-4 border-neo-border h-72 overflow-hidden bg-gray-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-heading uppercase mb-4 leading-tight">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-8 flex-grow">
                  {project.skill.split(',').map((skill, j) => (
                    <span key={j} className="text-sm font-bold bg-neo-bg border-2 border-neo-border px-3 py-1 uppercase">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
                
                <a href={project.link || "#"} target="_blank" rel="noreferrer" 
                   className="text-center bg-neo-secondary text-white border-4 border-neo-border px-6 py-3 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-5xl md:text-7xl font-black font-heading uppercase mb-12" style={{ textShadow: "4px 4px 0px #ff4d4d" }}>
          Timeline
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { year: "2017", title: "High School", desc: "The Beginning of the journey." },
            { year: "2018", title: "College Started", desc: "Informatics Engineering." },
            { year: "2020", title: "Internship", desc: "Real World Begins." },
            { year: "2022", title: "Graduated", desc: "Mission Accomplished." },
            { year: "2023", title: "Front-End Dev", desc: "Professional Career." },
            { year: "2025+", title: "Senior / Lead", desc: "The Next Chapter." }
          ].map((item, i) => (
            <div key={i} className="neo-box p-6 bg-neo-bg flex flex-col justify-between">
              <div>
                <span className="bg-neo-secondary text-white font-black px-3 py-1 text-sm border-2 border-neo-border inline-block mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {item.year}
                </span>
                <h3 className="text-2xl font-black font-heading uppercase mb-2 leading-tight">{item.title}</h3>
                <p className="font-medium text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="border-y-4 border-neo-border bg-neo-bg py-20 mb-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black font-heading uppercase mb-12" style={{ textShadow: "4px 4px 0px #0055ff" }}>
            Resume
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Programming */}
            <div className="neo-box p-8 bg-neo-primary">
              <h3 className="text-3xl font-black font-heading uppercase mb-6 border-b-4 border-neo-border pb-4">Programming</h3>
              <div className="space-y-6">
                {[
                  { name: "JavaScript", val: "85%" },
                  { name: "PHP", val: "75%" },
                  { name: "Next.js", val: "65%" },
                ].map((lang, i) => (
                  <div key={i}>
                    <div className="flex justify-between font-bold uppercase mb-2">
                      <span>{lang.name}</span>
                      <span>{lang.val}</span>
                    </div>
                    <div className="w-full h-4 bg-neo-bg border-2 border-neo-border">
                      <div className="h-full bg-neo-dark border-r-2 border-neo-border" style={{ width: lang.val }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="neo-box p-8 bg-neo-bg">
              <h3 className="text-3xl font-black font-heading uppercase mb-6 border-b-4 border-neo-border pb-4">Soft Skills</h3>
              <ul className="space-y-4 font-bold text-lg uppercase">
                <li className="flex items-center gap-4">
                  <span className="text-neo-accent text-3xl">★</span> Communication
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-neo-accent text-3xl">★</span> Teamwork
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-neo-accent text-3xl">★</span> Problem-Solving
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AGENCY */}
      <section id="agency" className="max-w-7xl mx-auto px-6 mb-32">
        <div className="border-4 border-neo-border bg-[#1a1a1a] shadow-neo p-12 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group">
          {/* Abstract BG */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neo-accent border-4 border-white rounded-full translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="flex-1 relative z-10">
            <div className="inline-block px-4 py-1 font-bold border-2 border-white mb-6 uppercase tracking-wider text-[#ffe600]">
              Founder
            </div>
            <h2 className="text-5xl md:text-7xl font-black font-heading uppercase mb-6" style={{ textShadow: "3px 3px 0px #0055ff" }}>
              GapaiDigital
            </h2>
            <p className="text-xl font-medium mb-10 max-w-lg border-l-4 border-[#ffe600] pl-6">
              I founded GapaiDigital to empower global businesses through scalable Web, Mobile, and Custom Software solutions.
            </p>
            <a href="https://gapaidigital.vercel.app/" target="_blank" rel="noreferrer" className="inline-block bg-[#ffe600] text-black border-4 border-white px-8 py-4 font-black uppercase shadow-[4px_4px_0px_0px_#ffffff] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#ffffff] transition-all">
              Explore My Agency
            </a>
          </div>
          
          <div className="flex-shrink-0 relative z-10">
            <div className="w-64 h-64 bg-neo-bg border-4 border-neo-border p-8 flex items-center justify-center rotate-3 group-hover:rotate-0 transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              <img src={gapaiLogo} alt="Gapai Digital" className="w-full h-full object-contain filter drop-shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-4xl mx-auto px-6 mb-32 text-center">
        <div className="bg-neo-accent border-4 border-neo-border p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative rotate-1">
          <div className="absolute -top-6 -left-6 bg-neo-primary border-4 border-neo-border w-16 h-16 rounded-full shadow-neo flex items-center justify-center text-3xl">
            💬
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black font-heading uppercase text-white mb-6" style={{ textShadow: "4px 4px 0px black" }}>
            Let's build something crazy!
          </h2>
          <p className="text-xl text-white font-medium mb-10 max-w-2xl mx-auto">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          
          <a href="https://www.linkedin.com/in/rafi-rachmawan-2a8728233/" target="_blank" rel="noreferrer" className="inline-block bg-neo-bg text-neo-dark border-4 border-neo-border px-10 py-5 text-xl font-bold uppercase shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover transition-all -rotate-2">
            Say Hello 🤙
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-4 border-neo-border bg-neo-primary py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold uppercase tracking-wider">© {new Date().getFullYear()} Rafi Rachmawan.</p>
          <p className="font-bold uppercase bg-neo-bg border-2 border-neo-border px-4 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Designed with 🔥 & Neobrutalism
          </p>
        </div>
      </footer>
    </div>
  );
}
