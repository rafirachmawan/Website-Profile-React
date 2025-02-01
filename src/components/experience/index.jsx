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
    <div className="wrapper">
      <h1>Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Front-End Development"
          iconStyle={{ background: "#2563eb", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">
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
          <h3 className="vertical-timeline-element-title">
            PostgreSQL & MongoDB
          </h3>
          <p>
            Mengelola database dengan efisien menggunakan PostgreSQL dan
            MongoDB.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Backend Development"
          iconStyle={{ background: "#f97316", color: "#fff" }}
          icon={<FaServer />}
        >
          <h3 className="vertical-timeline-element-title">
            Node.js & Express.js
          </h3>
          <p>
            Membangun API dengan performa tinggi menggunakan Node.js dan
            Express.js.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Software Engineering"
          iconStyle={{ background: "#9333ea", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Clean Code & Design Patterns
          </h3>
          <p>
            Menulis kode yang bersih, mudah dibaca, dan menggunakan prinsip
            desain yang baik.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Konsep;
