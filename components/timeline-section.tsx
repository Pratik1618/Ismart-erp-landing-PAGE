'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

const milestones = [
  {
    year: '1968',
    title: 'SMS Founded',
    description: 'SMS launched with a vision for innovation in the Indian FM (Facilities Management) industry.',
  },
  {
    year: '2017',
    title: 'Strategic Acquisition',
    description: 'SMS was acquired by Samara Capital, a US-based Private Equity Firm, expanding global reach.',
  },
  {
    year: '2022',
    title: 'iSmart Re-launch',
    description: 'Re-entered the market post five-year non-compete through acquisition of CFMS, rebranded as iSmart.',
  },
  {
    year: '2022',
    title: '20+ Offices Established',
    description: 'Rapidly expanded across India with 20+ offices managing multiple client sites.',
  },
  {
    year: '2024',
    title: '5500+ Employees',
    description: 'Grew to manage 5500+ employees across 100+ clients and 3800+ managed client sites.',
  },
  {
    year: '2026',
    title: '₹140+ Cr Revenue',
    description: 'Achieved significant growth milestone with ₹140+ Crore revenue in just 4 years post-relaunch.',
  },
]

export function TimelineSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Journey & <span className="text-primary">Milestones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From SMS legacy to iSmart innovation: Over 50 years of industry excellence in Facilities Management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((milestone, index) => (
            <Card
              key={milestone.year}
              className="p-6 border-border/50 hover:border-primary/30 transition-all relative"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-primary mb-1">{milestone.year}</p>
                  <h3 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
