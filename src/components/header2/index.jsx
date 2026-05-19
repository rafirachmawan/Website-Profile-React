import React, { useRef, useMemo, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "react-simple-typewriter";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ─── Skill data on the globe ─────────────────── */
const SKILLS = [
  { name: "React.js",    lat:  30, lon:  30, color: "#61dafb", icon: "⚛" },
  { name: "JavaScript",  lat: -20, lon:  80, color: "#f7df1e", icon: "JS" },
  { name: "TypeScript",  lat:  60, lon: 120, color: "#3178c6", icon: "TS" },
  { name: "Node.js",     lat: -50, lon: -30, color: "#68a063", icon: "🟢" },
  { name: "Three.js",    lat:  10, lon: 150, color: "#ffffff", icon: "3D" },
  { name: "CSS3",        lat:  50, lon: -60, color: "#264de4", icon: "🎨" },
  { name: "Git",         lat: -30, lon:-120, color: "#f05032", icon: "⑂"  },
  { name: "Figma",       lat:  20, lon:-150, color: "#a259ff", icon: "✦"  },
  { name: "MongoDB",     lat: -60, lon:  60, color: "#4db33d", icon: "🍃" },
  { name: "Vite",        lat:  40, lon: -90, color: "#646cff", icon: "⚡" },
  { name: "Tailwind",    lat: -10, lon: -20, color: "#38bdf8", icon: "🌊" },
  { name: "Laravel",     lat:  70, lon:  -10, color: "#ff2d20", icon: "🔺" },
];

/* helper: lat/lon → 3D point on sphere */
function latLonToVec(lat, lon, r = 2.2) {
  const phi   = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta)
  );
}

/* ─── Wireframe Sphere ───────────────────────── */
function WireGlobe() {
  const ref = useRef();
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2.2, 32, 32]} />
      <meshStandardMaterial
        color="#4f46e5"
        emissive="#312e81"
        wireframe
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

/* ─── Latitude / Longitude grid lines ─────────── */
function GridLines() {
  const lines = useMemo(() => {
    const geo = [];
    const r = 2.21;
    // Lat lines
    for (let lat = -60; lat <= 60; lat += 30) {
      const pts = [];
      for (let lon = 0; lon <= 360; lon += 4) {
        pts.push(latLonToVec(lat, lon - 180, r));
      }
      geo.push(pts);
    }
    // Lon lines
    for (let lon = 0; lon < 360; lon += 30) {
      const pts = [];
      for (let lat = -90; lat <= 90; lat += 4) {
        pts.push(latLonToVec(lat, lon - 180, r));
      }
      geo.push(pts);
    }
    return geo;
  }, []);

  return (
    <>
      {lines.map((pts, i) => {
        const positions = new Float32Array(pts.flatMap(v => [v.x, v.y, v.z]));
        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        return (
          <line key={i} geometry={geo}>
            <lineBasicMaterial color="#4f46e5" transparent opacity={0.12} />
          </line>
        );
      })}
    </>
  );
}

/* ─── Skill Dot ──────────────────────────────── */
function SkillDot({ skill }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();
  const pos = useMemo(() => latLonToVec(skill.lat, skill.lon), [skill]);

  useFrame((state) => {
    if (meshRef.current) {
      const scale = hovered ? 1.8 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.12);
    }
  });

  return (
    <group position={pos}>
      <mesh
        ref={meshRef}
        onPointerEnter={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = "pointer"; }}
        onPointerLeave={() => { setHovered(false); document.body.style.cursor = "default"; }}
      >
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={hovered ? 3 : 1.5}
        />
      </mesh>

      {/* Glow ring around dot */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.12, 0.012, 8, 24]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={hovered ? 2 : 0.4}
          transparent
          opacity={hovered ? 0.9 : 0.3}
        />
      </mesh>

      {/* HTML Label on hover */}
      {hovered && (
        <Html distanceFactor={6} center style={{ pointerEvents: "none" }}>
          <div className="globe-tooltip">
            <span className="globe-tooltip-icon">{skill.icon}</span>
            <span className="globe-tooltip-name">{skill.name}</span>
          </div>
        </Html>
      )}
    </group>
  );
}

/* ─── Background star particles ─────────────── */
function Stars() {
  const ref = useRef();
  const count = 1200;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return arr;
  }, []);

  useFrame(() => {
    ref.current.rotation.y += 0.0003;
  });

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial size={0.02} color="#a5b4fc" transparent opacity={0.6} />
    </Points>
  );
}

/* ─── Full 3D Scene ──────────────────────────── */
function GlobeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} color="#6366f1" intensity={3} />
      <pointLight position={[-10, -10,  5]} color="#a78bfa" intensity={2} />
      <pointLight position={[  0,  10, -10]} color="#60a5fa" intensity={1.5} />

      <Stars />
      <GridLines />
      <WireGlobe />

      {SKILLS.map((s) => (
        <SkillDot key={s.name} skill={s} />
      ))}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
}

/* ─── Main Hero ──────────────────────────────── */
const Index = () => {
  return (
    <div className="hero2-wrapper">
      <section className="hero2-section">

        {/* ── LEFT ── */}
        <div className="hero2-left">
          <div className="hero2-badge">
            <span className="hero2-badge-dot" />
            Available for work
          </div>

          <h1 className="hero2-title">
            Hi, I'm <br />
            <span className="hero2-gradient-text">Rafi Rachmawan</span>
          </h1>

          <p className="hero2-subtitle">
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Enthusiast",
                "UI/UX Learner",
                "Frontend Engineer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={75}
              deleteSpeed={55}
              delaySpeed={1500}
            />
          </p>

          <p className="hero2-desc">
            Crafting modern web experiences with clean code and creative design.
            Hover the globe to explore my tech stack ✨
          </p>

          {/* Skill legend pills */}
          <div className="hero2-skill-pills">
            {SKILLS.slice(0, 6).map((s) => (
              <span key={s.name} className="hero2-skill-pill" style={{ "--pill-color": s.color }}>
                {s.icon} {s.name}
              </span>
            ))}
          </div>

          <div className="hero2-socials">
            <a href={"https://www.facebook.com/profile.php?id=100081122267497&locale=id_ID"} target="_blank" rel="noopener noreferrer" className="hero2-social-link" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.linkedin.com/in/rafi-rachmawan-2a8728233/" target="_blank" rel="noopener noreferrer" className="hero2-social-link" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/rrrafi.rachmawan/" target="_blank" rel="noopener noreferrer" className="hero2-social-link" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/rafirachmawan" target="_blank" rel="noopener noreferrer" className="hero2-social-link" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>

          <div className="hero2-stats">
            <div className="hero2-stat">
              <span className="hero2-stat-num">3+</span>
              <span className="hero2-stat-label">Years Coding</span>
            </div>
            <div className="hero2-stat-divider" />
            <div className="hero2-stat">
              <span className="hero2-stat-num">20+</span>
              <span className="hero2-stat-label">Projects Built</span>
            </div>
            <div className="hero2-stat-divider" />
            <div className="hero2-stat">
              <span className="hero2-stat-num">12</span>
              <span className="hero2-stat-label">Tech Skills</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Tech Globe ── */}
        <div className="hero2-right">
          <div className="hero2-globe-label">
            <span>⬆ Drag to rotate</span>
            <span>· Hover dots to explore</span>
          </div>
          <div className="hero2-globe-container">
            {/* Outer glow ring */}
            <div className="hero2-globe-glow" />
            <GlobeScene />
          </div>
        </div>

      </section>
    </div>
  );
};

export default Index;
