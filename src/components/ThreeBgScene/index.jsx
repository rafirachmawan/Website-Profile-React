import React, { useRef, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// 1. GALAXY NEBULA PARTICLE CLOUD (Hero Section + Deep Space Column)
function NebulaGalaxy() {
  const ref = useRef();
  const { size } = useThree();
  const isMobile = size.width <= 768;
  const count = isMobile ? 2000 : 3500; // Optimal particle count for screen height

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const colorCyan = new THREE.Color("#00ffff");
    const colorBlue = new THREE.Color("#0044ff");
    const colorPurple = new THREE.Color("#8800ff");

    for (let i = 0; i < count; i++) {
      // Cylindrical/Tube distribution surrounding the vertical camera scroll path
      const theta = Math.random() * Math.PI * 2;
      const radius = Math.random() * (isMobile ? 6.5 : 8.5) + 0.5; // Spread horizontally

      pos[i * 3] = radius * Math.cos(theta);
      // Spans vertically from y = +14.5 down to y = -30.5 (perfectly encloses camera y = 0 to -16)
      pos[i * 3 + 1] = (Math.random() - 0.5) * 45 - 8; 
      pos[i * 3 + 2] = radius * Math.sin(theta) - 2; // Depth spread around targets

      // Color interpolation
      const mixRatio = Math.random();
      let chosenColor = colorCyan;
      if (mixRatio < 0.33) {
        chosenColor = chosenColor.clone().lerp(colorBlue, mixRatio * 3);
      } else if (mixRatio < 0.66) {
        chosenColor = colorBlue.clone().lerp(colorPurple, (mixRatio - 0.33) * 3);
      } else {
        chosenColor = colorPurple.clone().lerp(colorCyan, (mixRatio - 0.66) * 3);
      }

      cols[i * 3] = chosenColor.r;
      cols[i * 3 + 1] = chosenColor.g;
      cols[i * 3 + 2] = chosenColor.b;
    }

    return [pos, cols];
  }, [count, isMobile]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0008;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial size={isMobile ? 0.05 : 0.035} vertexColors transparent opacity={0.75} />
    </Points>
  );
}

// 2. FLOATING NEON TECH CUBES (About Section - Centered at Y = -4)
function FloatingAboutObjects() {
  const groupRef = useRef();
  const { size } = useThree();
  const isMobile = size.width <= 768;
  const cubeCount = isMobile ? 3 : 5;

  const cubes = useMemo(() => {
    return Array.from({ length: cubeCount }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 3, // Relative X centered inside group
        (Math.random() - 0.5) * 3, // Relative Y centered
        (Math.random() - 0.5) * 3 - 2
      ],
      size: Math.random() * (isMobile ? 0.45 : 0.6) + 0.3,
      speed: Math.random() * 0.01 + 0.005,
      rotSpeed: [Math.random() * 0.02, Math.random() * 0.02, Math.random() * 0.01]
    }));
  }, [cubeCount, isMobile]);

  useFrame(({ clock, mouse }) => {
    if (groupRef.current) {
      // Slow float oscillating specifically around Y = -4.0
      const elapsed = clock.getElapsedTime();
      groupRef.current.position.y = -4 + Math.sin(elapsed * 0.5) * 0.15;
      
      // Dynamic tilt based on mouse position (only active on desktop)
      const mouseX = isMobile ? 0 : mouse.x * 0.6;
      const mouseY = isMobile ? 0 : -mouse.y * 0.6;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouseY, 0.1);
    }
  });

  return (
    <group ref={groupRef} position={[isMobile ? 0 : 2, -4, 0]}>
      {cubes.map((c, i) => (
        <mesh key={i} position={c.position} rotation={[c.rotSpeed[0] * 100, c.rotSpeed[1] * 100, 0]}>
          <boxGeometry args={[c.size, c.size, c.size]} />
          <meshStandardMaterial 
            color="#00ffff" 
            emissive="#003366" 
            roughness={0.1} 
            metalness={0.9} 
            transparent 
            opacity={0.4} 
            wireframe 
          />
        </mesh>
      ))}
    </group>
  );
}

