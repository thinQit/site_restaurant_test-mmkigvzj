"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Flame, Leaf, UtensilsCrossed, Wine, Clock3, Heart, Users, Wallet, Calendar, Sparkles, ShieldCheck } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Heart, Users, Wallet, Calendar, Sparkles, ShieldCheck, 
  ChefHat,
  Flame,
  Leaf,
  UtensilsCrossed,
  Wine,
  Clock3,
};

export default function FeaturesGrid({
  badge = 'Why Guests Love Us',
  headline = 'Crafted for Flavor, Designed for Comfort',
  subheadline = 'From fire-grilled mains to curated wine pairings, every detail is built around an exceptional dining experience.',
  features = [
    { icon: 'Flame', title: 'Wood-Fired Signature Dishes', description: 'Slow-roasted meats and hearth-baked vegetables with deep, smoky flavor.' },
    { icon: 'Leaf', title: 'Seasonal Farm Ingredients', description: 'We source fresh produce from local growers to celebrate each season.' },
    { icon: 'Wine', title: 'Sommelier Pairings', description: 'Thoughtful wine recommendations to elevate every course.' },
  ],
}: Partial<FeaturesGridProps>) {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || ChefHat;
            return (
              <Card key={index} className="border bg-background shadow-md transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {React.createElement(Icon, { className: 'h-6 w-6' })}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
