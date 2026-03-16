'use client'

import { useState } from 'react'
import { LucideIcon, ArrowRight } from 'lucide-react'

interface ModuleCardProps {
  module: {
    id: number
    title: string
    description: string
    icon: LucideIcon
    color: string
  }
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = module.icon

  return (
    <div
      className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/50 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient accent */}
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br ${module.color} group-hover:opacity-10`} />

      <div className="relative p-6">
        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground">{module.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{module.description}</p>

        {/* Arrow indicator */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xs font-medium text-primary">Launch Module</span>
          <ArrowRight
            className={`h-4 w-4 text-primary transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`}
          />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${module.color} transform origin-left transition-transform duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} />
    </div>
  )
}
