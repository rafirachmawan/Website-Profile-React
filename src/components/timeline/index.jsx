import React from "react";
import "./style.css";

const index = () => {
  const events = [
    { year: 2017, description: "Lulus SMA" },
    { year: 2018, description: "Mulai Kuliah" },
    { year: 2020, description: "Magang Pertama" },
    { year: 2022, description: "Lulus Sarjana" },
    { year: 2023, description: "Mulai Bekerja" },
    { year: 2025, description: "Target Karir" },
  ];
  return (
    <div className="relative container mx-auto px-6 flex flex-col space-y-8">
      {/* Garis Timeline */}
      <div className="absolute left-1/2 w-1 h-full bg-gray-300 transform -translate-x-1/2"></div>

      {/* Loop untuk setiap event */}
      {events.map((event, index) => (
        <div
          key={index}
          className="relative flex items-center justify-between w-full"
        >
          {/* Jika index genap, tampilkan di kiri */}
          {index % 2 === 0 && (
            <>
              <div className="w-1/2 pr-8">
                <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-800">{event.description}</p>
                </div>
              </div>
              <div className="w-1/2 pl-8"></div>
            </>
          )}

          {/* Tahun */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-2 border-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
            <span className="text-gray-800 font-bold">{event.year}</span>
          </div>

          {/* Jika index ganjil, tampilkan di kanan */}
          {index % 2 !== 0 && (
            <>
              <div className="w-1/2 pr-8"></div>
              <div className="w-1/2 pl-8">
                <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-800">{event.description}</p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default index;
