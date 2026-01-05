// ========== components/Hero.tsx ==========
'use client'

import { OrbitControls, Float } from '@react-three/drei'
import styles from "./Hero.module.css";
import { useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber';

function AnimatedKnot() {
  const meshRef = useRef<any>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Smooth continuous rotation
      meshRef.current.rotation.x += 0.03;
      meshRef.current.rotation.y += 0.04;

      // Subtle breathing scale animation
      const scale = 1 + Math.sin(clock.elapsedTime * 2) * 0.04;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.35, 180, 32]} />

        <meshStandardMaterial
          color="#0000ffff"        // base blue
          emissive="#1b59b6ff"     // soft yellow glow
          emissiveIntensity={0.4}
          metalness={1.75}       // realism
          roughness={0.95}
        />
      </mesh>
    </Float>
  );
}

<Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
  <ambientLight intensity={0.4} />
  <directionalLight position={[5, 5, 5]} intensity={1} />
  <pointLight position={[-5, -5, -5]} intensity={0.6} />

  <AnimatedKnot />
</Canvas>


export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>URO COMPUTER <br></br>WebSoft Solution</h1>
        <p>URO WEBSOFT SOLUTION is renowned for undertaking software-based 
projects with the aim of reliability and satisfaction to the companies & clients. 
The company’s vision is to put thorough roots in the IT sector and its 
advancements. With the objective of persuading the current vision, URO 
WEBSOFT SOLUTION is turning out to be the most efficient and trusted service 
provider to the clients by providing cost effective project and with best after sale 
services & consultancy to the firm. Their mission defines the way of procurement 
of knowledge and application of this to the practical world.</p>
      </div>

      <Canvas className={styles.heroCanvas}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} />
        <AnimatedKnot />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
}
