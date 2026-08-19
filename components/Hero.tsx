"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#0a0a0a]">
      <Image
        src="/portada.png"
        alt="Taller César Fernández — mecánica de motos en Tarapoto"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#0a0a0a]/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] from-15% via-[#0a0a0a]/85 via-55% to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pb-16 pt-24 text-center md:px-8 md:pb-20 lg:px-16">
        <motion.span
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-600 bg-red-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-red-500 md:text-sm"
        >
          <Wrench className="h-4 w-4" aria-hidden />
          Diagnóstico virtual gratis
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl uppercase leading-[0.95] tracking-tight text-white sm:text-4xl md:text-6xl"
        >
          Tu moto en las <span className="text-red-600">mejores manos</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-zinc-300 md:text-lg"
        >
          Taller especializado en motos lineales y de inyección en Tarapoto. Mantenimiento, reparación y
          repuestos originales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <WhatsAppButton
            message="Hola, quiero contactar por un servicio para mi moto."
            className="rounded-md px-8 py-4 text-base"
          />
          <a
            href="#servicios"
            className="inline-flex min-h-11 items-center justify-center rounded-md border-2 border-white px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
          >
            Ver servicios
          </a>
        </motion.div>
      </div>
    </section>
  );
}
