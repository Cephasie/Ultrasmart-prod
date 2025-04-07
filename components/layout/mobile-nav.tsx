"use client"

import { useState } from 'react';

import {
  Building,
  Menu,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string
  label: string
}

interface MobileNavProps {
  navItems: NavItem[]
}

export function MobileNav({ navItems }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

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
              <Building className="h-6 w-6 text-estate-primary" />
              {/* <span className="text-xl font-bold text-estate-primary">UltraSmart Constructions</span> */}
            </div>
            <Button variant="ghost" className="p-0 w-10 h-10 rounded-full" onClick={() => setOpen(false)}>
              <X className="h-6 w-6 text-estate-primary" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 py-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-medium px-4 py-2 hover:bg-estate-primary/10 rounded-md transition-colors",
                  pathname === item.href && "text-estate-primary bg-estate-primary/5",
                )}
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

