"use client"

import {
  useEffect,
  useState,
} from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MobileNav } from '@/components/layout/mobile-nav';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-background transition-all duration-200",
        scrolled && "shadow-sm",
      )}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          {/* <Building className="h-6 w-6 text-estate-primary" />
          <span className="text-xl font-bold text-estate-primary">UltraSmart Constructions</span> */}
          <Link href="/" className="flex items-center">
              <img
              src="https://res.cloudinary.com/dtqrzl86y/image/upload/v1719320004/UltraSmart%20Homes/logo_a9a1lc.jpg"
              alt="UltraSmart Constructions Logo"
              width={100}
              height={30}
              className="object-contain"
              />
            </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-estate-primary relative",
                pathname === item.href && "text-estate-primary",
                pathname === item.href &&
                  "after:absolute after:bottom-[-18px] after:left-0 after:w-full after:h-0.5 after:bg-estate-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button className="bg-estate-primary hover:bg-estate-primary/90 hidden md:flex">Get a Quote</Button>
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  )
}

