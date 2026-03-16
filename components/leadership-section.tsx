'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

const team = [
  {
    name: 'Sanjay Khanvilkar',
    role: 'Chairman',
    image: '/Sanjay.png',
    bio: '',
    social: { linkedin: '#', twitter: '#' },
  },
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
  {
    name: 'Sanka Prasad',
    role: 'Business Head',
    image: '/Sanka.png',
    bio: '',
    social: { linkedin: '#', twitter: '#' },
  },
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
    name: 'Aniket Bhingarde',
    role: 'Overseas Business Head',
    image: '/Aniket.png',
    bio: '',
    social: { linkedin: '#', twitter: '#' },
  },
]

export function LeadershipSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Leadership <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced leaders driving innovation and excellence in enterprise software.
          </p>
        </div>

        <div className="space-y-6">
          {/* Row 1: CEO (1 card centered) */}
          <div className="flex justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <TeamCard member={team[0]} />
            </div>
          </div>

          {/* Row 2: VPs (4 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.slice(1, 5).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          {/* Row 3: Team Members (5 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {team.slice(5, 10).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamCard({ member }: { member: (typeof team)[0] }) {
  return (
    <Card className="border-border/50 overflow-hidden h-full">
      <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        {member.image ? (
          <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-background shadow-sm sm:h-32 sm:w-32">
            <Image
              src={member.image}
              alt={member.name}
              width={160}
              height={160}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold text-primary">{member.name[0]}</span>
          </div>
        )}
      </div>
      <CardContent className="pt-6 text-center">
        <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
        <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
        {member.bio ? <p className="text-sm text-muted-foreground mb-4">{member.bio}</p> : null}
        <div className={`flex gap-2 justify-center ${member.bio ? '' : 'mt-4'}`}>
          <a
            href={member.social.linkedin}
            className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
          >
            <Linkedin className="w-4 h-4 text-primary" />
          </a>
          <a href={member.social.twitter} className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
            <Twitter className="w-4 h-4 text-primary" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
