'use client'

import { useState, useRef, useEffect, useCallback, type ReactNode } from 'react'
import Image from 'next/image'

/* ─── Types ────────────────────────────────────────────────────────────── */
type Member = {
  name: string
  role: string
  image?: string
}

/* ─── Data ─────────────────────────────────────────────────────────────── */
const chairman: Member = { name: 'Sanjay Khanvilkar', role: 'Chairman', image: '/Sanjay.png' }

const directors: (Member & { id: string; expandable?: boolean })[] = [
  { id: 'vinayak', name: 'Vinayak Bhise',      role: 'Managing Director',   image: '/V.png',        expandable: true },
  { id: 'manoj',   name: 'Manoj Kambli',        role: 'Director HR',         image: '/Manoj.png',    expandable: true },
  { id: 'shobana', name: 'Shobana Bagwe',       role: 'Director Finance',    image: '/Shobna.png' },
  { id: 'siddhesh',name: 'Siddhesh Khanvilkar', role: 'Director Operations', image: '/Siddhesh.png' },
]

const devTeam: Member[] = [
  { name: 'Pratik Kadam',    image: '/pratik.png',  role: 'Software Developer' },
  { name: 'Priyanshu',                              role: 'Software Developer' },
  { name: 'Vivek Awari',     image: '/vivek.png',   role: 'Software Developer' },
  { name: 'Mateen Sayyedd',  image: '/mateen.png',  role: 'Software Developer' },
]

const hrTeam: Member[] = [
  { name: 'Pratima Chavan',  image: '/pratima.png', role: 'Sr.Executive HR' },
  { name: 'Sagar Hatankar',  image: '/sagar.png',   role: 'HR & Payroll Executive' },
  { name: 'Kshitj Goankar',  image: '/ksh.png',     role: 'Payroll Executive' },
  { name: 'Sachin Pawar',    image: '/sachinp.png', role: 'Payroll Executive' },
]

const businessHeads: (Member & { id: string; expandable?: boolean })[] = [
  { id: 'sanka',  name: 'Sanka Prasad',     role: 'Business Head',          image: '/Sanka.png',  expandable: true },
  { id: 'aniket', name: 'Aniket Bhingarde', role: 'Overseas Business Head', image: '/Aniket.png' },
]

const businessTeam: (Member & { id?: string; expandable?: boolean })[] = [
  { name: 'Christopher Texeira', role: 'VP Operations',  image: '/cropped.png' },
  { name: 'Surendra Badgujar',   role: 'AVP Operations', image: '/Surendra.png' },
  { id: 'dinesh', name: 'Dinesh Vyas', role: 'AVP Finance', image: '/Dinesh.png', expandable: true },
  { name: 'Jayesh Poojari',      role: 'Manager',        image: '/Jayesh.png' },
  { name: 'Dipti Vichare',       role: 'Manager',        image: '/Dipti.png' },
]

const financeTeam: Member[] = [
  { name: 'Nitin Ahire',         role: 'Billing Manager',       image: '/nitin.png' },
  { name: 'Sheshmani Yadav',     role: 'Accounts Manager',      image: '/mani.png' },
  { name: 'Suraj Sawant',        role: 'Sr. Billing Executive', image: '/surajs.png' },
  { name: 'Suraj Dalvi',         role: 'Sr. Billing Executive', image: '/suraj.png' },
  { name: 'Harsh Patil',         role: 'Accounts Executive',    image: '/harsh.png' },
  { name: 'Shrikant Chintampol', role: 'Accounts Executive',    image: '/shrikant.png' },
  { name: 'Sushil Pawar',        role: 'Billing Executive',     image: '/sushil.png' },
]

/* ─── Scroll reveal ─────────────────────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('lv-visible'); obs.disconnect() } },
      { threshold: 0.04 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function FadeRow({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useFadeIn()
  return <div ref={ref} className={`lv-fade ${className}`}>{children}</div>
}

/* ─── Smooth expand ─────────────────────────────────────────────────────── */
function Expandable({ open, children }: { open: boolean; children: ReactNode }) {
  return (
    <div className={`lv-expand ${open ? 'lv-expand--open' : ''}`}>
      <div className="lv-expand__inner">{children}</div>
    </div>
  )
}

