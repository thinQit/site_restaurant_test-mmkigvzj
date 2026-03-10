export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import ReservationForm from "@/components/ReservationForm"
import CTASection from "@/components/CTASection"
import FeaturesGrid from "@/components/FeaturesGrid"

export default function ReservationsPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg"
        headline="Reserve your table at Bella Vista"
        subheadline="Secure your preferred time, add a note for celebrations, and we’ll take it from there."
        primaryCta={{ label: "Book Now", href: "#reservation-form" }}
        secondaryCta={{ label: "Call Us", href: "tel:+14155550198" }}
      />
      <section id="reservation-form" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ReservationForm />
        </div>
      </section>
      <section id="private-dining" className="bg-[#F3EBD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <FeaturesGrid
            badge="Private Dining"
            headline="Private dining & group events"
            subheadline="Host birthdays, rehearsal dinners, and team celebrations with family-style Italian hospitality."
            features={[
              { icon: "Users", title: "Capacity", description: "12–28 guests in our semi-private back room." },
              { icon: "Wallet", title: "Food & beverage minimum", description: "$1,200 Sun–Thu • $1,800 Fri–Sat (before tax and gratuity)." },
              { icon: "Wine", title: "Family-style options", description: "Antipasti boards, house-made pasta, mains, seasonal sides, and dolci." },
            ]}
          />
        </div>
      </section>
      <CTASection />
    </main>
  )
}
