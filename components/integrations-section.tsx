'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Smartphone, MapPin, DollarSign, Users, Zap, QrCode, Clock, CheckCircle, Bell, ShoppingCart } from 'lucide-react'

const technologies = [
  {
    icon: Users,
    title: 'Biometric & Facial Recognition',
    description: 'Ensures accurate and fraud-proof attendance logging with advanced biometric technology.',
  },
  {
    icon: MapPin,
    title: 'Geofencing & GPS Tracking',
    description: 'Monitors employee check-ins/check-outs in real-time with location-based precision.',
  },
  {
    icon: DollarSign,
    title: 'Automated Payroll Integration',
    description: 'Syncs attendance data with payroll systems for error-free salary processing.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Accessibility',
    description: 'Employees and managers can track attendance, apply for leaves, and receive notifications on the go.',
  },
  {
    icon: Zap,
    title: 'Fully Integrated ERP System',
    description: 'Automates core business functions, ensuring seamless operations across departments.',
  },
  {
    icon: ShoppingCart,
    title: 'Procurement Automation',
    description: 'AI-driven vendor management, purchase order generation, and inventory tracking.',
  },
  {
    icon: Users,
    title: 'Smart Hiring & HR Management',
    description: 'Resume parsing, interview scheduling, onboarding workflows, and performance tracking.',
  },
  {
    icon: DollarSign,
    title: 'Billing & Invoicing',
    description: 'Automated invoice generation, payment reminders, and real-time financial reporting.',
  },
  {
    icon: Users,
    title: 'Customer Relationship Management',
    description: 'Centralized customer data, sales pipeline tracking, and automated follow-ups for engagement.',
  },
  {
    icon: QrCode,
    title: 'QR Code Facility Management',
    description: 'Revolutionizing facility management with smart QR code tracking system.',
  },
  {
    icon: Clock,
    title: 'Real-Time Cleaning Schedules',
    description: 'Assign tasks to staff and track completion via QR code scans.',
  },
  {
    icon: CheckCircle,
    title: 'Audit & Compliance Reports',
    description: 'Generate automated reports for hygiene audits and compliance checks.',
  },
]

export function IntegrationsSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Technology & <span className="text-primary">Integrations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on modern architecture with extensibility at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech) => {
            const Icon = tech.icon
            return (
              <Card key={tech.title} className="border-border/50 hover:border-primary/30 hover:shadow-lg transition-all h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{tech.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
