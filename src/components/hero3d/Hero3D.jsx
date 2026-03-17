import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function FloatingObject() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={3}>
      <mesh>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial color="#4f8cff" wireframe />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />

      <FloatingObject />
    </Canvas>
  );
}
