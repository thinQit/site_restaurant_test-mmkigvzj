'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  source: string
}

interface TestimonialCarouselProps {
  items?: Testimonial[]
}

export default function TestimonialCarousel({ items = [] }: Partial<TestimonialCarouselProps>) {
  const fallback = [
    { quote: 'The truffle pasta was unforgettable. Elegant atmosphere and impeccable service.', name: 'Amelia R.', source: 'Google Reviews' },
    { quote: 'A true gem in Napa. The wine pairings were perfect with every course.', name: 'Daniel K.', source: 'Yelp' },
    { quote: 'Romantic, warm, and absolutely delicious. We will be back soon!', name: 'Priya M.', source: 'OpenTable' },
  ]
  const data = items.length ? items : fallback
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((v) => (v + 1) % data.length), 4500)
    return () => clearInterval(t)
  }, [data.length])

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="hidden md:block">
          <Card className="rounded-xl border p-8 text-center">
            <div className="mb-4 flex justify-center gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-[#DDA15E] text-[#DDA15E]" />)}</div>
            <p className="font-serif text-2xl text-[#722F37]">“{data[index].quote}”</p>
            <p className="mt-4 text-sm">{data[index].name}</p>
            <Badge className="mt-2 bg-[#FEFAE0] text-[#606C38]">{data[index].source}</Badge>
          </Card>
        </div>

        <div className="grid gap-4 md:hidden">
          {data.map((t) => (
            <Card key={t.name} className="p-5">
              <p className="text-sm">“{t.quote}”</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-medium">{t.name}</span>
                <Badge variant="secondary">{t.source}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
