import type React from 'react';

import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export function PageHeader({ title, description, className, children }: PageHeaderProps) {
  return (
    <section className={cn("w-full py-12 md:py-24 lg:py-32 bg-estate-primary text-white", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{title}</h1>
            {description && <p className="max-w-[700px] text-white/80 md:text-xl">{description}</p>}
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}

