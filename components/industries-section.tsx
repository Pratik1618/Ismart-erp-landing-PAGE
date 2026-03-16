'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Factory, Briefcase, Pill, Utensils, Zap } from 'lucide-react'

const industries = [
  {
    icon: Building2,
    name: 'Real Estate',
    description: 'Manage properties, leases, and tenant relationships seamlessly.',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description: 'Optimize production workflows and supply chain operations.',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    description: 'Track projects, resources, and client billing with precision.',
  },
  {
    icon: Pill,
    name: 'Healthcare',
    description: 'Streamline administrative and operational processes efficiently.',
  },
  {
    icon: Utensils,
    name: 'Food & Beverage',
    description: 'Manage inventory, compliance, and multi-location operations.',
  },
  {
    icon: Zap,
    name: 'Utilities',
    description: 'Handle billing, meter management, and customer operations.',
  },
]

export function IndustriesSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Industries We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across diverse industries to power their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <Card key={industry.name} className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{industry.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