// 3. DNA TIMELINE SPIRAL HELIX (Timeline Section - Centered at Y = -8)
function DnaTimelineHelix() {
  const ref = useRef();
  const { size } = useThree();
  const isMobile = size.width <= 768;
  const nodeCount = isMobile ? 35 : 50;

  const [positions, lines] = useMemo(() => {
    const pos = [];
    const linePairs = [];

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / 8) * Math.PI;
      const radius = isMobile ? 0.75 : 1.0;
      const height = (i / nodeCount) * (isMobile ? 6.0 : 7.5) - (isMobile ? 3.0 : 3.75); // centered relative to parent group

      // Strand A (Relative to origin)
      const xa = Math.sin(angle) * radius;
      const za = Math.cos(angle) * radius - 3.0;
      
      // Strand B (opposite)
      const xb = -Math.sin(angle) * radius;
      const zb = -Math.cos(angle) * radius - 3.0;

      pos.push([xa, height, za]);
      pos.push([xb, height, zb]);

      // Connect lines occasionally
      if (i % 2 === 0) {
        linePairs.push([xa, height, za, xb, height, zb]);
      }
    }

    return [pos, linePairs];
  }, [nodeCount, isMobile]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={ref} position={[isMobile ? 0 : -1.5, -8, 0]}>
      {/* Nodes */}
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[isMobile ? 0.055 : 0.07, 16, 16]} />
          <meshStandardMaterial color={i % 2 === 0 ? "#00ffff" : "#ff00ff"} emissive={i % 2 === 0 ? "#0044ff" : "#550055"} />
        </mesh>
      ))}

      {/* Crossbar Lines */}
      {lines.map((l, i) => {
        const points = [new THREE.Vector3(l[0], l[1], l[2]), new THREE.Vector3(l[3], l[4], l[5])];
        const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i} geometry={lineGeom}>
            <lineBasicMaterial color="#ffffff" transparent opacity={0.2} />
          </line>
        );
      })}
    </group>
  );
}

// 4. TECH CAROUSEL ORBIT RINGS (Projects Section - Centered at Y = -12)
function TechRingOrbit() {
  const groupRef = useRef();
  const { size } = useThree();
  const isMobile = size.width <= 768;

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const elapsed = clock.getElapsedTime();
      // Orbit spin
      groupRef.current.rotation.y = elapsed * 0.1;
      groupRef.current.rotation.z = Math.sin(elapsed * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[isMobile ? 0 : 3, -12, -1]}>
      {/* Core sphere */}
      <mesh>
        <sphereGeometry args={[isMobile ? 0.5 : 0.7, 32, 32]} />
        <meshStandardMaterial color="#00ffff" emissive="#0055ff" roughness={0.1} metalness={0.9} wireframe />
      </mesh>

      {/* Main Orbit Ring */}
      <mesh rotation={[Math.PI / 2.2, 0.3, 0]}>
        <torusGeometry args={[isMobile ? 1.4 : 2.0, 0.04, 8, 100]} />
        <meshStandardMaterial color="#00ffff" emissive="#0022ff" />
      </mesh>

      {/* Secondary Orbit Ring */}
      <mesh rotation={[Math.PI / -2.2, -0.3, 0.5]}>
        <torusGeometry args={[isMobile ? 1.8 : 2.5, 0.03, 8, 100]} />
        <meshStandardMaterial color="#ff00ff" emissive="#5500aa" />
      </mesh>

      {/* Floating Saturn-like Satellite nodes */}
      {[0, 1, 2].map((i) => {
        const angle = (i * 2 * Math.PI) / 3;
        const radius = isMobile ? 1.4 : 2.0;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        return (
          <mesh key={i} position={[x, 0, z]}>
            <octahedronGeometry args={[isMobile ? 0.12 : 0.18]} />
            <meshStandardMaterial color="#00ffff" emissive="#0055ff" />
          </mesh>
        );
      })}
    </group>
  );
}

// 5. WIREFRAME HOLOGRAPHIC DATA GRID (Contact Section - Centered at Y = -16)
function HoloGrid() {
  const ref = useRef();
  const { size } = useThree();
  const isMobile = size.width <= 768;
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const elapsed = clock.getElapsedTime();
      const geom = ref.current.geometry;
      const position = geom.attributes.position;
      
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        const z = Math.sin(x * 0.4 + elapsed) * 0.15 + Math.cos(y * 0.4 + elapsed * 1.2) * 0.15;
        position.setZ(i, z);
      }
      position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={ref} position={[0, -16, 0]} rotation={[-Math.PI / 2.2, 0, 0]}>
      <planeGeometry args={[isMobile ? 12 : 18, 18, 20, 20]} />
      <meshStandardMaterial color="#00ffff" wireframe emissive="#001a33" transparent opacity={0.6} />
    </mesh>
  );
}

