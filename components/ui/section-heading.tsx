"use client"

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string
  description?: string
  className?: string
  align?: "left" | "center" | "right"
  titleClassName?: string
  descriptionClassName?: string
}

export function SectionHeading({
  title,
  description,
  className,
  align = "center",
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }

  return (
    <div className={cn("flex flex-col space-y-2 mb-5", alignClasses[align], className)}>
      <div className="space-y-1">
        <h2
          className={cn(
            "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-estate-primary",
            titleClassName,
          )}
        >
          {title}
        </h2>
        {description && (
          <p className={cn("max-w-[900px] text-muted-foreground md:text-xl", descriptionClassName)}>{description}</p>
        )}
      </div>
    </div>
  )
}

