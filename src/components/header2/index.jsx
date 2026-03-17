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
    <div className="bg-gray-900 text-white">
      <section
        className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${Walpaper})`,
        }}
      >
        {/* THREEJS */}
        <Hero3D />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center mt-48 text-center">
          <h1 className="text-5xl font-bold tracking-wide">
            RAFI <span className="text-blue-500">RACHMAWAN</span>
          </h1>

          <p className="text-lg mt-4">
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
            <button className="px-6 py-2 bg-blue-500 text-white rounded-full">
              Resume
            </button>

            <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full">
              Portfolio
            </button>
          </div>

          <div className="mt-6 flex gap-5 text-xl">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
