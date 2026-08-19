import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { MenuProvider } from "@/lib/menu-context";
import { CESAR_PHONE_INTL, LOCATION, MARCO_PHONE_INTL } from "@/lib/site-config";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-heading-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body-inter",
  subsets: ["latin"],
});

const SITE_DESCRIPTION =
  "Taller de mecánica de motos en Tarapoto con más de 20 años de experiencia. Mantenimiento, reparación de motor, sistema eléctrico, pintura y repuestos originales. Recogemos tu moto gratis. WhatsApp +51 928 066 573.";

export const metadata: Metadata = {
  metadataBase: new URL("https://taller-cesarfernandez.vercel.app"),
  title: "César Fernández — Taller de Motos en Tarapoto | 20 Años de Experiencia",
  description: SITE_DESCRIPTION,
  keywords: [
    "mecánica de motos Tarapoto",
    "taller de motos San Martín",
    "reparación motor moto Tarapoto",
    "repuestos moto Perú",
    "mecánico motos selva Perú",
    "César Fernández mecánico",
  ],
  authors: [{ name: "César Fernández" }],
  openGraph: {
    title: "César Fernández — Taller de Motos en Tarapoto | 20 Años de Experiencia",
    description: SITE_DESCRIPTION,
    url: "https://taller-cesarfernandez.vercel.app",
    siteName: "César Fernández — Multiservicios y Repuestos",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "César Fernández — Taller de Motos en Tarapoto | 20 Años de Experiencia",
    description: SITE_DESCRIPTION,
  },
};

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "César Fernández — Multiservicios y Repuestos",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: LOCATION.city,
    addressRegion: LOCATION.region,
    addressCountry: "PE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: LOCATION.lat,
    longitude: LOCATION.lng,
  },
  telephone: [`+${CESAR_PHONE_INTL}`, `+${MARCO_PHONE_INTL}`],
  openingHours: "Mo-Sa 08:00-19:00",
  priceRange: "S/30 - S/140",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${oswald.variable} ${inter.variable}`}
    >
      <body className="overflow-x-hidden bg-[#0a0a0a] font-body text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
        <MenuProvider>
          {children}
          <FloatingWhatsApp />
        </MenuProvider>
      </body>
    </html>
  );
}
