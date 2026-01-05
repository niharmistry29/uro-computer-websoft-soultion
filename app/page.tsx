'use client';

import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Kids from '@/components/Kids'
import Students from '@/components/Students'
import styles from './page.module.css'

const Business = dynamic(() => import('@/components/Business'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <Business />      
    </main>
  )
}
