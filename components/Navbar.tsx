'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavbarProps {
  logoText?: string
  reserveHref?: string
}

export default function Navbar({ logoText = 'Bella Vista Italian Kitchen', reserveHref = '#reservations' }: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'Menu', href: '#menu' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b bg-[hsl(var(--background)/0.9)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-serif text-lg font-semibold tracking-wide text-[#722F37]">
          {logoText}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm text-foreground/80 transition-colors hover:text-[#722F37]">
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-[#DDA15E] text-black hover:bg-[#c88b4a]">
            <Link href={reserveHref}>Reserve</Link>
          </Button>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn('border-t bg-background md:hidden', open ? 'block' : 'hidden')}>
        <div className="mx-auto max-w-7xl space-y-2 px-4 py-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-2 w-full bg-[#DDA15E] text-black hover:bg-[#c88b4a]">
            <Link href={reserveHref} onClick={() => setOpen(false)}>
              Reserve
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
