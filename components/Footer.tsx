'use client';

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.grid}>

        <div>
          <h3>Contact Details</h3>
          <p>📞 +91 9033 914914
            <br></br>📞 +91 9898 108747</p>
        </div>
        
        <div>
          <h3>Email id</h3>
          <p>admin@urocomputerwebsoftsolution.in</p>
        </div>

        <div>
          <h3>Address</h3>
          <p>33 2nd Floor, Uma Complex
              <br></br>Above Domino's Pizza
              <br></br>Uma Char Rasta Waghodia Road.
            <br></br>Vadodara - 390019</p>
        </div>

      </div>
<br></br>
      <div className={styles.bottom}>
        © {new Date().getFullYear()} URO Web-Soft Solution. All rights reserved.
      </div>
    </footer>
  );
}
