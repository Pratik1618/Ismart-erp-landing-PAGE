'use client'

export default function WelcomeBanner() {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-accent/5 py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-xl bg-card p-8 shadow-sm border border-border">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Welcome to iSmart ERP
          </h2>
          <p className="mt-2 text-muted-foreground">
            Streamline your business operations with our integrated enterprise solutions
          </p>
        </div>
      </div>
    </div>
  )
}
