import ProfilePicture from "../../assets/profile-picture.png";
import Foto from "../../assets/foto2.png";
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "./style.css";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

function Index() {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const profilePictureRef = useRef(null); // Referensi untuk gambar profil

  useEffect(() => {
    const animateText = (elementRef) => {
      const element = elementRef.current;
      const text = element.innerText;
      const letters = text
        .split("")
        .map((letter, index) =>
          letter === " " ? "&nbsp;" : `<span class="letter">${letter}</span>`
        )
        .join("");

      element.innerHTML = letters;

      gsap.fromTo(
        element.querySelectorAll(".letter"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.05,
        }
      );
    };

    // Animasi teks deskripsi
    animateText(descriptionRef);

    // Animasi nama seperti efek mengetik
    const animateHeading = (elementRef) => {
      const element = elementRef.current;
      const text = element.innerText;
      const letters = text
        .split("")
        .map((letter) =>
          letter === " " ? "&nbsp;" : `<span class="letter">${letter}</span>`
        )
        .join("");
      element.innerHTML = letters;

      gsap.fromTo(
        element.querySelectorAll(".letter"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.1,
          ease: "power1.inOut",
          stagger: 0.1,
          repeat: -1,
          repeatDelay: 1,
          yoyo: true,
        }
      );
    };

    animateHeading(headingRef);

    // Animasi gambar profil
    const profilePictureAnimation = () => {
      gsap.to(profilePictureRef.current, {
        x: 10,
        duration: 1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    };

    profilePictureAnimation();

    // Inisialisasi dan refresh AOS
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <header>
      <div className="blur-overlay"></div>
      <div className="header-jumbotron">
        <img
          src={Foto}
          className="profile-picture"
          alt="Profile"
          ref={profilePictureRef} // Tambahkan ref ke gambar profil
        />
        <h3 ref={headingRef} data-aos="fade-down">
          Rafi Rachmawan
        </h3>
        <p ref={descriptionRef}>Programmer - FrontEndDeveloper - Researcher</p>
        <div className="socialMedia">
          <a
            data-aos="fade-down"
            href="https://www.instagram.com/rrrafi.rachmawan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            data-aos="fade-up"
            href="https://www.tiktok.com/@notyoursgb?_t=8pTUdZRSnfk&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
          <a
            data-aos="fade-down"
            href="https://www.linkedin.com/in/rafi-rachmawan-2a8728233/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            data-aos="fade-up"
            href="https://github.com/rafirachmawan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Index;
