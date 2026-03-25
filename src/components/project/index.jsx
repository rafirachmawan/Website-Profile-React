import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

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
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-6">
          Proyek <span className="text-blue-400">Saya</span>
        </h2>

        {/* FILTER */}
        <div className="flex justify-center gap-3 mb-10">
          {["all", "web", "mobile"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                filter === item
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
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
              className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* IMAGE */}
              <div className="h-52 flex items-center justify-center bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`${
                    project.type === "mobile"
                      ? "h-44 object-contain"
                      : "w-full h-full object-cover"
                  } transition-transform duration-300 group-hover:scale-105`}
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>

                <span className="text-xs text-blue-400">
                  {project.type === "mobile" ? "Mobile App" : "Website"}
                </span>

                {/* BUTTON */}
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => setZoomedImage(project.image)}
                    className="text-sm px-3 py-1 bg-gray-700 rounded hover:bg-gray-600"
                  >
                    Preview
                  </button>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 bg-blue-500 rounded hover:bg-blue-400"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
