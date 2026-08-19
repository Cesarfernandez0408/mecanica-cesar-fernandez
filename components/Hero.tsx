"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <Image
        src="https://images.unsplash.com/photo-1558981806-ec527fa84c39"
        alt="Moto lista para mantenimiento en el taller"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0a0a0a]/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-600 bg-red-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-red-500 md:text-sm"
        >
          <Wrench className="h-4 w-4" aria-hidden />
          Diagnóstico virtual gratis
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-6xl uppercase leading-[0.95] tracking-tight text-white md:text-8xl"
        >
          Tu moto en las
          <br />
          <span className="text-red-600">mejores manos</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-zinc-300 md:text-xl"
        >
          Multiservicios y repuestos en Tingo María. Mecánica profesional para tu moto lineal o de inyección.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <WhatsAppButton
            message="Hola, quiero contactar por un servicio para mi moto."
            className="rounded-md px-8 py-4 text-base"
          />
          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-md border-2 border-white px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
          >
            Ver servicios
          </a>
        </motion.div>
      </div>
    </section>
  );
}
