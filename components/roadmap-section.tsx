'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Zap } from 'lucide-react'

const roadmapItems = [
  {
    quarter: 'Q2 2026',
    title: 'Eco-friendly Initiatives for a Greener Future',
    description: 'Sustainability-driven actions for a greener future.',
    status: 'In Progress',
  },
  {
    quarter: 'Q3 2026',
    title: 'Target Identified (Inorganic Growth)',
    description: 'Inorganic growth roadmap through strategic partnerships and acquisitions.',
    status: 'Planned',
  },
  {
    quarter: 'Q4 2026',
    title: 'Integrating AI Solutions for Efficiency (Tech Advancement)',
    description: 'Advanced AI solutions to improve efficiency and automate core operations.',
    status: 'Planned',
  },
  {
    quarter: 'Q1 2027',
    title: 'Enhanced Services to Improve Satisfaction (Customer Focus)',
    description: 'Customer-first service enhancements to increase satisfaction and loyalty.',
    status: 'Planned',
  },
  {
    quarter: 'Q2 2027',
    title: 'Driving Change with New Ideas (Innovation)',
    description: 'Innovation-led initiatives to drive transformational change and growth.',
    status: 'Planned',
  },
]

export function RoadmapSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            ROAD <span className="text-primary">AHEAD</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A sustainability-focused, growth-driven roadmap to transform our business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {roadmapItems.map((item) => (
            <Card key={item.quarter} className="p-6 border-border/50 hover:border-primary/30 transition-all">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-bold text-primary mb-1">{item.quarter}</p>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${item.status === 'In Progress' ? 'bg-primary/20 text-primary' : 'bg-muted'}`}>
                  {item.status}
                </span>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 sm:p-12 text-center border border-primary/20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-primary" />
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Ready to Transform Your Business?</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of enterprises already leveraging iSmart ERP to streamline operations and drive growth.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
