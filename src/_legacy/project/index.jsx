import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";
import MobileEmulator from "./MobileEmulator";

import Image1 from "../../assets/RentalMobil.jpeg";
import tamiya from "../../assets/Tamiya.jpeg";
import SPP from "../../assets/SPP.png";

const projects = [
  {
    id: 1,
    image: tamiya,
    title: "Aplikasi Tamiya",
    type: "web",
    link: "#",
  },
  {
    id: 2,
    image: SPP,
    title: "Sistem Pembayaran SPP",
    type: "mobile",
    link: "#",
  },
  {
    id: 3,
    image: Image1,
    title: "Website Rental Mobil",
    type: "web",
    link: "#",
  },
  {
    id: 4,
    image: Image1,
    title: "Mobile App Rental",
    type: "mobile",
    link: "#",
  },
  {
    id: 5,
    image: Image1,
    title: "Dashboard Admin",
    type: "web",
    link: "#",
  },
  {
    id: 6,
    image: Image1,
    title: "Aplikasi Kasir",
    type: "mobile",
    link: "#",
  },
];

const ProjectGallery = () => {
  const [zoomedImage, setZoomedImage] = useState(null);
  const [selectedMobileProject, setSelectedMobileProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section className="py-16 bg-transparent text-white">
      <div className="container mx-auto px-4">
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-6">
          Proyek <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,255,255,0.2)]">Saya</span>
        </h2>

        {/* FILTER */}
        <div className="flex justify-center gap-3 mb-10">
          {["all", "web", "mobile"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 capitalize cursor-pointer
              ${
                filter === item
                  ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white shadow-lg shadow-cyan-500/20 scale-105"
                  : "bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-slate-950/65 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden group hover:shadow-cyan-500/10 hover:shadow-xl hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* IMAGE */}
              <div className="h-52 flex items-center justify-center bg-slate-950/40 p-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`${
                    project.type === "mobile"
                      ? "h-44 object-contain"
                      : "w-full h-full object-cover"
                  } transition-transform duration-300 group-hover:scale-105 rounded-lg`}
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-lg font-bold font-heading">{project.title}</h3>
                  <span className="text-xs text-cyan-300 font-bold tracking-wide mt-1 block">
                    {project.type === "mobile" ? "Mobile App" : "Website"}
                  </span>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => {
                      if (project.type === "mobile") {
                        setSelectedMobileProject(project);
                      } else {
                        setZoomedImage(project.image);
                      }
                    }}
                    className="text-sm px-4 py-1.5 bg-white/10 border border-white/10 text-white rounded hover:bg-white/20 hover:border-white transition-all duration-200 cursor-pointer font-semibold flex-grow text-center"
                  >
                    {project.type === "mobile" ? "Try Demo" : "Preview"}
                  </button>

                  <button
                    onClick={() => {
                      if (project.type === "mobile") {
                        setSelectedMobileProject(project);
                      } else if (project.link !== "#") {
                        window.open(project.link, "_blank");
                      }
                    }}
                    className="text-sm px-4 py-1.5 bg-white text-gray-950 font-bold rounded hover:bg-cyan-50 hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-200 cursor-pointer flex-grow text-center"
                  >
                    {project.type === "mobile" ? "Emulator" : "Visit"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedMobileProject && (
          <MobileEmulator 
            project={selectedMobileProject} 
            onClose={() => setSelectedMobileProject(null)} 
          />
        )}

        {/* ZOOM MODAL */}
        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setZoomedImage(null)}
          >
            <img
              src={zoomedImage}
              alt="Zoomed"
              className="max-w-4xl max-h-[90vh] rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;

