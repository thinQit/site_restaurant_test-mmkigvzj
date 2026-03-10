"use client";

import { Badge } from '@/components/ui/badge'

interface InfoChipsProps {
  chips?: string[]
}

export default function InfoChips({ chips = ['Open Daily', 'Napa, CA', '(707) 555-0142'] }: Partial<InfoChipsProps>) {
  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <Badge key={chip} className="rounded-full border border-[#DDA15E]/50 bg-[#FEFAE0]/90 px-3 py-1 text-[#722F37]">
          {chip}
        </Badge>
      ))}
    </div>
  )
}
