'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Linkedin, Twitter, Users } from 'lucide-react'
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
  { name: 'Vinayak Bhise', role: 'Managing Director', image: '/V.png', bio: '', social: { linkedin: '#', twitter: '#' } },
  { name: 'Manoj Kambli', role: 'Director HR', image: '/Manoj.png', bio: '', social: { linkedin: '#', twitter: '#' } },
  { name: 'Shobana Bagwe', role: 'Director Finance', image: '/Shobna.png', bio: '', social: { linkedin: '#', twitter: '#' } },
  { name: 'Siddhesh Khanvilkar', role: 'Director Operations', image: '/Siddhesh.png', bio: '', social: { linkedin: '#', twitter: '#' } },
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
  { name: 'Christopher Texeira', role: 'VP Operations', image: '/cropped.png', bio: '', social: { linkedin: '#', twitter: '#' } },
  { name: 'Surendra Badgujar', role: 'AVP Operations', image: '/Surendra.png', bio: '', social: { linkedin: '#', twitter: '#' } },
  { name: 'Dinesh Vyas', role: 'AVP Finance', image: '/Dinesh.png', bio: '', social: { linkedin: '#', twitter: '#' } },
  { name: 'Jayesh Poojari', role: 'Manager', image: '/Jayesh.png', bio: '', social: { linkedin: '#', twitter: '#' } },
  { name: 'Dipti Vichare', role: 'Manager', image: '/Dipti.png', bio: '', social: { linkedin: '#', twitter: '#' } },
]

const financeTeam: TeamMember[] = [
  { name: 'Suraj Sawant', role: 'Sr.Billing Executive', image: '/surajs.png', bio: '', social: { linkedin: '#', twitter: '#' } },
  { name: 'Suraj Dalvi', role: 'Sr.Billing Executive', image: '/suraj.png', bio: '', social: { linkedin: '#', twitter: '#' } },
  { name: 'Sheshmani Yadav', role: 'Accounts Manager', image: '/mani.png', bio: '', social: { linkedin: '#', twitter: '#' } },
  { name: 'Harsh Patil', role: 'Accounts Executive', image: '/harsh.png', bio: '', social: { linkedin: '#', twitter: '#' } },
  { name: 'Nitin Ahire', role: 'Billing Manager', image: '/nitin.png', bio: '', social: { linkedin: '#', twitter: '#' } },
  { name: 'Sushil Pawar', role: 'Billing Executive', image: '/sushil.png', bio: '', social: { linkedin: '#', twitter: '#' } },
  { name: 'Shrikant Chintampol', role: 'Accounts Executive', image: '/shrikant.png', bio: '', social: { linkedin: '#', twitter: '#' } },
]

