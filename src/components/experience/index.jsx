import React, { useEffect } from "react";
import "./style.css";
import { FaReact, FaDatabase, FaServer, FaCode } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from "aos";

const Konsep = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="wrapper relative">
      {/* Transition Wave Top */}
      <div className="relative">
        <svg
          className="w-full h-32 md:h-48 lg:h-56"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,64L60,90.7C120,117,240,171,360,165.3C480,160,600,96,720,80C840,64,960,96,1080,117.3C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      {/* Experience Section */}
      <div className="bg-white -mt-16 pb-12 px-4">
        <h1
          className="text-center text-3xl font-bold mb-8 text-blue-600"
          data-aos="fade-down"
        >
          Experience
        </h1>

        <div className="mt-4">
          <VerticalTimeline lineColor="#3b82f6">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Front-End Development"
              iconStyle={{ background: "#2563eb", color: "#fff" }}
              icon={<FaReact />}
              contentStyle={{
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              contentArrowStyle={{ borderRight: "7px solid #2563eb" }}
            >
              <div
                className="transition-transform hover:scale-105 hover:shadow-lg"
                data-aos="zoom-in"
              >
                <h3 className="vertical-timeline-element-title font-semibold">
                  React & Tailwind CSS
                </h3>
                <p>
                  Membangun UI yang modern dan responsif menggunakan React dan
                  Tailwind CSS.
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Database Management"
              iconStyle={{ background: "#16a34a", color: "#fff" }}
              icon={<FaDatabase />}
              contentArrowStyle={{ borderRight: "7px solid #16a34a" }}
            >
              <div
                className="transition-transform hover:scale-105 hover:shadow-lg"
                data-aos="zoom-in"
              >
                <h3 className="vertical-timeline-element-title font-semibold">
                  PostgreSQL, MongoDB, & MySQL
                </h3>
                <p>
                  Mengelola database dengan efisien menggunakan PostgreSQL,
                  MongoDB, dan MySQL.
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Backend Development"
              iconStyle={{ background: "#f97316", color: "#fff" }}
              icon={<FaServer />}
              contentArrowStyle={{ borderRight: "7px solid #f97316" }}
            >
              <div
                className="transition-transform hover:scale-105 hover:shadow-lg"
                data-aos="zoom-in"
              >
                <h3 className="vertical-timeline-element-title font-semibold">
                  Node.js, Express & PHP
                </h3>
                <p>
                  Membangun API dengan performa tinggi menggunakan Node.js,
                  Express.js dan PHP.
                </p>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="UI/UX Design"
              iconStyle={{ background: "#9333ea", color: "#fff" }}
              icon={<FaCode />}
              contentArrowStyle={{ borderRight: "7px solid #9333ea" }}
            >
              <div
                className="transition-transform hover:scale-105 hover:shadow-lg"
                data-aos="zoom-in"
              >
                <h3 className="vertical-timeline-element-title font-semibold">
                  Figma
                </h3>
                <p>
                  Mendesain mockup UI/UX dengan menggunakan design pattern dan
                  interaktif.
                </p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Konsep;
