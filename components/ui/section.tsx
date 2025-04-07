import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: "white" | "light" | "primary" | "dark" | "muted"
}

export function Section({ children, className, background = "white" }: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    light: "bg-estate-light",
    primary: "bg-estate-primary text-white",
    dark: "bg-estate-dark text-white",
    muted: "bg-muted",
  }

  return (
    <section className={cn("w-full py-12 md:py-24 lg:py-32", bgClasses[background], className)}>
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  )
}

