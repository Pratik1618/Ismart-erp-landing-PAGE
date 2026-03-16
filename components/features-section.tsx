'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3, Users, Zap, Shield, TrendingUp, Globe } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Monitor your business metrics with live dashboards and comprehensive reporting tools.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Empower your team with integrated communication and project management features.',
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Automate repetitive tasks and streamline workflows with intelligent automation.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with global security standards.',
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Grow without limits. Our platform scales with your business needs.',
  },
  {
    icon: Globe,
    title: 'Global Ready',
    description: 'Multi-currency and multi-language support for international operations.',
  },
]

export function FeaturesSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your entire enterprise in one integrated platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
