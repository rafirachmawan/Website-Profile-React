import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";
import Image1 from "../../assets/RentalMobil.jpeg";

const projects = [
  { id: 1, image: Image1, link: "#" },
  { id: 2, image: Image1, link: "#" },
  { id: 3, image: Image1, link: "#" },
  { id: 4, image: Image1, link: "#" },
  { id: 5, image: Image1, link: "#" },
  { id: 6, image: Image1, link: "#" },
];

const ProjectGallery = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <section id="portfolio" className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Proyek <span className="text-blue-400">Saya</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gray-800/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setZoomedImage(project.image)}
                  className="bg-white text-black px-4 py-2 m-2 rounded shadow hover:bg-gray-200"
                >
                  Zoom
                </button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 m-2 rounded shadow hover:bg-gray-200"
                >
                  View
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {zoomedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setZoomedImage(null)}
          >
            <img
              src={zoomedImage}
              alt="Zoomed"
              className="max-w-3xl max-h-3xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;
