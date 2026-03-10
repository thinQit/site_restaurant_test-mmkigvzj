export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import FeaturesGrid from "@/components/FeaturesGrid"
import CTASection from "@/components/CTASection"

export default function AboutPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg"
        headline="Our story: Italian tradition, California seasonality"
        subheadline="Bella Vista Italian Kitchen is a neighborhood restaurant built around handmade pasta, wood-fired cooking, and hospitality that feels personal."
        primaryCta={{ label: "Reserve", href: "/reservations" }}
        secondaryCta={{ label: "View Menu", href: "/menu" }}
      />
      <section id="story" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <FeaturesGrid
            badge="From Lucca to North Beach"
            headline="A restaurant rooted in family recipes and refined by years of craft"
            subheadline="Since 2016, we’ve grown from a neighborhood favorite to a destination for handmade pasta and wood-fired cooking."
            features={[
              { icon: "Calendar", title: "2016 — Bella Vista opens", description: "A small dining room, a wood-fired oven, and a menu focused on pasta and pizza." },
              { icon: "Sparkles", title: "2019 — Seasonal expansion", description: "Market-driven antipasti and seafood secondi become nightly staples." },
              { icon: "Flame", title: "2023 — Chef’s counter launches", description: "A front-row seat to the oven and pasta station—limited and beloved." },
            ]}
          />
        </div>
      </section>
      <section id="team" className="bg-[#F3EBD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <FeaturesGrid
            badge="Meet the Team"
            headline="A small crew with big heart"
            subheadline="Focused on craft, consistency, and warm hospitality every service."
            features={[
              { icon: "ChefHat", title: "Lucia Romano — Executive Chef", description: "Tuscan-born, Florence-trained, known for bright sauces and delicate pasta." },
              { icon: "GlassWater", title: "Marco De Santis — General Manager", description: "Hospitality-first leader and trusted guide to Italian wine pairings." },
              { icon: "Cake", title: "Elena Rossi — Pastry Chef", description: "Crafts classic dolci with seasonal fruit and rotating gelato." },
            ]}
          />
        </div>
      </section>
      <CTASection />
    </main>
  )
}
