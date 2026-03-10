"use client";

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Cta {
  label: string
  href: string
}

interface SectionHeaderProps {
  eyebrow?: string
  title?: string
  subtitle?: string
  primaryCta?: Cta
  secondaryCta?: Cta
  align?: 'left' | 'center'
}

export default function SectionHeader({
  eyebrow = '',
  title = 'A Taste of Italy',
  subtitle = 'Seasonal ingredients, classic recipes, and modern elegance in every dish.',
  primaryCta = { label: '', href: '#' },
  secondaryCta = { label: '', href: '#' },
  align = 'center',
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('mx-auto max-w-3xl space-y-4', align === 'center' ? 'text-center' : 'text-left')}>
      {eyebrow ? <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#606C38]">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl text-[#722F37] md:text-5xl">{title}</h2>
      <p className="text-base text-muted-foreground md:text-lg">{subtitle}</p>
      {(primaryCta?.label || secondaryCta?.label) ? (
        <div className={cn('flex flex-wrap gap-3 pt-2', align === 'center' ? 'justify-center' : 'justify-start')}>
          {primaryCta?.label ? <Button asChild className="bg-[#DDA15E] text-black hover:bg-[#c88b4a]"><a href={primaryCta.href}>{primaryCta.label}</a></Button> : null}
          {secondaryCta?.label ? <Button asChild variant="outline"><a href={secondaryCta.href}>{secondaryCta.label}</a></Button> : null}
        </div>
      ) : null}
    </div>
  )
}
