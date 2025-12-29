'use client'
import { Canvas } from '@react-three/fiber'
import { Box, Float } from '@react-three/drei'
import styles from "./Students.module.css";
import Link from 'next/link';

export default function Students() {
return (
<section className={styles.Students}>
    
<div className="text">
<h2>University Student Projects</h2>
<p>Final year projects, guidance and real-world software exposure.</p>
<Link href="/studentsdetails" className={styles.btn}>
  MORE DETAILS....
</Link>
</div>
</section>
)
}