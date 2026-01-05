'use client';

import Link from "next/link";
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import styles from "./page.module.css";
import { useRef } from "react";



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
          color="#6c63ff"        // base blue
          emissive="#023a8eff"     // soft yellow glow
          emissiveIntensity={0.4}
          metalness={0.75}       // realism
          roughness={0.25}
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

export default function BusinessDetails() {
  return (
    <section className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          {/* Back to Home */}
    
          <h1>URO COMPUTER WEBSOFT SOLUTION</h1>
          <p>Professional Training & Software Development Institute</p>
          <Link href="/" className={styles.outlineBtn}>
      ← Back to Home
    </Link>
        </div>

    
      </section>


      {/* COURSES */}
      <section className={`${styles.section} ${styles.grid}`}>

        <div className={styles.card}>
          <h3>Data & Analytics</h3>
          <ul>
            <li>Data Science</li>
            <li>Machine Learning</li>
            <li>Data Analysis</li>
            <li>Python / R</li>
            <li>Power BI</li>
            <li>Advanced Excel</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Software & Web Development</h3>
          <ul>
            <li>Web Development</li>
            <li>ASP.NET (C#)</li>
            <li>Python Django</li>
            <li>C / C++</li>
            <li>Java / PHP</li>
            <li>Data Structures</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Database & Systems</h3>
          <ul>
            <li>DBMS</li>
            <li>SQL / MySQL</li>
            <li>Android Development</li>
            <li>Networking</li>
            <li>Advanced Networking</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Office & Accounting</h3>
          <ul>
            <li>MS Office</li>
            <li>CCC / CCC+</li>
            <li>Tally Prime with GST</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Excel</h3>
          <ul>
            <li>Power Query</li>
            <li>Data Modeling</li>
            <li>DAX & Pivot Tables</li>
            <li>Dashboards</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Power BI</h3>
          <ul>
            <li>Power Query</li>
            <li>DAX Formulas</li>
            <li>Professional Reports</li>
            <li>Data Connections</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>SQL</h3>
          <ul>
            <li>SELECT Queries</li>
            <li>Joins</li>
            <li>Aggregation</li>
            <li>Subqueries</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Python</h3>
          <ul>
            <li>Pandas & NumPy</li>
            <li>Data Cleaning</li>
            <li>Visualization</li>
            <li>Mini Projects</li>
          </ul>
        </div>        

      </section>

      {/* PROGRAMS */}
      <section className={`${styles.section} ${styles.highlight}`}>
          <h2 className={styles.title}>Special Programs</h2>

          <ul className={styles.list}>
            <li>FREE Internship</li>
            <li>Software Development Training with Live Projects</li>
            <li>Career Building</li>
            <li>Live Project Training</li>
          <li>Internship Support</li>
          <li>Dashboard Portfolio</li>
          </ul>
      </section>
   
    </section>
  );
}
