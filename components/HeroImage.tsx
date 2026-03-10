'use client';

import { Button } from '@/components/ui/button';

interface HeroImageProps {
  imageUrl: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  overlayOpacity?: string;
}

export default function HeroImage({
  imageUrl = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  headline = 'A Warm Table, A Memorable Evening',
  subheadline = 'Seasonal ingredients, wood-fired flavor, and heartfelt hospitality in every dish.',
  primaryCta = { label: 'Reserve a Table', href: '#reservation' },
  secondaryCta = { label: 'View Menu', href: '#menu' },
  overlayOpacity = 'bg-black/50',
}: Partial<HeroImageProps>) {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center md:min-h-[700px]">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(' + imageUrl + ')' }} />
      <div className={'absolute inset-0 ' + overlayOpacity} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-500/10 via-red-500/5 to-orange-500/15" />
      <div className="relative z-10 container mx-auto max-w-7xl px-4 text-center text-white">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">{headline}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">{subheadline}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-amber-500 px-8 py-6 text-lg text-black hover:bg-amber-400" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="border-amber-300 px-8 py-6 text-lg text-amber-100 hover:bg-amber-500/10"
              asChild
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
