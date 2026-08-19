import type { Metadata, Viewport } from "next";
import { Oswald, Inter } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://cesarfernandez-motos.pe"),
  title: "César Fernández — Mecánica de Motos en Tingo María | Multiservicios y Repuestos",
  description:
    "Taller de mecánica de motos en Tingo María. Mantenimiento, reparación de motor, sistema eléctrico, pintura y repuestos. Recogemos tu moto gratis. WhatsApp +51 928 066 573.",
  keywords: [
    "mecánica motos Tingo María",
    "taller motos Huánuco",
    "repuestos moto Perú",
    "mecánico de motos Tingo María",
    "mantenimiento de motos",
    "reparación de motor moto",
    "taller de motos Huánuco",
    "repuestos motos Tingo María",
    "lavadero de motos Tingo María",
  ],
  authors: [{ name: "César Fernández" }],
  openGraph: {
    title: "César Fernández — Mecánica de Motos en Tingo María",
    description:
      "Taller de mecánica de motos en Tingo María. Mantenimiento, reparación de motor, sistema eléctrico, pintura y repuestos. Recogemos tu moto gratis.",
    url: "/",
    siteName: "César Fernández — Multiservicios y Repuestos",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "César Fernández — Multiservicios y Repuestos",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "César Fernández — Mecánica de Motos en Tingo María",
    description:
      "Taller de mecánica de motos en Tingo María. Mantenimiento, reparación de motor, sistema eléctrico, pintura y repuestos. Recogemos tu moto gratis.",
    images: ["/og-image.jpg"],
  },
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
      <body className="bg-[#0a0a0a] font-body text-white antialiased">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
