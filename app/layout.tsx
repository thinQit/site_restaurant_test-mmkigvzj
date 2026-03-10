import "./globals.css"
import { Playfair_Display, Lato } from "next/font/google"
import Navbar from "@/components/Navbar"
import FooterMultiColumn from "@/components/FooterMultiColumn"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} bg-[#FEFAE0] text-[#1B1B1B]`}>
        <Navbar />
        {children}
        <FooterMultiColumn
          brand="Bella Vista Italian Kitchen"
          description="Handmade pasta, wood-fired flavor, and a table waiting for you in the heart of North Beach."
          columns={[
            {
              title: "Visit",
              links: [
                { label: "742 Columbus Ave, San Francisco, CA 94133", href: "https://maps.google.com/?q=742+Columbus+Ave,+San+Francisco,+CA+94133" },
                { label: "(415) 555-0198", href: "tel:+14155550198" },
                { label: "hello@bellavistakitchen.com", href: "mailto:hello@bellavistakitchen.com" },
              ],
            },
            {
              title: "Explore",
              links: [
                { label: "Home", href: "/" },
                { label: "Menu", href: "/menu" },
                { label: "Reservations", href: "/reservations" },
                { label: "Gallery", href: "/gallery" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Hours",
              links: [
                { label: "Mon–Thu: 5:00pm – 10:00pm", href: "/contact#hours" },
                { label: "Fri: 5:00pm – 11:00pm", href: "/contact#hours" },
                { label: "Sat: 4:00pm – 11:00pm", href: "/contact#hours" },
                { label: "Sun: 4:00pm – 10:00pm", href: "/contact#hours" },
              ],
            },
          ]}
          copyright="© 2026 Bella Vista Italian Kitchen. All rights reserved."
        />
      </body>
    </html>
  )
}
