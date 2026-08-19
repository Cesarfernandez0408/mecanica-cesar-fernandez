import type { SVGProps } from "react";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import {
  BUSINESS_FULL_NAME,
  CESAR_PHONE_DISPLAY,
  CESAR_PHONE_INTL,
  HOURS,
  LOCATION,
  MARCO_PHONE_DISPLAY,
  MARCO_PHONE_INTL,
  NAV_LINKS,
  buildWhatsAppUrl,
} from "@/lib/site-config";

const CONTACTOS = [
  { name: "César Fernández", phoneDisplay: CESAR_PHONE_DISPLAY, phoneIntl: CESAR_PHONE_INTL },
  { name: "Marco", phoneDisplay: MARCO_PHONE_DISPLAY, phoneIntl: MARCO_PHONE_INTL },
];

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "WhatsApp", href: buildWhatsAppUrl(undefined, CESAR_PHONE_INTL), Icon: MessageCircle, external: true },
  { label: "Facebook", href: "#", Icon: FacebookIcon, external: false },
  { label: "Instagram", href: "#", Icon: InstagramIcon, external: false },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-x-hidden border-t border-red-600/30 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Logo imageClassName="h-20 w-auto object-contain" />
            <p className="mt-4 max-w-xs text-sm text-zinc-500">
              Taller de mecánica de motos en Tarapoto con más de 20 años de experiencia.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-colors hover:border-red-600 hover:text-red-600"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-red-600">Explora</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-red-600">Contáctanos</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
              {CONTACTOS.map((contacto) => (
                <li key={contacto.name} className="flex items-center justify-between gap-3">
                  <span>
                    {contacto.name} — {contacto.phoneDisplay}
                  </span>
                  <span className="flex shrink-0 gap-2">
                    <a
                      href={buildWhatsAppUrl(undefined, contacto.phoneIntl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Escribir a ${contacto.name} por WhatsApp`}
                      className="text-red-600 hover:text-white"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden />
                    </a>
                    <a
                      href={`tel:+${contacto.phoneIntl}`}
                      aria-label={`Llamar a ${contacto.name}`}
                      className="text-red-600 hover:text-white"
                    >
                      <Phone className="h-4 w-4" aria-hidden />
                    </a>
                  </span>
                </li>
              ))}
            </ul>

            <h4 className="mt-6 font-heading text-sm uppercase tracking-widest text-red-600">Horarios</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden />
                <span>{HOURS.weekday}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden />
                <span>{HOURS.sunday}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-600" aria-hidden />
                <span>{LOCATION.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-zinc-900 pt-8 text-center text-xs text-zinc-600 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {year} {BUSINESS_FULL_NAME}. Todos los derechos reservados.
          </p>
          {/* Créditos del desarrollador aquí */}
        </div>
      </div>
    </footer>
  );
}
