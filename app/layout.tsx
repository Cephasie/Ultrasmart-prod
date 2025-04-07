import './globals.css';

import type React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UltraSmart Constructions",
  description: "UltraSmart Construction Limited is a home construction company with clear values and result-oriented approach to every project. We are building a reliable brand aimed at quality and timely delivery of projects and services to our clients.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
