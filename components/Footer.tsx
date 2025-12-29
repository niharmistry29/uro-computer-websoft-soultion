'use client';

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.grid}>

        <div>
          <h3>URO Web-Soft Solution</h3>
          <p>
            Education • Software Development • Projects • 3D Web Experience
          </p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>📞 +91 9033 914914</p>
          <p>📞 +91 9898 108747</p>
        </div>

        <div>
          <h4>Focus Areas</h4>
          <p>Students (9–12)</p>
          <p>Kids Coding</p>
          <p>Web & Software</p>
        </div>

      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} URO Web-Soft Solution. All rights reserved.
      </div>
    </footer>
  );
}
