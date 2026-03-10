"use client";

import Link from 'next/link'
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

interface FooterProps {
  name?: string
  address?: string
  phone?: string
  email?: string
}

export default function Footer({
  name = 'Bella Vista Italian Kitchen',
  address = '245 Olive Grove Ave, Napa, CA 94558',
  phone = '(707) 555-0142',
  email = 'hello@bellavistaitalian.com',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t bg-[#FEFAE0]">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-xl text-[#722F37]">{name}</h3>
            <p className="mt-3 text-sm text-muted-foreground">Rustic Italian flavors, handmade pasta, and warm hospitality.</p>
          </div>

          <div className="space-y-2 text-sm">
            <h4 className="font-semibold">Visit</h4>
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" />{address}</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" />{phone}</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" />{email}</p>
          </div>

          <div className="space-y-2 text-sm">
            <h4 className="font-semibold">Hours</h4>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4" />Mon–Thu: 4:30pm – 9:30pm</p>
            <p>Fri–Sat: 4:30pm – 10:30pm</p>
            <p>Sun: 4:00pm – 9:00pm</p>
          </div>

          <div>
            <h4 className="font-semibold">Explore</h4>
            <div className="mt-2 grid gap-2 text-sm">
              <Link href="#menu" className="hover:text-[#722F37]">Menu</Link>
              <Link href="#reservations" className="hover:text-[#722F37]">Reservations</Link>
              <Link href="#gallery" className="hover:text-[#722F37]">Gallery</Link>
              <Link href="#contact" className="hover:text-[#722F37]">Contact</Link>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="rounded-full border p-2 hover:bg-muted"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="rounded-full border p-2 hover:bg-muted"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms</Link>
            <Link href="#" className="hover:text-foreground">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