// CAMERA FLIGHT CONTROL SYNCED WITH SCROLL
function CameraScroller({ scrollRef }) {
  const { camera, size } = useThree();
  const isMobile = size.width <= 768;
  const xMult = isMobile ? 0.0 : 1.0;
  const zOffset = isMobile ? 2.5 : 0.0;

  useFrame(() => {
    const t = scrollRef.current; // Global scroll percentage (0 to 1)

    // Segment positions interpolation coordinates
    let targetX = 0;
    let targetY = 0;
    let targetZ = 8 + zOffset;

    let lookX = 0;
    let lookY = 0;
    let lookZ = 0;

    if (t < 0.25) {
      // 1. Hero -> About Transition (Y: 0 to -4)
      const segment = t / 0.25;
      targetX = segment * 4.0 * xMult;
      targetY = -segment * 4.0;
      targetZ = (8.0 - segment * 2.0) + zOffset;
      lookX = segment * 2.0 * xMult;
      lookY = -segment * 4.0;
      lookZ = -segment * 2.0;
    } else if (t < 0.5) {
      // 2. About -> Timeline Transition (Y: -4 to -8)
      const segment = (t - 0.25) / 0.25;
      targetX = (4.0 - segment * 7.5) * xMult;
      targetY = -4.0 - segment * 4.0;
      targetZ = (6.0 - segment * 1.0) + zOffset;
      lookX = (2.0 - segment * 3.5) * xMult;
      lookY = -4.0 - segment * 4.0;
      lookZ = -2.0 - segment * 1.0;
    } else if (t < 0.75) {
      // 3. Timeline -> Projects Transition (Y: -8 to -12)
      const segment = (t - 0.5) / 0.25;
      targetX = (-3.5 + segment * 8.0) * xMult;
      targetY = -8.0 - segment * 4.0;
      targetZ = (5.0 + segment * 1.5) + zOffset;
      lookX = (-1.5 + segment * 4.5) * xMult;
      lookY = -8.0 - segment * 4.0;
      lookZ = -3.0 + segment * 2.0;
    } else {
      // 4. Projects -> Contact Transition (Y: -12 to -16)
      const segment = (t - 0.75) / 0.25;
      targetX = (4.5 - segment * 4.5) * xMult;
      targetY = -12.0 - segment * 4.0;
      targetZ = (6.5 + segment * 3.5) + zOffset;
      lookX = (3.0 - segment * 3.0) * xMult;
      lookY = -12.0 - segment * 4.0;
      lookZ = -1.0 + segment * 1.0;
    }

    // Dynamic camera spring/lerp (very fluid space travel)
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);

    // Smoothly calculate the focal point
    const targetLookAt = new THREE.Vector3(
      THREE.MathUtils.lerp(camera.position.x, lookX, 0.05),
      THREE.MathUtils.lerp(camera.position.y, lookY, 0.05),
      THREE.MathUtils.lerp(camera.position.z, lookZ, 0.05)
    );
    camera.lookAt(targetLookAt);
  });

  return null;
}

const ThreeBgScene = () => {
  const scrollRef = useRef(0);
  const [mounted, setMounted] = useState(false);

  // Track global scrolling percent
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const scrollPercent = window.scrollY / scrollHeight;
      // Clamp between 0 and 1
      scrollRef.current = Math.max(0, Math.min(1, scrollPercent));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted || typeof window === "undefined" || !document.body) {
    return null;
  }

  return createPortal(
    <div 
      className="pointer-events-none" 
      style={{ 
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100dvh", // Dynamic viewport height for mobile browsers
        zIndex: 1, // Sits perfectly in the middle layer, above body color but below #root
        backgroundColor: "#030712" /* Dark Slate bg matching page root */
      }}
    >
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
      >
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={1.0} color="#ff00ff" />
        
        {/* Cinematic flight tracker */}
        <CameraScroller scrollRef={scrollRef} />

        {/* 3D Scenes floating vertically at different spaces */}
        <NebulaGalaxy />
        <FloatingAboutObjects />
        <DnaTimelineHelix />
        <TechRingOrbit />
        <HoloGrid />
      </Canvas>
    </div>,
    document.body
  );
};

export default ThreeBgScene;
