import React, { useState } from "react";
import "./style.css";

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-48 overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-300 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/80"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/80"
      >
        ❯
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Deskripsi Project 1...",
      images: [
        "https://via.placeholder.com/400x300/FF0000",
        "https://via.placeholder.com/400x300/00FF00",
        "https://via.placeholder.com/400x300/0000FF",
      ],
      projectLink: "#",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Deskripsi Project 2...",
      images: [
        "https://via.placeholder.com/400x300/FFA500",
        "https://via.placeholder.com/400x300/800080",
      ],
      projectLink: "#",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Deskripsi Project 2...",
      images: [
        "https://via.placeholder.com/400x300/FFA500",
        "https://via.placeholder.com/400x300/800080",
      ],
      projectLink: "#",
    },

    // Tambahkan proyek lain
  ];

  return (
    <section className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Proyek Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <ImageSlider images={project.images} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.projectLink}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Lihat Proyek
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;
