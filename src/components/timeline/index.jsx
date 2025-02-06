import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";

const Timeline = () => {
  const events = [
    { year: 2017, description: "Lulus SMA", path: "/lulus-sma" },
    { year: 2018, description: "Mulai Kuliah", path: "/mulai-kuliah" },
    { year: 2020, description: "Magang Pertama", path: "/magang-pertama" },
    { year: 2022, description: "Lulus Sarjana", path: "/lulus-sarjana" },
    { year: 2023, description: "Mulai Bekerja", path: "/mulai-bekerja" },
    { year: 2025, description: "Target Karir", path: "/target-karir" },
  ];

  return (
    <div className="relative container mx-auto px-6 flex flex-col space-y-8 mt-15">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
        TIMELINE
      </h2>

      <div className="absolute left-1/2 w-1 h-[calc(100%-3rem)] bg-gray-300 transform -translate-x-1/2 top-12"></div>

      {events.map((event, index) => (
        <div
          key={index}
          className="relative flex items-center justify-between w-full"
        >
          {index % 2 === 0 && (
            <>
              <motion.div
                className="w-1/2 pr-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to={event.path}>
                  <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <p className="text-gray-800 hover:text-blue-600">
                      {event.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
              <div className="w-1/2 pl-8"></div>
            </>
          )}

          <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-2 border-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
            <span className="text-gray-800 font-bold">{event.year}</span>
          </div>

          {index % 2 !== 0 && (
            <>
              <div className="w-1/2 pr-8"></div>
              <motion.div
                className="w-1/2 pl-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to={event.path}>
                  <div className="bg-white bg-opacity-75 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <p className="text-gray-800 hover:text-blue-600">
                      {event.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
