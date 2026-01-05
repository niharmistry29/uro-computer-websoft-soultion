'use client';

import { Canvas } from '@react-three/fiber';
import { TorusKnot, Float } from '@react-three/drei';
import Link from 'next/link';
import styles from "./Business.module.css";

export default function Business() {
return (
<section className={styles.Business}>
<div className="text">
<h2>Web & Software Services</h2>
<p>Web apps, mobile apps and enterprise software solutions.</p>
<Link href="/businessdetails" className={styles.btn}>
  EXPLORE
</Link>
</div>
</section>
)
}
