'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
  MapPin,
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  CheckCircle,
  FileText,
  Archive,
  Briefcase,
  Settings,
  MessageSquare,
  Target,
  Database,
  Users2,
  BookOpen,
  MessageCircle,
  Lightbulb,
} from 'lucide-react'

const erpModules = [
  { id: 1, title: 'Site Survey', description: 'Comprehensive site assessment', icon: MapPin },
  { id: 2, title: 'Commercial', description: 'Sales, quotes, orders', icon: TrendingUp },
  { id: 3, title: 'Payroll', description: 'Salary & compensation', icon: Users },
  { id: 4, title: 'Procurement', description: 'Vendor & purchase orders', icon: ShoppingCart },
  { id: 5, title: 'Accounts & Finance', description: 'Billing & MIS', icon: DollarSign },
  { id: 6, title: 'Compliance', description: 'Audits & regulations', icon: CheckCircle },
  { id: 7, title: 'Agreement Management', description: 'Legal docs & contracts', icon: FileText },
  { id: 8, title: 'DMS (Document Management)', description: 'Central document storage', icon: Archive },
  { id: 9, title: 'HRMS / PMS', description: 'HR & performance', icon: Briefcase },
  { id: 10, title: 'Operations', description: 'Workflow management', icon: Settings },
  { id: 11, title: 'Chat & Communication', description: 'Internal messaging', icon: MessageSquare },
  { id: 12, title: 'FDD (Field Deployment)', description: 'Field tracking', icon: Target },
  { id: 13, title: 'LDD ', description: 'Lease & property data', icon: Database },
  { id: 14, title: 'Company Secretary', description: 'Corporate governance', icon: Users2 },
  { id: 15, title: 'Training L N D', description: 'Training programs', icon: BookOpen },
  { id: 16, title: 'Client Feedback', description: 'Customer surveys', icon: MessageCircle },
  { id: 17, title: 'AI & Analytics', description: 'Insights & automation', icon: Lightbulb },
  { id: 18, title: 'FAQ (User Manual)', description: 'Self-help knowledge base for quick answers and standard procedures.', icon: BookOpen },

]

export function WelcomeSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            ERP Core <span className="text-primary">Modules</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            18 integrated modules covering all aspects of enterprise operations.
          </p>
        </div>

        {/* ✅ COMPACT LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {erpModules.map((module) => {
            const Icon = module.icon
            return (
              <Card
                key={module.id}
                className="group border-border/50 hover:border-primary/40 transition-all 
                bg-gradient-to-br from-primary/10 via-background to-primary/5 hover:shadow-md"
              >
                <CardContent className="p-4 flex items-center gap-3">

                  {/* ICON */}
                  <div className="w-9 h-9 bg-primary/15 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>

                  {/* TEXT INLINE */}
                  <div className="flex items-center justify-between w-full gap-2">

                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-foreground">
                        {module.title}
                      </span>

                      <span className="text-xs text-muted-foreground">
                        — {module.description}
                      </span>
                    </div>

                    {/* NUMBER */}
                    <span className="text-xs font-semibold text-primary">
                      #{module.id}
                    </span>

                  </div>

                </CardContent>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}