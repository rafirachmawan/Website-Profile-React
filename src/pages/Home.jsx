import Navbar from "../components/navbar/index";
import Header from "../components/header/index";
import Portofolio from "../components/portofolio/index";
import About from "../components/about/index";
import Footer from "../components/footer/index";
import FormInput from "../components/Form/FormInput";
// import Coba from "../components/coba/index";
import Header2 from "../components/header2/index";
import About2 from "../components/about2/index";
import Section from "../components/resume/index";
import Navbar2 from "../components/navbar2/index";
import Project from "../components/project/index";
import Contact from "../components/contact/index";
import Experience from "../components/experience/index";
import Timeline from "../components/timeline/index";

function Home() {
  return (
    <>
      {/* <Coba /> */}
      <Navbar2 />
      <Header2 />
      <About2 />
      <Timeline />
      <Experience />
      <Project />
      <Section />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
