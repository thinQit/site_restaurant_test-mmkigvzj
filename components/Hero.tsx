"use client";

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import InfoChips from '@/components/InfoChips'

interface HeroProps {
  imageSrc?: string
  title?: string
  subtitle?: string
}

export default function Hero({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  title = 'Italian Dining, Reimagined',
  subtitle = 'Welcome to Bella Vista Italian Kitchen — handmade pasta, wood-fired specialties, and curated wines in an elegant warm setting.',
}: Partial<HeroProps>) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden">
      <Image src={imageSrc} alt="Bella Vista hero" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-[#722F37]/45 to-black/40" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-20 md:px-6">
        <div className="max-w-2xl text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#DDA15E]">Bella Vista Italian Kitchen</p>
          <h1 className="font-serif text-4xl leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 text-base text-white/90 md:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-[#DDA15E] text-black hover:bg-[#c88b4a]"><a href="#reservations">Reserve a Table</a></Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10"><a href="#menu">View Menu</a></Button>
          </div>
          <div className="mt-8">
            <InfoChips chips={['Open Daily', 'Napa, CA', '(707) 555-0142', 'Handmade Pasta']} />
          </div>
        </div>
      </div>
    </section>
  )
}
