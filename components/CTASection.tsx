"use client";

import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTASection({
  title = 'Ready for an unforgettable Italian evening?',
  subtitle = 'Book your table now or explore our seasonal menu crafted by Chef Lorenzo.',
  primaryLabel = 'Reserve Now',
  primaryHref = '#reservations',
  secondaryLabel = 'See Menu',
  secondaryHref = '#menu',
}: Partial<CTASectionProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-[#722F37] via-[#8a3d46] to-[#DDA15E] p-8 text-white md:p-12">
          <h3 className="font-serif text-3xl md:text-4xl">{title}</h3>
          <p className="mt-3 max-w-2xl text-white/90">{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-white text-[#722F37] hover:bg-white/90"><a href={primaryHref}>{primaryLabel}</a></Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10"><a href={secondaryHref}>{secondaryLabel}</a></Button>
          </div>
        </div>
      </div>
    </section>
  )
}
