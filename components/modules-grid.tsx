'use client'

import { LucideIcon } from 'lucide-react'
import ModuleCard from '@/components/module-card'

interface Module {
  id: number
  title: string
  description: string
  icon: LucideIcon
  color: string
}

interface ModulesGridProps {
  modules: Module[]
}

export default function ModulesGrid({ modules }: ModulesGridProps) {
  return (
    <div>
      <div className="mb-8">
        <h3 className="text-text-balance text-2xl font-bold text-foreground">
          Management Modules
        </h3>
        <p className="mt-2 text-muted-foreground">
          Access all your business management tools in one place
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </div>
  )
}
