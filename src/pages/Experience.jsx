import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";

import Navbar from "../components/navbar/index";
import Footer from "../components/footer/index";
import ScrollToTop from "../components/scrolltop/index";

function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - present"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<RiNextjsFill />}
          >
            <h3 className="vertical-timeline-element-title">Staff IT</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rumah Sakit Era Medika
            </h4>
            <p>
              Bekerja sebagai Staff IT , Maitance Software maupun Hardware, Dan
              Mengelola Data base Rumah Sakit menggunakan Postgree
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<FaVuejs />}
          >
            <h3 className="vertical-timeline-element-title">
              Front End Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              dirumahrafif Corporation
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Front End Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              dirumahrafif Corporation
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<FaLaravel />}
          >
            <h3 className="vertical-timeline-element-title">
              Front End Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              dirumahrafif Corporation
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
