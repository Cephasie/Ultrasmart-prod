"use client"

import { useState } from 'react';

import {
  Menu,
  X,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-0 w-10 h-10 rounded-full">
          <Menu className="h-6 w-6 text-estate-primary" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-estate-light">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b border-estate-primary/10 py-4">
            <div className="flex items-center gap-2">
              {/* <Building className="h-6 w-6 text-estate-primary" />
              <span className="text-xl font-bold text-estate-primary">UltrSmart Constructions</span> */}
              <a href="/" className="block">
              <img 
                src="https://res.cloudinary.com/dtqrzl86y/image/upload/v1719320004/UltraSmart%20Homes/logo_a9a1lc.jpg"
                alt="UltrSmart Logo" 
                className="h-8 w-8 object-cover rounded-full" 
              />
              </a>
            </div>
            <Button variant="ghost" className="p-0 w-10 h-10 rounded-full" onClick={() => setOpen(false)}>
              <X className="h-6 w-6 text-estate-primary" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 py-8">
            {[
              { href: "/", label: "Home" },
              { href: "/properties", label: "Properties" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium px-4 py-2 hover:bg-estate-primary/10 rounded-md transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto border-t border-estate-primary/10 py-4">
            <Button className="w-full bg-estate-primary hover:bg-estate-primary/90">Get a Quote</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

