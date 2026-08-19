import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "@/components/Logo";
import {
  BUSINESS_FULL_NAME,
  BUSINESS_TAGLINE,
  CESAR_PHONE_DISPLAY,
  CESAR_PHONE_INTL,
  HOURS,
  LOCATION,
  MARCO_PHONE_DISPLAY,
  MARCO_PHONE_INTL,
  buildWhatsAppUrl,
} from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-red-600/30 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-zinc-500">{BUSINESS_TAGLINE}</p>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-red-600">Contacto</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 shrink-0 text-red-600" aria-hidden />
                <a
                  href={buildWhatsAppUrl(undefined, CESAR_PHONE_INTL)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  César Fernández — {CESAR_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-red-600" aria-hidden />
                <a href={`tel:+${CESAR_PHONE_INTL}`} className="hover:text-white">
                  Llamar a César
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 shrink-0 text-red-600" aria-hidden />
                <a
                  href={buildWhatsAppUrl(undefined, MARCO_PHONE_INTL)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Marco — {MARCO_PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-red-600">
              Horarios y ubicación
            </h4>
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

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-zinc-900 pt-8 text-center text-xs text-zinc-600">
          <p>
            © {year} {BUSINESS_FULL_NAME}. {LOCATION.city}, {LOCATION.country}.
          </p>
          <p>Sitio web desarrollado con Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