/* ─── Scroll fade-in ─────────────────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('is-visible'); obs.disconnect() } },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function FadeRow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn()
  return <div ref={ref} className={`fade-row ${className}`}>{children}</div>
}

/* ─── Main Section ───────────────────────────────────────────────────── */
export function LeadershipSection() {
  const [showHeads, setShowHeads] = useState(false)
  const [showBusinessTeam, setShowBusinessTeam] = useState(false)
  const [showFinanceTeam, setShowFinanceTeam] = useState(false)

  const headsTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const bizTimer   = useRef<ReturnType<typeof setTimeout> | null>(null)
  const financeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openHeads      = useCallback(() => { headsTimer.current && clearTimeout(headsTimer.current); setShowHeads(true) }, [])
  const closeHeads     = useCallback(() => {
    headsTimer.current = setTimeout(() => {
      setShowHeads(false)
      setShowBusinessTeam(false)
      setShowFinanceTeam(false)
    }, 320)
  }, [])
  const keepHeadsAlive = useCallback(() => { headsTimer.current && clearTimeout(headsTimer.current) }, [])

  const openBiz      = useCallback(() => { bizTimer.current && clearTimeout(bizTimer.current); setShowBusinessTeam(true) }, [])
  const closeBiz     = useCallback(() => {
    bizTimer.current = setTimeout(() => {
      setShowBusinessTeam(false)
      setShowFinanceTeam(false)
    }, 320)
  }, [])
  const keepBizAlive = useCallback(() => { bizTimer.current && clearTimeout(bizTimer.current) }, [])

  const openFinance      = useCallback(() => { financeTimer.current && clearTimeout(financeTimer.current); setShowFinanceTeam(true) }, [])
  const closeFinance     = useCallback(() => { financeTimer.current = setTimeout(() => setShowFinanceTeam(false), 320) }, [])
  const keepFinanceAlive = useCallback(() => { financeTimer.current && clearTimeout(financeTimer.current) }, [])

  return (
    <>
      <style>{`
        /* ── Scroll reveal ── */
        .fade-row { opacity:0; transform:translateY(20px); transition:opacity .55s ease,transform .55s ease; }
        .fade-row.is-visible { opacity:1; transform:none; }
        .fade-row > * { opacity:0; transform:translateY(14px); transition:opacity .4s ease,transform .4s ease; }
        .fade-row.is-visible > *:nth-child(1){opacity:1;transform:none;transition-delay:.04s}
        .fade-row.is-visible > *:nth-child(2){opacity:1;transform:none;transition-delay:.11s}
        .fade-row.is-visible > *:nth-child(3){opacity:1;transform:none;transition-delay:.18s}
        .fade-row.is-visible > *:nth-child(4){opacity:1;transform:none;transition-delay:.25s}
        .fade-row.is-visible > *:nth-child(5){opacity:1;transform:none;transition-delay:.32s}
        .fade-row.is-visible > *:nth-child(6){opacity:1;transform:none;transition-delay:.39s}
        .fade-row.is-visible > *:nth-child(7){opacity:1;transform:none;transition-delay:.46s}

        /* ── Smooth height expand ── */
        .tree-expand {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows .44s cubic-bezier(.4,0,.2,1), opacity .3s ease;
        }
        .tree-expand.open { grid-template-rows: 1fr; opacity: 1; }
        .tree-expand > .tree-inner { overflow: hidden; }

        /* ── Cards ── */
        .team-card { transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px -8px hsl(var(--primary)/.2);
          border-color: hsl(var(--primary)/.4) !important;
        }
        .team-card.has-children:hover {
          border-color: hsl(var(--primary)/.55) !important;
          box-shadow: 0 18px 40px -6px hsl(var(--primary)/.28);
        }

        /* Hover hint on expandable cards — zero height when hidden */
        .expand-hint {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transform: translateY(3px);
          transition: opacity .18s ease, transform .18s ease, max-height .18s ease;
          font-size: .58rem;
          letter-spacing: .13em;
          text-transform: uppercase;
          color: hsl(var(--primary));
          font-weight: 700;
          padding-top: 0;
        }
        .has-children:hover .expand-hint {
          opacity: .65;
          transform: translateY(0);
          max-height: 24px;
          padding-top: 6px;
        }

        /* ── Chairman spinning ring ── */
        .photo-ring {
          background: conic-gradient(hsl(var(--primary)) 0%,hsl(var(--primary)/.1) 40%,hsl(var(--primary)) 70%,hsl(var(--primary)/.1) 100%);
          animation: ring-spin 9s linear infinite;
        }
        @keyframes ring-spin { to { transform: rotate(360deg); } }

        /* ── Tier badge ── */
        .tier-badge {
          position:absolute; top:-10px; left:50%; transform:translateX(-50%);
          font-size:.58rem; letter-spacing:.15em; text-transform:uppercase;
          padding:2px 10px; border-radius:999px;
          background:hsl(var(--primary)); color:hsl(var(--primary-foreground));
          white-space:nowrap; font-weight:700; z-index:10;
        }

        /* ── Connector pulse dots ── */
        @keyframes pulse-dot{0%,100%{opacity:.3;transform:scale(1)}50%{opacity:1;transform:scale(1.7)}}
        .pulse-dot{ animation: pulse-dot 2.4s ease-in-out infinite; }

        /* ── Shimmer divider ── */
        .shimmer-line {
          height:1px;
          background:linear-gradient(90deg,transparent,hsl(var(--primary)/.5) 30%,hsl(var(--primary)) 50%,hsl(var(--primary)/.5) 70%,transparent);
          background-size:200% 100%;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer{ 0%{background-position:200% 0} 100%{background-position:-200% 0} }

        /* ── Social icons ── */
        .social-btn { transition: background .16s ease, transform .16s ease; }
        .social-btn:hover { background:hsl(var(--primary)/.12); transform:scale(1.18); }
      `}</style>

      <section className="w-full bg-background px-4 py-14 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage:'radial-gradient(hsl(var(--primary)) 1px,transparent 1px)', backgroundSize:'30px 30px' }}
        />

        <div className="mx-auto max-w-7xl relative">

          {/* ── Header ── */}
          <div className="mb-10 text-center space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
              Organisational Structure
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Leadership{' '}
              <span className="relative inline-block text-primary">
                Team
                <span className="absolute -bottom-1 left-0 right-0 shimmer-line" />
              </span>
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
               Reporting flow across chairman, directors, business heads, and operational teams.
            </p>
          </div>

          {/* ── Tree ── */}
          <div>

            {/* TIER 1 — Chairman (always visible) */}
            <FadeRow className="flex justify-center">
              <div className="relative w-full sm:w-52">
                
                <TeamCard member={chairman} variant="chairman" />
              </div>
            </FadeRow>

            <ConnectorGroup branches={4} label="Board of Directors" />

            {/* TIER 2 — Directors (always visible) hover triggers Business Heads */}
            <div onMouseEnter={openHeads} onMouseLeave={closeHeads}>
              <FadeRow className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {directors.map((member) => (
                  <TeamCard key={member.name} member={member} />
                ))}
              </FadeRow>

              {/* EXPAND: Business Heads (hover-revealed) */}
              <div className={`tree-expand ${showHeads ? 'open' : ''}`} onMouseEnter={keepHeadsAlive} onMouseLeave={closeHeads}>
                <div className="tree-inner">
                  <div className="pt-1 pb-4">

                    <ConnectorGroup branches={2} narrow label="Business Heads" />

                    {/* TIER 3 — Business Heads */}
                    <div onMouseEnter={openBiz} onMouseLeave={closeBiz}>
                      <FadeRow className="mx-auto grid max-w-xl grid-cols-1 gap-3 md:grid-cols-2">
                        <TeamCard member={businessHead} hasChildren hint="Hover to expand" />
                        <TeamCard member={overseasHead} />
                      </FadeRow>

                      {/* EXPAND: Business Team */}
                      <div className={`tree-expand ${showBusinessTeam ? 'open' : ''}`} onMouseEnter={keepBizAlive} onMouseLeave={closeBiz}>
                        <div className="tree-inner">
                          <div className="pt-1 pb-4">

                            <BusinessHeadConnector />

                            {/* TIER 4 — Business Team */}
                            <div>
                              <FadeRow className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5 mt-1">
                                {businessTeam.map((m) => (
                                  <div
                                    key={m.name}
                                    onMouseEnter={m.name === 'Dinesh Vyas' ? openFinance : undefined}
                                    onMouseLeave={m.name === 'Dinesh Vyas' ? closeFinance : undefined}
                                  >
                                    <TeamCard
                                      member={m}
                                      hasChildren={m.name === 'Dinesh Vyas'}
                                      hint={m.name === 'Dinesh Vyas' ? 'Hover to expand' : undefined}
                                    />
                                  </div>
                                ))}
                              </FadeRow>

                              <div className={`tree-expand ${showFinanceTeam ? 'open' : ''}`} onMouseEnter={keepFinanceAlive} onMouseLeave={closeFinance}>
                                <div className="tree-inner">
                                  <div className="pt-1 pb-2">

                                    <ConnectorGroup branches={financeTeam.length} label="Finance Team" />

                                    <FadeRow className="mx-auto mt-1 flex max-w-7xl flex-wrap justify-center gap-3 xl:flex-nowrap">
                                      {financeTeam.map((m, index) => (
                                        <div key={`${m.name || 'empty'}-${index}`} className="w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(25%-0.5625rem)] xl:w-[160px] xl:flex-none">
                                          <TeamCard member={m} />
                                        </div>
                                      ))}
                                    </FadeRow>

                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

/* ─── Connectors ─────────────────────────────────────────────────────── */
function ConnectorGroup({ branches, narrow = false, label }: { branches: number; narrow?: boolean; label?: string }) {
  return (
    <div className="flex flex-col items-center my-2">
      <div className={`relative h-14 w-full ${narrow ? 'max-w-2xl' : 'max-w-5xl'}`}>
        <div className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-primary/40" />
        <div className="absolute left-1/2 top-7 h-px -translate-x-1/2 bg-primary/25" style={{ width: branchWidth(branches) }} />
        <div className="absolute top-7 flex -translate-x-1/2 justify-between" style={{ left:'50%', width: branchWidth(branches) }}>
          {Array.from({ length: branches }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="h-7 w-px bg-primary/40" />
              <div className="pulse-dot h-2 w-2 rounded-full bg-primary/50" />
            </div>
          ))}
        </div>
      </div>
      {label && <span className="text-[0.58rem] font-bold tracking-widest uppercase text-primary/40 mt-1 mb-1">{label}</span>}
    </div>
  )
}

function BusinessHeadConnector() {
  return (
    <div className="mx-auto w-full max-w-6xl px-3 my-2">
      <div className="relative h-14">
        <div className="absolute left-1/2 top-0 h-7 w-px -translate-x-1/2 bg-primary/40 md:left-1/4" />
        <div className="absolute left-1/2 top-7 h-px w-[90%] -translate-x-1/2 bg-primary/25" />
        <div className="absolute left-1/2 top-7 flex w-[90%] -translate-x-1/2 justify-between">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="h-7 w-px bg-primary/40" />
              <div className="pulse-dot h-2 w-2 rounded-full bg-primary/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function branchWidth(branches: number) {
  if (branches <= 2) return '50%'
  if (branches === 4) return '78%'
  return '90%'
}

/* ─── Team Card ──────────────────────────────────────────────────────── */
function TeamCard({
  member,
  variant = 'default',
  hasChildren = false,
  hint,
}: {
  member: TeamMember
  variant?: 'default' | 'chairman'
  hasChildren?: boolean
  hint?: string
}) {
  const isChairman = variant === 'chairman'
  const isEmptyCard = !member.name && !member.role && !member.image

  return (
    <div
      className={`team-card rounded-xl overflow-hidden border bg-card shadow-sm ${hasChildren ? 'has-children' : ''} border-primary/35`}
    >
      {/* Photo area */}
      <div
        className={`relative flex items-center justify-center ${isChairman ? 'h-36' : 'h-32'}`}
        style={{ background: 'linear-gradient(150deg, rgba(134,239,172,.28) 0%, rgba(187,247,208,.12) 100%)' }}
      >
        {member.image ? (
          <div className={`relative ${isChairman ? 'h-24 w-24' : 'h-20 w-20'}`}>
            <div className="absolute -inset-1.5 rounded-full">
              <div className="photo-ring h-full w-full rounded-full p-[2px]">
                <div className="h-full w-full rounded-full" style={{ background: 'rgba(255,255,255,0.9)' }} />
              </div>
            </div>
            <div className="overflow-hidden rounded-full h-full w-full relative z-10 shadow-sm border-2 border-primary/35">
              <Image src={member.image} alt={member.name} width={120} height={120} className="h-full w-full object-cover" />
            </div>
          </div>
        ) : isEmptyCard ? (
          <div className={`rounded-full border-2 border-dashed border-primary/25 bg-white/50 ${isChairman ? 'h-20 w-20' : 'h-16 w-16'}`} />
        ) : (
          <div className={`flex items-center justify-center rounded-full bg-primary/15 ${isChairman ? 'h-20 w-20' : 'h-16 w-16'}`}>
            <span className={`font-extrabold text-primary ${isChairman ? 'text-3xl' : 'text-2xl'}`}>{member.name[0]}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-3 pb-3 pt-3 text-center">
        {isEmptyCard ? (
          <div className="h-[74px]" />
        ) : (
          <>
            <h3 className={`font-bold text-foreground leading-tight ${isChairman ? 'text-base' : 'text-sm'}`}>{member.name}</h3>
            <p className="mt-0.5 font-medium text-primary text-xs">{member.role}</p>
            {member.bio && <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{member.bio}</p>}
          </>
        )}

        <div className="my-2 shimmer-line" />

        {isEmptyCard ? (
          <div className="h-[30px]" />
        ) : (
          <div className="flex justify-center gap-1">
            <a href={member.social.linkedin} className="social-btn rounded-md p-1.5" aria-label={`${member.name} LinkedIn`}>
              <Linkedin className="h-3 w-3 text-primary" />
            </a>
            <a href={member.social.twitter} className="social-btn rounded-md p-1.5" aria-label={`${member.name} Twitter`}>
              <Twitter className="h-3 w-3 text-primary" />
            </a>
          </div>
        )}

        {hasChildren && hint && (
          <div className="expand-hint flex items-center justify-center gap-1">
            <Users className="h-2.5 w-2.5" />
            {hint}
          </div>
        )}
      </div>
    </div>
  )
}
