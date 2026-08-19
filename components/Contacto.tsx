"use client";

import { motion } from "framer-motion";
import { Clock, MessageCircle, Phone } from "lucide-react";
import { fadeUp, fadeUpContainer } from "@/lib/motion";
import {
  CESAR_PHONE_DISPLAY,
  CESAR_PHONE_INTL,
  HOURS,
  MARCO_PHONE_DISPLAY,
  MARCO_PHONE_INTL,
  buildWhatsAppUrl,
} from "@/lib/site-config";

const CONTACTOS = [
  { name: "César Fernández", phoneDisplay: CESAR_PHONE_DISPLAY, phoneIntl: CESAR_PHONE_INTL },
  { name: "Marco", phoneDisplay: MARCO_PHONE_DISPLAY, phoneIntl: MARCO_PHONE_INTL },
];

export default function Contacto() {
  return (
    <section id="contacto" className="overflow-x-hidden bg-red-600 py-24">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-8 lg:px-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="font-heading text-5xl uppercase leading-[0.95] tracking-tight text-black md:text-7xl"
        >
          ¿Tu moto necesita atención?
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mx-auto mt-5 max-w-xl text-lg font-medium text-black/80"
        >
          Escríbenos ahora y te respondemos al toque.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-10"
        >
          <a
            href={buildWhatsAppUrl("Hola, mi moto necesita atención. Quiero más información.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-md bg-[#0a0a0a] px-8 py-5 font-heading text-2xl uppercase tracking-wide text-white shadow-xl transition-transform hover:scale-105 md:text-3xl"
          >
            <MessageCircle className="h-8 w-8 text-red-600" aria-hidden />
            {CESAR_PHONE_DISPLAY}
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpContainer}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {CONTACTOS.map((contacto) => (
            <motion.div
              key={contacto.name}
              variants={fadeUp}
              className="flex flex-col items-center gap-3 rounded-lg border-2 border-black/10 bg-[#0a0a0a] p-8"
            >
              <h3 className="font-heading text-2xl uppercase tracking-wide text-white">
                {contacto.name}
              </h3>
              <p className="text-zinc-400">{contacto.phoneDisplay}</p>
              <div className="mt-2 flex gap-3">
                <a
                  href={buildWhatsAppUrl("Hola, quiero contactar por un servicio para mi moto.", contacto.phoneIntl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Escribir a ${contacto.name} por WhatsApp`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white transition-colors hover:bg-red-700"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                </a>
                <a
                  href={`tel:+${contacto.phoneIntl}`}
                  aria-label={`Llamar a ${contacto.name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white hover:text-black"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-12 flex flex-col items-center gap-2 text-black/80"
        >
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" aria-hidden />
            <span className="text-sm font-medium">{HOURS.weekday}</span>
          </div>
          <span className="text-sm font-medium">{HOURS.sunday}</span>
        </motion.div>
      </div>
    </section>
  );
}
