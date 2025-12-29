'use client';

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      
      {/* LOGO */}
      <div className={styles.logo}>
        <Image
          src="/images/logo.png"
          alt="URO Web-Soft Solution Logo"
          width={300}
          height={70}
        />
        
      </div>

      {/* NAV */}
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
      </nav>
    </header>
  );
}
