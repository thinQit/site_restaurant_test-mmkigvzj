'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryGridProps {
  images?: string[]
}

export default function GalleryGrid({ images = ['https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg', 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg'] }: Partial<GalleryGridProps>) {
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active === null) return
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((v) => (v === null ? 0 : (v + 1) % images.length))
      if (e.key === 'ArrowLeft') setActive((v) => (v === null ? 0 : (v - 1 + images.length) % images.length))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, images.length])

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 md:grid-cols-4 md:px-6">
        {images.map((src, i) => (
          <button key={src + i} onClick={() => setActive(i)} className="relative overflow-hidden rounded-xl">
            <Image src={src} alt={'Gallery image ' + (i + 1)} width={500} height={380} className="h-full w-full object-cover transition-transform hover:scale-105" />
          </button>
        ))}
      </div>

      {active !== null ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4">
          <button className="absolute right-4 top-4 rounded-full border border-white/30 p-2 text-white" onClick={() => setActive(null)}><X className="h-5 w-5" /></button>
          <button className="absolute left-4 rounded-full border border-white/30 p-2 text-white" onClick={() => setActive((active - 1 + images.length) % images.length)}><ChevronLeft className="h-5 w-5" /></button>
          <div className="relative max-h-[80vh] w-full max-w-5xl">
            <Image src={images[active]} alt="Lightbox image" width={1400} height={900} className="h-auto max-h-[80vh] w-full rounded-lg object-contain" />
          </div>
          <button className="absolute right-4 rounded-full border border-white/30 p-2 text-white" onClick={() => setActive((active + 1) % images.length)}><ChevronRight className="h-5 w-5" /></button>
        </div>
      ) : null}
    </section>
  )
}
