export const dynamic = 'force-dynamic';

import Hero from "@/components/Hero"
import SectionHeader from "@/components/SectionHeader"
import DishCard from "@/components/DishCard"
import MenuTabs from "@/components/MenuTabs"
import CTASection from "@/components/CTASection"
import FeaturesGrid from "@/components/FeaturesGrid"
import GalleryGrid from "@/components/GalleryGrid"
import TestimonialCarousel from "@/components/TestimonialCarousel"
import MapEmbed from "@/components/MapEmbed"
import InfoChips from "@/components/InfoChips"
import ScrollReveal from "@/components/ScrollReveal"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <DishCard />
            <DishCard />
            <DishCard />
            <DishCard />
          </div>
        </div>
      </section>
      <section className="bg-[#F3EBD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <MenuTabs />
        </div>
      </section>
      <CTASection />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <FeaturesGrid
              badge="Our Values"
              headline="A North Beach kitchen with a Tuscan soul"
              subheadline="Classic Italian technique meets California seasonality with warmth and care."
              features={[
                { icon: "Utensils", title: "Handmade daily", description: "Pasta rolled every morning and focaccia baked for evening service." },
                { icon: "Leaf", title: "Seasonal sourcing", description: "Bay Area produce and daily seafood deliveries shape our menu." },
                { icon: "Heart", title: "Warm hospitality", description: "Attentive service, unhurried pacing, and a welcoming dining room." },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>
      <section className="bg-[#F3EBD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <GalleryGrid />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <TestimonialCarousel />
        </div>
      </section>
      <section className="bg-[#F3EBD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader />
          <InfoChips />
          <div className="mt-8">
            <MapEmbed />
          </div>
        </div>
      </section>
    </main>
  )
}
