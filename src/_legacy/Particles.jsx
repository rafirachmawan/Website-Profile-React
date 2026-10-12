import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

function Particles() {
  const ref = useRef();

  const particles = useMemo(() => {
    const arr = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000 * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0007;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function BackgroundParticles() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Particles />
    </Canvas>
  );
}
