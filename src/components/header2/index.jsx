import React, { useRef, useMemo } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "react-simple-typewriter";
import Walpaper from "../../assets/walpaper.jpeg";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";

function TechSphere() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.003;
    ref.current.rotation.x += 0.001;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#00ffff" emissive="#0066ff" wireframe />
    </mesh>
  );
}

function OrbitRing() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.z += 0.002;
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[3, 0.05, 16, 100]} />
      <meshStandardMaterial color="#00ffff" emissive="#0044ff" />
    </mesh>
  );
}

function Particles() {
  const ref = useRef();
  const count = 2000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    return arr;
  }, []);

  // animasi otomatis
  useFrame((state) => {
    ref.current.rotation.y += 0.0008;
    ref.current.rotation.x += 0.0004;
  });

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial size={0.03} color="#00ffff" transparent opacity={0.9} />
    </Points>
  );
}

function MouseCamera() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x = mouse.x * 1.5;
    camera.position.y = mouse.y * 1.5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8] }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
      }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} color="#00ffff" />

      <MouseCamera />

      {/* Particle Galaxy */}
      <Particles />
    </Canvas>
  );
}


const Index = () => {
  return (
    <div className="bg-transparent text-white">
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center mt-48 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide leading-tight">
            RAFI <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,255,0.2)]">RACHMAWAN</span>
          </h1>

          <p className="text-lg md:text-xl mt-4 font-body text-slate-200">
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Enthusiast",
                "UI/UX Learner",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-8 py-3 bg-white text-gray-950 font-bold rounded-full hover:bg-cyan-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] hover:scale-105 transition-all duration-300 cursor-pointer text-sm tracking-wide">
              Resume
            </button>

            <button className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300 cursor-pointer text-sm tracking-wide">
              Portfolio
            </button>
          </div>

          <div className="mt-8 flex gap-6 text-2xl">
            <a href="#" className="text-slate-300 hover:text-cyan-400 hover:scale-125 transition-all duration-300">
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a href="#" className="text-slate-300 hover:text-cyan-400 hover:scale-125 transition-all duration-300">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="#" className="text-slate-300 hover:text-cyan-400 hover:scale-125 transition-all duration-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="#" className="text-slate-300 hover:text-cyan-400 hover:scale-125 transition-all duration-300">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

