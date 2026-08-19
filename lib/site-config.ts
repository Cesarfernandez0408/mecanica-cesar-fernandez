export const BUSINESS_NAME = "César Fernández";
export const BUSINESS_FULL_NAME = "César Fernández — Multiservicios y Repuestos";
export const BUSINESS_TAGLINE = "Multiservicios y Repuestos";

// César — contacto principal
export const CESAR_PHONE_DISPLAY = "+51 928 066 573";
export const CESAR_PHONE_INTL = "51928066573";

// Marco — segundo contacto
export const MARCO_PHONE_DISPLAY = "+51 938 650 628";
export const MARCO_PHONE_INTL = "51938650628";

export const LOCATION = {
  city: "Tarapoto",
  region: "San Martín",
  country: "Perú",
  address: "Tarapoto, San Martín, Perú",
  lat: -6.4958487,
  lng: -76.3497356,
};

export const GOOGLE_MAPS_SHARE_URL =
  "https://www.google.com/maps/place/6%C2%B029'45.1%22S+76%C2%B020'59.1%22W/@-6.4958487,-76.3523105,17z";

export const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${LOCATION.lat},${LOCATION.lng}&z=17&output=embed`;

export const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${LOCATION.lat},${LOCATION.lng}`;

export const HOURS = {
  weekday: "Lunes a sábado: 8:00 a.m. – 7:00 p.m. (horario corrido)",
  sunday: "Domingos: solo con cita previa por WhatsApp",
  compact: "Lun-Sáb 8:00 a.m. - 7:00 p.m. | Dom con cita previa",
};

export const NAV_LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#promociones", label: "Promociones" },
  { href: "#precios", label: "Precios" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

/**
 * Construye una URL de wa.me con mensaje pre-rellenado opcional.
 */
export function buildWhatsAppUrl(message?: string, phone: string = CESAR_PHONE_INTL) {
  const base = `https://wa.me/${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
