"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Cog,
  Zap,
  Flame,
  SprayCan,
  Settings,
  Package,
  Droplets,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, fadeUpContainer } from "@/lib/motion";

interface Servicio {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SERVICIOS: Servicio[] = [
  {
    icon: Wrench,
    title: "Mantenimiento preventivo",
    description: "Revisión completa para que tu moto rinda al máximo y evites reparaciones costosas.",
  },
  {
    icon: Cog,
    title: "Reparación general de motor",
    description: "Diagnóstico y reparación de motores lineales e inyección con repuestos de calidad.",
  },
  {
    icon: Zap,
    title: "Sistema eléctrico",
    description: "Instalación, reparación y mantenimiento del sistema eléctrico de tu moto.",
  },
  {
    icon: Flame,
    title: "Soldadura",
    description: "Soldadura de chasis, estructuras y piezas metálicas con acabado resistente.",
  },
  {
    icon: SprayCan,
    title: "Pintura",
    description: "Pintura y acabados profesionales para dejar tu moto como nueva.",
  },
  {
    icon: Settings,
    title: "Modificaciones y restauraciones",
    description: "Personalizamos y restauramos tu moto según lo que necesites.",
  },
  {
    icon: Package,
    title: "Venta de repuestos",
    description: "Aceites, sistema eléctrico y repuestos en general para todo tipo de moto.",
  },
  {
    icon: Droplets,
    title: "Lavadero de motos",
    description: "Lavado y siliconado profesional para que tu moto luzca impecable.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="overflow-x-hidden bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <h2 className="font-heading text-4xl uppercase tracking-tight text-red-600 md:text-5xl">
            Servicios para tu moto
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Todo lo que tu moto necesita, en un solo taller.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpContainer}
          className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4"
        >
          {SERVICIOS.map((servicio) => (
            <motion.div
              key={servicio.title}
              variants={fadeUp}
              className="group rounded-lg border border-zinc-800 bg-zinc-900 p-4 transition-colors hover:border-red-600 sm:p-6"
            >
              <servicio.icon
                className="h-7 w-7 text-red-600 transition-transform group-hover:scale-110 sm:h-9 sm:w-9"
                aria-hidden
              />
              <h3 className="mt-4 font-heading text-base uppercase tracking-wide text-white sm:text-xl">
                {servicio.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                {servicio.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
