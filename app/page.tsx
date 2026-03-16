import { HeroSection } from '@/components/hero-section'
import { WelcomeSection } from '@/components/welcome-section'
import { FeaturesSection } from '@/components/features-section'
import { LeadershipSection } from '@/components/leadership-section'
import { TimelineSection } from '@/components/timeline-section'
import { IndustriesSection } from '@/components/industries-section'
import { IntegrationsSection } from '@/components/integrations-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { Footer } from '@/components/footer'
import Header from '@/components/header'

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <HeroSection />
      <TimelineSection />
       <LeadershipSection />
      <WelcomeSection />
      
      <FeaturesSection />
     
      
      <IndustriesSection />
      <IntegrationsSection />
      <RoadmapSection />
      <Footer />
    </div>
  )
}
