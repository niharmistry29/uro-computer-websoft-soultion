'use client';

import Link from "next/link";
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import styles from "./page.module.css";

function PreviewObject() {
  return (
    <Float speed={3} rotationIntensity={5} floatIntensity={2}>
      <mesh>
        <boxGeometry args={[1.4, 1.4, 1.4]} />
        <meshStandardMaterial color="#ffcc66" />
      </mesh>
    </Float>
  );
}

export default function DataAnalysisPreview() {
  return (
    <section className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroText}>

          {/* Back */}
          <Link href="/" className={styles.outlineBtn}>
            ← Back to Home
          </Link>

          <h1>DATA ANALYSIS TRAINING</h1>
          <p>Excel • Power BI • SQL • Python</p>
        </div>

        <div className={styles.canvasWrap}>
          <Canvas>
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 3, 3]} />
            <PreviewObject />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className={styles.section}>
        <h2>Course Overview</h2>
        <p>
          Industry-focused data analysis training with hands-on projects,
          dashboards, and real-world datasets.
        </p>
      </section>

      {/* MODULES */}
      <section className={`${styles.section} ${styles.grid}`}>

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

      {/* HIGHLIGHT */}
      <section className={`${styles.section} ${styles.highlight}`}>
        <h2>Why Choose This Course?</h2>
        <ul>
          <li>✅ Live Project Training</li>
          <li>✅ Internship Support</li>
          <li>✅ Dashboard Portfolio</li>
        </ul>
      </section>

    </section>
  );
}