/* ─── Avatar ─────────────────────────────────────────────────────────────── */
function Avatar({ member, size = 'md', ring = false }: {
  member: Member; size?: 'sm' | 'md' | 'lg'; ring?: boolean
}) {
  const dim = size === 'lg' ? 'h-24 w-24' : size === 'md' ? 'h-20 w-20' : 'h-14 w-14'
  const txt = size === 'lg' ? 'text-3xl'  : size === 'md' ? 'text-2xl'  : 'text-lg'

  return (
    <div className={`relative ${dim} mx-auto`}>
      {ring && <div className="lv-ring absolute -inset-2 rounded-full" />}
      <div className={`relative z-10 ${dim} overflow-hidden rounded-full border-2 border-emerald-500/30 bg-white shadow-md`}>
        {member.image ? (
          <Image src={member.image} alt={member.name} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100">
            <span className={`font-bold text-emerald-700 ${txt}`}>{member.name[0]}</span>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Team Card ─────────────────────────────────────────────────────────── */
function TeamCard({
  member, onClick, active, expandable, size = 'md', cardRef,
}: {
  member: Member
  onClick?: () => void
  active?: boolean
  expandable?: boolean
  size?: 'sm' | 'md' | 'lg'
  cardRef?: React.RefObject<HTMLDivElement>
}) {
  const isLg = size === 'lg'
  const isSm = size === 'sm'

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`lv-card relative rounded-2xl border bg-white text-center select-none
        ${isLg ? 'px-5 pb-6 pt-7'   : isSm ? 'px-3 pb-4 pt-5' : 'px-4 pb-5 pt-6'}
        ${onClick ? 'cursor-pointer' : ''}
        ${active
          ? 'border-emerald-500/50 shadow-xl shadow-emerald-500/15 lv-card--active'
          : 'border-slate-200 shadow-sm'}
        ${expandable && !active ? 'border-emerald-400/40' : ''}
      `}
    >
      {active && <div className="pointer-events-none absolute inset-0 rounded-2xl bg-emerald-500/[0.04]" />}

      <Avatar member={member} size={isLg ? 'lg' : isSm ? 'sm' : 'md'} ring={isLg} />

      <div className={isSm ? 'mt-2.5' : 'mt-4'}>
        <p className={`font-bold leading-tight text-slate-800
          ${isLg ? 'text-base' : isSm ? 'text-xs' : 'text-sm'}`}>
          {member.name}
        </p>
        <p className={`mt-1 font-medium text-emerald-600
          ${isLg ? 'text-sm' : isSm ? 'text-[10px]' : 'text-xs'}`}>
          {member.role}
        </p>
      </div>

      {expandable && (
        <div className={`mt-2.5 flex items-center justify-center gap-1 text-[9px] font-bold uppercase tracking-widest
          ${active ? 'text-emerald-600' : 'text-slate-400'}`}>
          <span className={`inline-block transition-transform duration-300 ${active ? 'rotate-180' : ''}`}>▾</span>
          {active ? 'collapse' : 'expand'}
        </div>
      )}
    </div>
  )
}

/* ─── Connectors ────────────────────────────────────────────────────────── */
function VStem({ height = 32 }: { height?: number }) {
  return (
    <div className="flex justify-center">
      <div className="w-px bg-emerald-500/35" style={{ height }} />
    </div>
  )
}

function HConnector({ count, maxW = '80%' }: { count: number; maxW?: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-px h-6 bg-emerald-500/35" />
      <div className="relative h-6 w-full" style={{ maxWidth: maxW }}>
        <div className="absolute top-0 left-0 right-0 h-px bg-emerald-500/25" />
        <div className="absolute top-0 left-0 right-0 flex justify-between">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-px h-6 bg-emerald-500/30" />
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/60 lv-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Dashed vertical line: director card → bottom section ─────────────── */
function BottomConnectorLine({ fromRef, toRef, visible }: {
  fromRef: React.RefObject<HTMLDivElement | null>
  toRef:   React.RefObject<HTMLDivElement | null>
  visible: boolean
}) {
  const lineRef = useRef<HTMLDivElement>(null)

  const recalc = useCallback(() => {
    const line = lineRef.current
    const from = fromRef.current
    const to   = toRef.current
    if (!line || !from || !to) return
    const fr  = from.getBoundingClientRect()
    const tr  = to.getBoundingClientRect()
    const box = line.parentElement!.getBoundingClientRect()
    line.style.left   = `${fr.left + fr.width / 2 - box.left}px`
    line.style.top    = `${fr.bottom - box.top}px`
    line.style.height = `${Math.max(0, tr.top - box.top - (fr.bottom - box.top))}px`
  }, [fromRef, toRef])

  useEffect(() => {
    if (!visible) return
    recalc()
    window.addEventListener('resize', recalc)
    return () => window.removeEventListener('resize', recalc)
  }, [visible, recalc])

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(recalc, 500)
    return () => clearTimeout(t)
  }, [visible, recalc])

  if (!visible) return null
  return (
    <div ref={lineRef} className="pointer-events-none absolute w-px lv-dash-line" style={{ position: 'absolute' }} />
  )
}

/* ─── Team grid ─────────────────────────────────────────────────────────── */
function TeamGrid({ members, cols = 4, size = 'sm' }: { members: Member[]; cols?: number; size?: 'sm' | 'md' }) {
  const gridCols: Record<number, string> = {
    4: 'grid-cols-2 sm:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 xl:grid-cols-5',
    7: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7',
  }
  return (
    <div className={`grid gap-4 ${gridCols[cols] ?? 'grid-cols-2 sm:grid-cols-4'}`}>
      {members.map((m, i) => <TeamCard key={i} member={m} size={size} />)}
    </div>
  )
}

/* ─── Main export ───────────────────────────────────────────────────────── */
export function LeadershipSection() {
  // Only ONE director section open at a time
  const [directorOpen, setDirectorOpen] = useState<'vinayak' | 'manoj' | null>(null)
  const [sankaOpen,    setSankaOpen]    = useState(false)
  const [financeOpen,  setFinanceOpen]  = useState(false)

  const vinayakCardRef = useRef<HTMLDivElement>(null)
  const manojCardRef   = useRef<HTMLDivElement>(null)
  const devSectionRef  = useRef<HTMLDivElement>(null)
  const hrSectionRef   = useRef<HTMLDivElement>(null)
  const containerRef   = useRef<HTMLDivElement>(null)

  const toggleDirector = useCallback((id: 'vinayak' | 'manoj') => {
    setDirectorOpen(prev => {
      const next = prev === id ? null : id
      if (next) {
        // Wait for React to render + expand animation to start, then scroll gently
        setTimeout(() => {
          const target = id === 'vinayak' ? devSectionRef.current : hrSectionRef.current
          if (!target) return
          const targetY = target.getBoundingClientRect().top + window.scrollY - 80
          const startY  = window.scrollY
          const distance = targetY - startY
          const duration = 900 // ms — slow and smooth
          let startTime: number | null = null

          function easeInOutCubic(t: number) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
          }

          function step(timestamp: number) {
            if (!startTime) startTime = timestamp
            const elapsed = timestamp - startTime
            const progress = Math.min(elapsed / duration, 1)
            window.scrollTo(0, startY + distance * easeInOutCubic(progress))
            if (progress < 1) requestAnimationFrame(step)
          }

          requestAnimationFrame(step)
        }, 200)
      }
      return next
    })
  }, [])

  const devOpen       = directorOpen === 'vinayak'
  const hrOpen        = directorOpen === 'manoj'
  const anyBottomOpen = devOpen || hrOpen

  return (
    <>
      <style>{`
        .lv-fade { opacity:0; transform:translateY(18px); transition:opacity .5s ease,transform .5s ease; }
        .lv-fade.lv-visible { opacity:1; transform:none; }
        .lv-fade.lv-visible > *:nth-child(1){transition-delay:.05s}
        .lv-fade.lv-visible > *:nth-child(2){transition-delay:.12s}
        .lv-fade.lv-visible > *:nth-child(3){transition-delay:.19s}
        .lv-fade.lv-visible > *:nth-child(4){transition-delay:.26s}
        .lv-fade.lv-visible > *:nth-child(5){transition-delay:.33s}
        .lv-fade.lv-visible > *:nth-child(6){transition-delay:.40s}
        .lv-fade.lv-visible > *:nth-child(7){transition-delay:.47s}
        .lv-fade.lv-visible > * { opacity:1; transform:none; transition:opacity .38s ease,transform .38s ease; }
        .lv-fade > * { opacity:0; transform:translateY(12px); }

        .lv-expand { display:grid; grid-template-rows:0fr; opacity:0; transition:grid-template-rows .45s cubic-bezier(.4,0,.2,1),opacity .3s ease; }
        .lv-expand--open { grid-template-rows:1fr; opacity:1; }
        .lv-expand__inner { overflow:hidden; }

        .lv-card { transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease; }
        .lv-card:hover { transform:translateY(-4px); box-shadow:0 16px 32px -6px rgba(5,150,105,.16); }
        .lv-card--active { animation:lv-glow 2.4s ease-in-out infinite alternate; }
        @keyframes lv-glow { from{box-shadow:0 0 0 0 rgba(5,150,105,.10)} to{box-shadow:0 0 24px 3px rgba(5,150,105,.20)} }

        .lv-ring { background:conic-gradient(rgba(5,150,105,.55) 0%,rgba(5,150,105,.05) 40%,rgba(5,150,105,.55) 70%,rgba(5,150,105,.05) 100%); animation:lv-spin 8s linear infinite; }
        @keyframes lv-spin { to{transform:rotate(360deg)} }

        .lv-pulse { animation:lv-pls 2.2s ease-in-out infinite; }
        @keyframes lv-pls { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.9;transform:scale(1.6)} }

        .lv-dash-line { background:repeating-linear-gradient(to bottom,rgba(5,150,105,.45) 0,rgba(5,150,105,.45) 6px,transparent 6px,transparent 12px); }

        .lv-shimmer { height:1px; background:linear-gradient(90deg,transparent,rgba(5,150,105,.35) 30%,rgba(5,150,105,.7) 50%,rgba(5,150,105,.35) 70%,transparent); background-size:200% 100%; animation:lv-sh 3s linear infinite; }
        @keyframes lv-sh { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

        .lv-dot { width:6px;height:6px;border-radius:50%;background:rgb(5,150,105);animation:lv-pls 1.8s ease-in-out infinite; }

        .lv-section-in { animation:lv-sec .4s ease both; }
        @keyframes lv-sec { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:none} }
      `}</style>

      <section className="relative w-full min-h-screen bg-slate-50 px-4 py-16 sm:px-6 lg:px-10 overflow-hidden font-sans">

        <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage:'radial-gradient(rgba(5,150,105,1) 1px,transparent 1px)', backgroundSize:'28px 28px' }} />
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full"
          style={{ background:'radial-gradient(ellipse,rgba(5,150,105,.055) 0%,transparent 70%)' }} />

        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-14 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-4 py-1.5 mb-4">
              <div className="lv-dot" />
              <span className="text-[10px] font-bold tracking-[.18em] uppercase text-emerald-700">
                Organisational Structure
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">
              Leadership{' '}
              <span className="text-emerald-600 relative">
                Team
                <span className="absolute -bottom-1 left-0 right-0 lv-shimmer" />
              </span>
            </h2>
          </div>

          <div ref={containerRef} className="relative">

            {/* L1 — Chairman */}
            <FadeRow className="flex justify-center">
              <div className="w-52">
                <TeamCard member={chairman} size="lg" />
              </div>
            </FadeRow>

            <VStem height={32} />
            <HConnector count={4} maxW="85%" />

            {/* L2 — Directors */}
            <FadeRow className="grid grid-cols-2 gap-4 xl:grid-cols-4">
              {directors.map((d) => (
                <div
                  key={d.id}
                  ref={d.id === 'vinayak' ? vinayakCardRef : d.id === 'manoj' ? manojCardRef : undefined}
                >
                  <TeamCard
                    member={d}
                    expandable={d.expandable}
                    active={(d.id === 'vinayak' && devOpen) || (d.id === 'manoj' && hrOpen)}
                    onClick={
                      d.id === 'vinayak' ? () => toggleDirector('vinayak') :
                      d.id === 'manoj'   ? () => toggleDirector('manoj') :
                      undefined
                    }
                  />
                </div>
              ))}
            </FadeRow>

            {/* Dashed lines to bottom sections */}
            <BottomConnectorLine fromRef={vinayakCardRef} toRef={devSectionRef} visible={devOpen} />
            <BottomConnectorLine fromRef={manojCardRef}   toRef={hrSectionRef}  visible={hrOpen} />

            <VStem height={32} />
            <HConnector count={2} maxW="44%" />

            {/* L3 — Business Heads */}
            <FadeRow className="mx-auto grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
              {businessHeads.map((bh) => (
                <TeamCard
                  key={bh.id}
                  member={bh}
                  expandable={bh.expandable}
                  active={bh.id === 'sanka' && sankaOpen}
                  onClick={bh.expandable ? () => setSankaOpen(v => !v) : undefined}
                />
              ))}
            </FadeRow>

            {/* L4 — Sanka's team */}
            <Expandable open={sankaOpen}>
              <div>
                <VStem height={28} />
                <HConnector count={businessTeam.length} maxW="90%" />
                <FadeRow className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
                  {businessTeam.map((m, i) => (
                    <div key={i}>
                      <TeamCard
                        member={m}
                        size="sm"
                        expandable={!!m.expandable}
                        active={!!m.expandable && financeOpen}
                        onClick={m.expandable ? () => setFinanceOpen(v => !v) : undefined}
                      />
                    </div>
                  ))}
                </FadeRow>

                {/* L5 — Finance team */}
                <Expandable open={financeOpen}>
                  <div>
                    <VStem height={28} />
                    <HConnector count={financeTeam.length} maxW="95%" />
                    <FadeRow className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
                      {financeTeam.map((m, i) => <TeamCard key={i} member={m} size="md" />)}
                    </FadeRow>
                  </div>
                </Expandable>
              </div>
            </Expandable>

            {/* Bottom sections — Dev & HR (mutually exclusive) */}
            {anyBottomOpen && (
              <div className="mt-12">
                <div className="lv-shimmer mb-8" />
              <div className="max-w-4xl mx-auto">

                  {devOpen && (
                    <div
                      ref={devSectionRef}
                      className="lv-section-in rounded-2xl border border-emerald-500/20 bg-white shadow-md p-6"
                    >
                      <div className="flex items-center gap-2 mb-5">
                        <div className="lv-dot" />
                        <span className="text-[10px] font-bold tracking-[.15em] uppercase text-emerald-700">
                          Reporting to Vinayak Bhise
                        </span>
                      </div>
                      <TeamGrid members={devTeam} cols={4} size="md" />
                    </div>
                  )}

                  {hrOpen && (
                    <div
                      ref={hrSectionRef}
                      className="lv-section-in rounded-2xl border border-emerald-500/20 bg-white shadow-md p-6"
                    >
                      <div className="flex items-center gap-2 mb-5">
                        <div className="lv-dot" />
                        <span className="text-[10px] font-bold tracking-[.15em] uppercase text-emerald-700">
                          Reporting to Manoj Kambli
                        </span>
                      </div>
                      <TeamGrid members={hrTeam} cols={4} size="md" />
                    </div>
                  )}

                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  )
}