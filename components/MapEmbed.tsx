"use client";

interface MapEmbedProps {
  title?: string
  embedUrl?: string
  fallbackUrl?: string
}

export default function MapEmbed({
  title = 'Bella Vista Italian Kitchen Location',
  embedUrl = 'https://www.google.com/maps?q=245+Olive+Grove+Ave+Napa+CA+94558&output=embed',
  fallbackUrl = 'https://maps.google.com/?q=245+Olive+Grove+Ave+Napa+CA+94558',
}: Partial<MapEmbedProps>) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="relative w-full pb-[56.25%]">
        <iframe title={title} src={embedUrl} className="absolute inset-0 h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className="p-3 text-sm">
        <a href={fallbackUrl} target="_blank" rel="noreferrer" className="text-[#606C38] underline underline-offset-4">
          Open in Google Maps
        </a>
      </div>
    </div>
  )
}
