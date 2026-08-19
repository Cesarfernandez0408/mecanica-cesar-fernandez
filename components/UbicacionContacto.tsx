"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  CESAR_PHONE_DISPLAY,
  CESAR_PHONE_INTL,
  GOOGLE_MAPS_DIRECTIONS_URL,
  GOOGLE_MAPS_EMBED_URL,
  HOURS,
  LOCATION,
  MARCO_PHONE_DISPLAY,
  MARCO_PHONE_INTL,
  buildWhatsAppUrl,
} from "@/lib/site-config";

const CONTACTOS = [
  { name: "César Fernández", phoneDisplay: CESAR_PHONE_DISPLAY, phoneIntl: CESAR_PHONE_INTL },
  { name: "Marco", phoneDisplay: MARCO_PHONE_DISPLAY, phoneIntl: MARCO_PHONE_INTL },
];

export default function UbicacionContacto() {
  return (
    <section id="contacto" className="overflow-x-hidden bg-black py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-4xl uppercase tracking-tight text-red-600 md:text-5xl">
              Visítanos
            </h2>

            <div className="mt-6 h-[350px] w-full overflow-hidden rounded-lg border border-zinc-800">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                title="Ubicación de César Fernández — Multiservicios y Repuestos"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin className="h-4 w-4 shrink-0 text-red-600" aria-hidden />
                <span className="text-sm">{LOCATION.address}</span>
              </div>
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-700"
              >
                <Navigation className="h-4 w-4" aria-hidden />
                Cómo llegar
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-4xl uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
              ¿Tu moto necesita atención?
            </h2>
            <p className="mt-3 text-zinc-400">Escríbenos ahora y te respondemos al toque.</p>

            <WhatsAppButton
              message="Hola, mi moto necesita atención. Quiero más información."
              showIcon={false}
              className="mt-6 rounded-md px-6 py-4 font-heading text-xl uppercase tracking-wide transition-transform hover:scale-105 sm:text-2xl"
            >
              <MessageCircle className="h-6 w-6 shrink-0" aria-hidden />
              {CESAR_PHONE_DISPLAY}
            </WhatsAppButton>

            <div className="mt-8 flex flex-col gap-3">
              {CONTACTOS.map((contacto) => (
                <div
                  key={contacto.name}
                  className="flex items-center justify-between gap-3 rounded-lg bg-zinc-900 p-4"
                >
                  <div>
                    <p className="font-heading text-sm uppercase tracking-wide text-white">
                      {contacto.name}
                    </p>
                    <p className="text-xs text-zinc-400">{contacto.phoneDisplay}</p>
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <a
                      href={buildWhatsAppUrl(
                        "Hola, quiero contactar por un servicio para mi moto.",
                        contacto.phoneIntl
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Escribir a ${contacto.name} por WhatsApp`}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white transition-colors hover:bg-red-700"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden />
                    </a>
                    <a
                      href={`tel:+${contacto.phoneIntl}`}
                      aria-label={`Llamar a ${contacto.name}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white hover:text-black"
                    >
                      <Phone className="h-4 w-4" aria-hidden />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-zinc-400">
              <Clock className="h-4 w-4 shrink-0 text-red-600" aria-hidden />
              <span>{HOURS.compact}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
