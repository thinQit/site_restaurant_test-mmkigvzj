"use client";

import { Button } from '@/components/ui/button';

interface CTABannerProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTABanner({
  headline = 'Reserve Your Evening at Saffron Hearth',
  description = 'Secure your table for intimate dinners, celebrations, and chef’s seasonal specials.',
  ctaLabel = 'Book a Table',
  ctaHref = '#reservation',
  secondaryCtaLabel = 'Call Us',
  secondaryCtaHref = 'tel:+15551239876',
}: Partial<CTABannerProps>) {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">{headline}</h2>
        {description && <p className="mt-4 text-lg text-primary-foreground/80">{description}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="bg-amber-400 px-8 text-black hover:bg-amber-300" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button size="lg" variant="outline" className="border-primary-foreground px-8 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
