'use client';

import Link from "next/link";
import styles from "./page.module.css";

export default function AcademicsPage() {
  return (
    <main className={styles.page}>

      {/* HEADER */}
      <section className={styles.hero}>
        <h1>URO WEBSOFT SOLUTION</h1>
        <p>
          Mathematics & Computer Education for Students (Std. 9 to 12)
        </p>

        <Link href="/" className={styles.backBtn}>
          ← Back to Home
        </Link>
      </section>

      {/* ABOUT */}
      <section className={styles.section}>
        <h2>About URO WebSoft Solution</h2>
        <p>
          URO WebSoft Solution is a professional education and training institute
          focused on building strong fundamentals in Mathematics and Computer
          Studies for school students from Standard 11 & 12.
          <br /><br />
          We provide concept-based learning, exam-oriented preparation, and
          practical understanding to help students excel in academics and
          prepare for future technical education.
        </p>
      </section>

      {/* CLASSES */}
      <section className={`${styles.section} ${styles.grid}`}>
        <div className={styles.card}>
          <h3>📘 Classes Offered</h3>
          <ul>
            <li>Standard 11 (Science / Commerce)</li>
            <li>Standard 12 (Science / Commerce)</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>🧮 Mathematics Subjects</h3>
          <ul>
            <li>Basic & Advanced Algebra</li>
            <li>Geometry & Mensuration</li>
            <li>Trigonometry</li>
            <li>Statistics & Probability</li>
            <li>Calculus (11th & 12th)</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>💻 Computer Subjects</h3>
          <ul>
            <li>Computer Fundamentals</li>
            <li>Programming Basics</li>
            <li>Practical Computer Lab</li>
            <li>Logical Thinking & Problem Solving</li>
            <li>Board Exam Preparation</li>
          </ul>
        </div>
      </section>

      {/* TEACHING */}
      <section className={styles.section}>
        <h2>Our Teaching Approach</h2>
        <ul className={styles.list}>
          <li>✔ Concept-based teaching</li>
          <li>✔ Small batch size for personal attention</li>
          <li>✔ Regular tests & doubt-solving sessions</li>
          <li>✔ Focus on school & board exams</li>
          <li>✔ Friendly and supportive learning environment</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className={`${styles.section} ${styles.contact}`}>
        <h2>Contact Information</h2>
        <p><strong>Institute Name:</strong> URO WebSoft Solution</p>
        <p><strong>Contact Person:</strong> Umesh Shah</p>
        <p>📞 +91 9033 914914</p>
        <p>📞 +91 9898 108747</p>
      </section>

    </main>
  );
}
