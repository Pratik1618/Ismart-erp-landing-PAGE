'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/10 pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
              Enterprise Resource Planning <span className="text-primary">Reimagined</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Transform your business with iSmart ERP. Seamlessly integrate commercial management, payroll, accounting, and human resources into one powerful platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
              Explore Features
            </Button>
          </div>

          <div className="pt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">100+</p>
              <p className="text-muted-foreground">Active Clients</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">5K+</p>
              <p className="text-muted-foreground">Employees Managed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">99.9%</p>
              <p className="text-muted-foreground">System Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
