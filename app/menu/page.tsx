export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import MenuTabs from "@/components/MenuTabs"
import CTASection from "@/components/CTASection"

export default function MenuPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg"
        headline="Dinner menu"
        subheadline="Seasonal Italian classics—handmade pasta, wood-fired pizza, and market-driven specials."
        primaryCta={{ label: "Reserve a Table", href: "/reservations" }}
        secondaryCta={{ label: "View Wine List", href: "#wine" }}
        overlayOpacity="opacity-50"
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <MenuTabs />
        </div>
      </section>
      <CTASection />
    </main>
  )
}
