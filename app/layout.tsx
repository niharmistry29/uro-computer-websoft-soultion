import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next'


export const metadata: Metadata = {
title: 'URO Web-Soft Solution',
description: 'Education, Projects & Software Solutions with 3D Experience',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}