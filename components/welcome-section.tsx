'use client'

import { Card } from '@/components/ui/card'

const modules = [
  {
    name: 'Commercial',
    description: 'Manage sales, inventory, and customer relationships with precision.',
    gradient: 'from-primary/20 to-primary/5',
  },
  {
    name: 'Payroll',
    description: 'Streamline employee compensation and compliance management effortlessly.',
    gradient: 'from-primary/15 to-primary/5',
  },
  {
    name: 'Accounts & Billing',
    description: 'Maintain financial accuracy with integrated accounting and invoicing.',
    gradient: 'from-primary/20 to-primary/5',
  },
  {
    name: 'HRMS',
    description: 'Optimize workforce management from recruitment to retirement.',
    gradient: 'from-primary/15 to-primary/5',
  },
]

export function WelcomeSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Core <span className="text-primary">Modules</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for every aspect of your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <Card
              key={module.name}
              className={`p-6 bg-gradient-to-br ${module.gradient} border-border/50 hover:border-primary/30 transition-all`}
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">{module.name}</h3>
              <p className="text-muted-foreground">{module.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
