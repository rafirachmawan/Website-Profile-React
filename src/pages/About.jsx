import React from 'react';
import Navbar from '../components/navbar';
import aboutImage from "../assets/profil.jpeg";

export default function About() {
  return (
    <div className="bg-neo-bg min-h-screen font-body text-neo-dark selection:bg-neo-primary selection:text-black pb-20">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 mt-16">
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
            <p className="text-xl mb-6 font-bold border-l-4 border-white pl-4">
              A passionate Front-End Developer with over 3 years of experience in crafting modern, robust, and interactive web applications. 
            </p>
            <p className="text-lg mb-8 font-medium">
              I specialize in React, JavaScript, and Tailwind CSS. I believe in writing clean code, exploring creative designs (like Neobrutalism!), and delivering seamless user experiences. When I'm not coding, I'm probably experimenting with new web technologies or designing user interfaces.
            </p>
            
            <div className="flex gap-4">
              <div className="bg-neo-bg text-neo-dark border-4 border-neo-border px-4 py-2 font-black uppercase shadow-neo rotate-2">
                Problem Solver
              </div>
              <div className="bg-neo-primary text-neo-dark border-4 border-neo-border px-4 py-2 font-black uppercase shadow-neo -rotate-2">
                Creative Coder
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
