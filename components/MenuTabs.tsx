'use client'

import { useState } from 'react'
import DishCard from '@/components/DishCard'
import { Button } from '@/components/ui/button'

interface Dish {
  name: string
  description: string
  price: string
  tags: string[]
  imageSrc?: string
}

interface MenuTabsProps {
  categories?: Record<string, Dish[]>
}

export default function MenuTabs({ categories = {} }: Partial<MenuTabsProps>) {
  const fallback: Record<string, Dish[]> = {
    Antipasti: [{ name: 'Burrata e Pomodoro', description: 'Creamy burrata, heirloom tomatoes, basil oil.', price: '$16', tags: ['Vegetarian'] }],
    Pasta: [{ name: 'Tagliatelle al Ragù', description: 'Slow-braised beef ragù, parmigiano-reggiano.', price: '$26', tags: [] }],
    Secondi: [{ name: 'Branzino al Forno', description: 'Roasted Mediterranean sea bass, lemon caper butter.', price: '$34', tags: ['Gluten-Free'] }],
    Dolce: [{ name: 'Tiramisu Classico', description: 'Mascarpone cream, espresso-soaked ladyfingers.', price: '$12', tags: ['Vegetarian'] }],
  }

  const merged = Object.keys(categories).length ? categories : fallback
  const tabs = Object.keys(merged)
  const [active, setActive] = useState(tabs[0] || 'Antipasti')

  return (
    <section id="menu" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <Button key={tab} variant={active === tab ? 'default' : 'outline'} onClick={() => setActive(tab)} className={active === tab ? 'bg-[#722F37]' : ''}>
              {tab}
            </Button>
          ))}
          <a href="#wine" className="ml-auto text-sm text-[#606C38] underline underline-offset-4">Jump to Wine List</a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(merged[active] || []).map((dish) => (
            <DishCard key={dish.name} {...dish} />
          ))}
        </div>

        <div id="wine" className="mt-14 rounded-xl border bg-muted/40 p-6">
          <h3 className="font-serif text-2xl text-[#722F37]">Wine Highlights</h3>
          <p className="mt-2 text-sm text-muted-foreground">Chianti Classico, Barolo Riserva, and Sonoma-exclusive Italian varietals available by glass and bottle.</p>
        </div>
      </div>
    </section>
  )
}
