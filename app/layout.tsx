import './globals.css';

import type React from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UltraSmart Constructions | Real estate and constructions company",
  description:
    "UltraSmart Construction Limited is a home construction company with clear values and a result-oriented approach to every project. We are building a reliable brand aimed at quality and timely delivery of projects and services to our clients.",
    icons: {
      icon: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1723048362/ultraLogo_ghlucn.jpg",
    },

    openGraph: {
    title: "UltraSmart Constructions | Real estate and constructions company",
    description:
      "UltraSmart Construction Limited is a real estate and home construction company in Nigeria, head-quartered in Abuja.",
    images: [
      {
        url: "https://res.cloudinary.com/dtqrzl86y/image/upload/v1719320004/UltraSmart%20Homes/logo_a9a1lc.jpg",
        width: 800,
        height: 600,
        alt: "UltraSmart Constructions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UltraSmart Constructions",
    description:
      "UltraSmart Construction Limited delivers quality and timely home construction solutions.",
    images: [
      "https://res.cloudinary.com/dtqrzl86y/image/upload/v1719320004/UltraSmart%20Homes/logo_a9a1lc.jpg",
    ],
  },
};

// export const metadata: Metadata = {
//   title: "UltraSmart Constructions",
//   description: "UltraSmart Construction Limited is a home and real estate construction company in Nigeria with clear values and result-oriented approach to every project. We are building a reliable brand aimed at quality and timely delivery of projects and services to our clients.",
//   images: [{ url: 'https://res.cloudinary.com/dtqrzl86y/image/upload/v1723048362/ultraLogo_ghlucn.jpg' }]
// }

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
