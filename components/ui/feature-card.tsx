import type React from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-6 rounded-lg bg-estate-light shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1",
        className,
      )}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-estate-dark">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

