"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "20+", label: "Años de experiencia" },
  { value: "500+", label: "Motos reparadas" },
  { value: "100%", label: "Garantía en todos los trabajos" },
];

export default function SobreNosotros() {
  return (
    <section id="sobre-nosotros" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mx-auto w-full max-w-sm md:mx-0 md:w-1/2 md:max-w-none"
          >
            <div className="group relative aspect-[4/5] overflow-hidden rounded-lg border-2 border-red-600">
              <Image
                src="/cesar-reparando-moto.jpeg"
                alt="César Fernández, mecánico de motos en Tarapoto"
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="md:w-1/2"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
              Sobre el taller
            </span>
            <h2 className="mt-3 font-heading text-3xl uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              20 años de experiencia a tu servicio
            </h2>

            <p className="mt-6 text-zinc-300">
              Soy César Fernández, mecánico de motos con más de 20 años de experiencia en el rubro. He
              trabajado con todo tipo de motos, desde lineales básicas hasta modelos modernos con
              inyección de combustible, y hoy pongo toda esa experiencia al servicio de los motociclistas
              de Tarapoto.
            </p>
            <p className="mt-4 text-zinc-300">
              En mi taller no solo reparamos motos, construimos confianza. Cada cliente es tratado con
              honestidad, cada trabajo se entrega con garantía y cada moto sale como si fuera nuestra.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-zinc-900 p-3 text-center sm:p-4">
                  <p className="text-4xl font-bold text-red-600 md:text-5xl">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase leading-snug text-zinc-400 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <WhatsAppButton
              message="Hola César, vi tu página y quiero conocer más sobre tu taller"
              className="mt-8 rounded-md px-8 py-4 text-base"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
