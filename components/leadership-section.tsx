'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

type TeamMember = {
  name: string
  role: string
  image: string
  bio: string
  social: { linkedin: string; twitter: string }
}

const chairman: TeamMember = {
  name: 'Sanjay Khanvilkar',
  role: 'Chairman',
  image: '/Sanjay.png',
  bio: '',
  social: { linkedin: '#', twitter: '#' },
}

const directors: TeamMember[] = [
  {
    name: 'Vinayak Bhise',
    role: 'Managing Director',
    image: '/V.png',
    bio: '',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Manoj Kambli',
    role: 'Director HR',
    image: '/Manoj.png',
    bio: '',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Shobana Bagwe',
    role: 'Director Finance',
    image: '/Shobna.png',
    bio: '',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Siddhesh Khanvilkar',
    role: 'Director Operations',
    image: '/Siddhesh.png',
    bio: '',
    social: { linkedin: '#', twitter: '#' },
  },
]

const businessHead: TeamMember = {
  name: 'Sanka Prasad',
  role: 'Business Head',
  image: '/Sanka.png',
  bio: '',
  social: { linkedin: '#', twitter: '#' },
}

const overseasHead: TeamMember = {
  name: 'Aniket Bhingarde',
  role: 'Overseas Business Head',
  image: '/Aniket.png',
  bio: '',
  social: { linkedin: '#', twitter: '#' },
}

const businessTeam: TeamMember[] = [
  {
    name: 'Christopher Texeira',
    role: 'VP Operations',
    image: '/cropped.png',
    bio: '',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Surendra Badgujar',
    role: 'AVP Operations',
    image: '/Surendra.png',
    bio: '',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Dinesh Vyas',
    role: 'AVP Finance',
    image: '/Dinesh.png',
    bio: '',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Jayesh Poojari',
    role: 'Manager',
    image: '/Jayesh.png',
    bio: '',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Dipti Vichare',
    role: 'Manager',
    image: '/Dipti.png',
    bio: '',
    social: { linkedin: '#', twitter: '#' },
  },
]

export function LeadershipSection() {
  return (
    <section className="w-full bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-4xl font-bold text-foreground sm:text-5xl">
            Leadership <span className="text-primary">Team</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Reporting flow across chairman, directors, business heads, and operational teams.
          </p>
        </div>

        <div className="space-y-10">
          <div className="flex justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[280px]">
              <TeamCard member={chairman} />
            </div>
          </div>

          <ConnectorGroup branches={4} />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {directors.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          <ConnectorGroup branches={2} narrow />

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
            <TeamCard member={businessHead} />
            <TeamCard member={overseasHead} />
          </div>

          <BusinessHeadConnector />

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {businessTeam.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ConnectorGroup({
  branches,
  narrow = false,
}: {
  branches: number
  narrow?: boolean
}) {
  return (
    <div className="flex justify-center">
      <div className={`relative h-16 w-full ${narrow ? 'max-w-3xl' : 'max-w-6xl'}`}>
        <div className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-primary/40" />
        <div className="absolute left-1/2 top-8 h-px -translate-x-1/2 bg-primary/40" style={{ width: branchWidth(branches) }} />
        <div
          className="absolute top-8 flex -translate-x-1/2 justify-between"
          style={{ left: '50%', width: branchWidth(branches) }}
        >
          {Array.from({ length: branches }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-8 w-px bg-primary/40" />
              <div className="h-2 w-2 rounded-full bg-primary/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function BusinessHeadConnector() {
  return (
    <div className="mx-auto w-full max-w-6xl px-3">
      <div className="relative h-16">
        <div className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 bg-primary/40 md:left-1/4" />
        <div className="absolute left-1/2 top-8 h-px w-[90%] -translate-x-1/2 bg-primary/40" />
        <div className="absolute left-1/2 top-8 flex w-[90%] -translate-x-1/2 justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-8 w-px bg-primary/40" />
              <div className="h-2 w-2 rounded-full bg-primary/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function branchWidth(branches: number) {
  if (branches <= 2) return '55%'
  if (branches === 4) return '82%'
  return '90%'
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Card className="h-full overflow-hidden border-border/50">
      <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
        {member.image ? (
          <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-background shadow-sm sm:h-32 sm:w-32">
            <Image src={member.image} alt={member.name} width={160} height={160} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/30">
            <span className="text-3xl font-bold text-primary">{member.name[0]}</span>
          </div>
        )}
      </div>
      <CardContent className="pt-6 text-center">
        <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
        <p className="mb-2 text-sm font-medium text-primary">{member.role}</p>
        {member.bio ? <p className="mb-4 text-sm text-muted-foreground">{member.bio}</p> : null}
        <div className={`flex justify-center gap-2 ${member.bio ? '' : 'mt-4'}`}>
          <a href={member.social.linkedin} className="rounded-lg p-2 transition-colors hover:bg-primary/10">
            <Linkedin className="h-4 w-4 text-primary" />
          </a>
          <a href={member.social.twitter} className="rounded-lg p-2 transition-colors hover:bg-primary/10">
            <Twitter className="h-4 w-4 text-primary" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
