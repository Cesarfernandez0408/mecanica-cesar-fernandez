"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import {
  CESAR_PHONE_DISPLAY,
  CESAR_PHONE_INTL,
  GOOGLE_MAPS_DIRECTIONS_URL,
  GOOGLE_MAPS_EMBED_URL,
  HOURS,
  LOCATION,
} from "@/lib/site-config";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <h2 className="font-heading text-4xl uppercase tracking-tight text-red-600 md:text-5xl">
            Ubicación
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="min-h-[320px] overflow-hidden rounded-lg border border-zinc-800"
          >
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              title="Ubicación de César Fernández — Multiservicios y Repuestos"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex flex-col justify-center gap-6 rounded-lg border border-zinc-800 bg-zinc-900 p-8"
          >
            <h3 className="font-heading text-3xl uppercase tracking-wide text-white">Visítanos</h3>

            <div className="flex items-start gap-3 text-zinc-300">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden />
              <span>{LOCATION.address}</span>
            </div>

            <div className="flex items-start gap-3 text-zinc-300">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden />
              <div className="flex flex-col gap-1">
                <span>{HOURS.weekday}</span>
                <span className="text-sm text-zinc-500">{HOURS.sunday}</span>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-700"
              >
                <Navigation className="h-4 w-4" aria-hidden />
                Cómo llegar
              </a>
              <a
                href={`tel:+${CESAR_PHONE_INTL}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Llamar ahora
              </a>
            </div>
            <p className="text-xs text-zinc-500">{CESAR_PHONE_DISPLAY}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
