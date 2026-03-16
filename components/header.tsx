'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <div className="flex h-14 w-36 items-center justify-center overflow-hidden">
            <Image
              src="/logo%20(3).png"
              alt="iSmart ERP logo"
              width={144}
              height={56}
              className="h-14 w-auto object-contain"
            />
          </div>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Help
          </button>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Settings
          </button>
          <div className="h-8 w-8 rounded-full bg-primary"></div>
        </div>
      </div>
    </header>
  )
}
