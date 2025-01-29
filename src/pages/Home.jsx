import Navbar from "../components/navbar/index";
import Header from "../components/header/index";
import Portofolio from "../components/portofolio/index";
import About from "../components/about/index";
import Footer from "../components/footer/index";
import FormInput from "../components/Form/FormInput";
// import Coba from "../components/coba/index";

function Home() {
  return (
    <>
      {/* <Coba /> */}
      <Navbar />
      <Header />
      <Portofolio />
      <About />
      <FormInput />
      <Footer />
    </>
  );
}

export default Home;
