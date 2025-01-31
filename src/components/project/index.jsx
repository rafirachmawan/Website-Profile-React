import React from "react";
import "./style.css";

const index = () => {
  //
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description:
        "Ini adalah deskripsi singkat tentang Project 1. Project ini dibuat dengan teknologi X dan Y.",
      imageUrl: "https://via.placeholder.com/400x300", // Ganti dengan URL gambar proyek Anda
      projectLink: "https://example.com/project1", // Ganti dengan link proyek Anda
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Ini adalah deskripsi singkat tentang Project 2. Project ini dibuat dengan teknologi A dan B.",
      imageUrl: "https://via.placeholder.com/400x300", // Ganti dengan URL gambar proyek Anda
      projectLink: "https://example.com/project2", // Ganti dengan link proyek Anda
    },
    // Tambahkan proyek lain di sini
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Proyek Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
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

export default index;
