"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface DishCardProps {
  name?: string
  description?: string
  price?: string
  tags?: string[]
  imageSrc?: string
}

export default function DishCard({
  name = 'Dish Name',
  description = 'A delicious description of this Italian specialty.',
  price = '$0',
  tags = [],
  imageSrc = '',
}: Partial<DishCardProps>) {
  return (
    <Card className="overflow-hidden rounded-xl border bg-card">
      {imageSrc ? (
        <div className="relative h-44 w-full">
          <Image src={imageSrc} alt={name} fill className="object-cover" unoptimized />
        </div>
      ) : null}
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl text-[#722F37]">{name}</h3>
          <span className="font-semibold text-[#606C38]">{price}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        {tags.length ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="border border-[#DDA15E]/40 bg-[#FEFAE0] text-[#722F37]">
                {tag}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>
    </Card>
  )
}
