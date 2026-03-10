export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import ContactForm from "@/components/ContactForm"
import MapEmbed from "@/components/MapEmbed"
import FeaturesGrid from "@/components/FeaturesGrid"
import CTASection from "@/components/CTASection"

export default function ContactPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg"
        headline="Contact & location"
        subheadline="Questions, special requests, or private dining inquiries—send us a message and we’ll respond soon."
        primaryCta={{ label: "Send a Message", href: "#contact-form" }}
        secondaryCta={{ label: "Call (415) 555-0198", href: "tel:+14155550198" }}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <MapEmbed />
        </div>
      </section>
      <section id="contact-form" className="bg-[#F3EBD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ContactForm
            headline="Message us"
            subheadline="For private dining, include your preferred date, guest count, and budget."
            contactInfo={[
              { icon: "MapPin", label: "Address", value: "742 Columbus Ave, San Francisco, CA 94133" },
              { icon: "Phone", label: "Phone", value: "(415) 555-0198" },
              { icon: "Mail", label: "Email", value: "hello@bellavistakitchen.com" },
            ]}
          />
        </div>
      </section>
      <section id="allergies" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <FeaturesGrid
            badge="Guest Care"
            headline="Allergies & accessibility"
            subheadline="We want everyone to dine comfortably—please let us know what you need."
            features={[
              { icon: "ShieldCheck", title: "Allergies", description: "Our kitchen handles gluten, dairy, eggs, nuts, and shellfish; many needs can be accommodated with notice." },
              { icon: "Accessibility", title: "Accessibility", description: "Step-free entry is available via side door. Call ahead and we’ll assist with seating." },
            ]}
          />
        </div>
      </section>
      <CTASection />
    </main>
  )
}
