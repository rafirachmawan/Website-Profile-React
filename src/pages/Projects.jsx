import React from 'react';
import Navbar from '../components/navbar';
import { portfolioList } from "../components/data/index";

export default function Projects() {
  return (
    <div className="bg-neo-bg min-h-screen font-body text-neo-dark selection:bg-neo-primary selection:text-black pb-20">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="inline-block border-4 border-neo-border bg-neo-bg px-6 py-2 shadow-neo mb-12 -rotate-1">
          <h2 className="text-5xl md:text-7xl font-black font-heading uppercase" style={{ textShadow: "3px 3px 0px #ffe600" }}>
            Featured Work
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {portfolioList.map((project, i) => (
            <div key={i} className="group flex flex-col h-full border-4 border-neo-border bg-neo-bg shadow-neo hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              
              <div className="w-full h-64 border-b-4 border-neo-border overflow-hidden bg-neo-dark relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-neo-primary border-4 border-neo-border font-bold px-3 py-1 -rotate-6 shadow-neo">
                  PRO
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-black uppercase font-heading mb-4">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-8 flex-grow">
                  {project.skill.split(',').map((skill, j) => (
                    <span key={j} className="text-sm font-bold bg-neo-bg border-2 border-neo-border px-3 py-1 uppercase">
                      {skill.trim()}
                    </span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noreferrer" className="neo-btn text-center block w-full mt-auto">
                  View Live
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
