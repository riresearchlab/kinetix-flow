import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

const ConveyorSegment = ({ position, length, color }: { position: [number, number, number]; length: number; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[length, 0.1, 0.8]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.15} />
    </mesh>
  );
};

const EnergyOrb = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <MeshDistortMaterial color="#00ced1" emissive="#00ced1" emissiveIntensity={0.8} distort={0.3} speed={2} transparent opacity={0.8} />
      </mesh>
    </Float>
  );
};

const DataStream = ({ start, end }: { start: [number, number, number]; end: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = (Math.sin(state.clock.elapsedTime * 3) + 1) / 2;
      ref.current.position.set(
        start[0] + (end[0] - start[0]) * t,
        start[1] + (end[1] - start[1]) * t + Math.sin(t * Math.PI) * 0.3,
        start[2] + (end[2] - start[2]) * t
      );
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.06, 8, 8]} />
      <meshBasicMaterial color="#00ced1" transparent opacity={0.9} />
    </mesh>
  );
};

const WarehouseScene = () => {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} color="#00ced1" intensity={0.8} />
      <pointLight position={[-5, 3, -5]} color="#0077b6" intensity={0.5} />
      <spotLight position={[0, 8, 0]} color="#00ced1" intensity={0.3} angle={0.6} penumbra={0.5} />

      {/* Main conveyor lines */}
      <ConveyorSegment position={[-2, 0, 0]} length={3} color="#00ced1" />
      <ConveyorSegment position={[1.5, 0, 0]} length={2} color="#2ecc71" />
      <ConveyorSegment position={[4, 0, 0]} length={3} color="#00ced1" />
      
      {/* Cross conveyors */}
      <ConveyorSegment position={[0, 0.3, -1.5]} length={2.5} color="#f39c12" />
      <ConveyorSegment position={[3, 0.3, 1.5]} length={2} color="#2ecc71" />
      
      {/* Upper level */}
      <ConveyorSegment position={[-1, 1.2, -0.5]} length={4} color="#00ced1" />
      <ConveyorSegment position={[2, 1.2, 0.5]} length={3} color="#2ecc71" />

      {/* Support pillars */}
      {[[-3, 0.5, 0.6], [0, 0.5, 0.6], [3, 0.5, 0.6], [-3, 0.5, -0.6], [3, 0.5, -0.6]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
          <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.3} />
        </mesh>
      ))}

      {/* Energy orbs */}
      <EnergyOrb position={[-1, 0.5, 0]} />
      <EnergyOrb position={[2, 0.8, 0]} />
      <EnergyOrb position={[0, 1.6, -0.5]} />

      {/* Data streams */}
      <DataStream start={[-3, 0.3, 0]} end={[0, 0.3, 0]} />
      <DataStream start={[0, 0.3, 0]} end={[4, 0.3, 0]} />
      <DataStream start={[-1, 1.5, -0.5]} end={[3, 1.5, 0.5]} />

      {/* Floor grid */}
      <gridHelper args={[12, 24, "#1a3a4a", "#0a1a2a"]} position={[0, -0.5, 0]} />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2.2} minPolarAngle={Math.PI / 4} />
    </>
  );
};

const DigitalTwin = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Twin <span className="text-teal text-glow">Command Center</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            1:1 3D model of the facility. Real-time energy flows, thermal health mapping, and carbon offset visualization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card-glow rounded-2xl overflow-hidden"
          style={{ height: "500px" }}
        >
          <div className="relative w-full h-full">
            {/* HUD overlay */}
            <div className="absolute top-4 left-4 z-10 glass-card rounded-lg px-3 py-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-energy-green animate-pulse" />
                <span className="text-xs font-mono text-energy-green">LIVE FEED</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 z-10 glass-card rounded-lg px-3 py-2">
              <span className="text-xs font-mono text-muted-foreground">FC-SEA-01 • Sortation Loop A</span>
            </div>
            <div className="absolute bottom-4 left-4 z-10 glass-card rounded-lg px-4 py-3">
              <div className="flex gap-6">
                {[
                  { color: "bg-primary", label: "Active" },
                  { color: "bg-energy-green", label: "Net Producer" },
                  { color: "bg-energy-amber", label: "High Load" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Canvas camera={{ position: [5, 4, 5], fov: 45 }}>
              <WarehouseScene />
            </Canvas>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalTwin;
