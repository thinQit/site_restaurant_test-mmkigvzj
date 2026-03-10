export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import GalleryMasonry from "@/components/GalleryMasonry"
import CTASection from "@/components/CTASection"

export default function GalleryPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg"
        headline="Food photography, warm light, and wood-fired moments"
        subheadline="A look inside Bella Vista—from the oven to the last espresso."
        primaryCta={{ label: "Reserve a Table", href: "/reservations" }}
        secondaryCta={{ label: "View Menu", href: "/menu" }}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <GalleryMasonry
            headline="Gallery"
            subheadline="Tag us @BellaVistaKitchen for a chance to be featured."
            images={[
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg", alt: "Chef slicing fresh basil over pizza", caption: "Fresh basil finish" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg", alt: "Hand-rolled pasta sheets on a floured wooden board", caption: "Pasta craft" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg", alt: "Bar shelf with Italian amari and glassware", caption: "Aperitivo hour" },
              { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg", alt: "Outdoor evening storefront on Columbus Ave", caption: "North Beach evenings" },
            ]}
          />
        </div>
      </section>
      <CTASection />
    </main>
  )
}
