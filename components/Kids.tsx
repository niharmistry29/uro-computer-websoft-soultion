'use client'
import { Canvas } from '@react-three/fiber'
import { Sphere, Float } from '@react-three/drei'
import styles from "./Kids.module.css";
import Link from 'next/link';

export default function Kids() {
return (
<section className={styles.Kids}>
<div className="text">
<h2>Kids Coding Education</h2>
<p>Fun, visual and interactive coding classes for kids.</p>
<Link href="/kidsdetails" className={styles.btn}>
  MORE DETAILS....
</Link>
</div>
</section>
)
}