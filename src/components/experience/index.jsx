import React from "react";
import "./style.css";
import { FaReact, FaDatabase, FaServer, FaCode } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Konsep = () => {
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
          <path
            fill="#e0f2fe"
            d="M0,64L60,90.7C120,117,240,171,360,165.3C480,160,600,96,720,80C840,64,960,96,1080,117.3C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      {/* Experience Section */}
      <div className="bg-white pt-6 pb-12 px-4">
        <h1 className="text-center text-3xl font-bold mb-8 text-blue-600">
          Experience
        </h1>

        <div className="mt-8">
          {" "}
          {/* Jarak dari wave ke garis timeline */}
          <VerticalTimeline lineColor="#3b82f6">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Front-End Development"
              iconStyle={{ background: "#2563eb", color: "#fff" }}
              icon={<FaReact />}
            >
              <h3 className="vertical-timeline-element-title font-semibold">
                React & Tailwind CSS
              </h3>
              <p>
                Membangun UI yang modern dan responsif menggunakan React dan
                Tailwind CSS.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Database Management"
              iconStyle={{ background: "#16a34a", color: "#fff" }}
              icon={<FaDatabase />}
            >
              <h3 className="vertical-timeline-element-title font-semibold">
                PostgreSQL, MongoDB, & MySQL
              </h3>
              <p>
                Mengelola database dengan efisien menggunakan PostgreSQL,
                MongoDB, dan MySQL.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Backend Development"
              iconStyle={{ background: "#f97316", color: "#fff" }}
              icon={<FaServer />}
            >
              <h3 className="vertical-timeline-element-title font-semibold">
                Node.js, Express & PHP
              </h3>
              <p>
                Membangun API dengan performa tinggi menggunakan Node.js,
                Express.js dan PHP.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="UI/UX Design"
              iconStyle={{ background: "#9333ea", color: "#fff" }}
              icon={<FaCode />}
            >
              <h3 className="vertical-timeline-element-title font-semibold">
                Figma
              </h3>
              <p>
                Mendesain mockup UI/UX dengan menggunakan design pattern dan
                interaktif.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Konsep;
