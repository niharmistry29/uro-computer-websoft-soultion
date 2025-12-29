// ========== components/Hero.tsx ==========
'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import styles from "./Hero.module.css";

function HeroObject() {
  return (
    <Float speed={10} rotationIntensity={5} floatIntensity={0.6}>
      <group rotation={[0.1, 0.4, 0]}>

        {/* MONITOR SCREEN */}
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[2.2, 1.3, 0.1]} />
          <meshStandardMaterial
            color="#6c63ff"           // base blue
            emissive="#ffcc66"        // yellow glow
            emissiveIntensity={0.6}
            metalness={0.4}
            roughness={0.25}
          />
        </mesh>

        {/* SCREEN BORDER */}
        <mesh position={[0, 0.6, -0.08]}>
          <boxGeometry args={[2.4, 1.5, 0.05]} />
          <meshStandardMaterial
            color="#1c1d3a"
            emissive="#6c63ff"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* STAND */}
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[0.3, 0.8, 0.2]} />
          <meshStandardMaterial
            color="#2a2b4a"
            emissive="#ffcc66"
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* BASE */}
        <mesh position={[0, -0.8, 0]}>
          <boxGeometry args={[1, 0.15, 0.6]} />
          <meshStandardMaterial
            color="#2a2b4a"
            emissive="#ffcc66"
            emissiveIntensity={0.2}
          />
        </mesh>

      </group>
    </Float>
  );
}


export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>URO Web-Soft Solution</h1>
        <p>Learn • Build • Explore</p>
      </div>

      <Canvas className={styles.heroCanvas}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} />
        <HeroObject />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
}
