"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Wrench,
  Cog,
  Zap,
  Flame,
  Paintbrush,
  Settings,
  Package,
  Droplets,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, fadeUpContainer } from "@/lib/motion";

interface Stat {
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { value: "20+", label: "Años" },
  { value: "500+", label: "Motos reparadas" },
  { value: "100%", label: "Garantía" },
];

interface Servicio {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

const SERVICIOS: Servicio[] = [
  { icon: Wrench, title: "Mantenimiento preventivo", subtitle: "Revisión completa periódica" },
  { icon: Cog, title: "Reparación de motor", subtitle: "Diagnóstico y reparación experta" },
  { icon: Zap, title: "Sistema eléctrico", subtitle: "Instalación y reparación eléctrica" },
  { icon: Flame, title: "Soldadura", subtitle: "Chasis y piezas metálicas" },
  { icon: Paintbrush, title: "Pintura", subtitle: "Acabados profesionales" },
  { icon: Settings, title: "Modificaciones", subtitle: "Personalización y restauración" },
  { icon: Package, title: "Venta de repuestos", subtitle: "Aceites y repuestos originales" },
  { icon: Droplets, title: "Lavadero de motos", subtitle: "Lavado y siliconado" },
];

export default function NosotrosServicios() {
  return (
    <section id="nosotros" className="overflow-x-hidden bg-black py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="md:col-span-2"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
              Sobre el taller
            </span>
            <h2 className="mt-2 font-heading text-3xl uppercase leading-tight tracking-tight text-white sm:text-4xl">
              20 años de experiencia
            </h2>

            <div className="mt-5 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg border-2 border-red-600 sm:max-w-sm">
              <Image
                src="/cesar-reparando-moto.jpeg"
                alt="César Fernández, mecánico de motos en Tarapoto"
                width={400}
                height={500}
                sizes="(max-width: 768px) 90vw, 30vw"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-300">
              Soy César Fernández, mecánico especializado en motos con más de 20 años de experiencia. En
              Tarapoto ofrezco mantenimiento, reparación y venta de repuestos con la garantía de un
              trabajo bien hecho.
            </p>

            <div className="mt-6 grid max-w-sm grid-cols-3 gap-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="rounded-lg bg-zinc-900 p-3 text-center">
                  <p className="text-2xl font-bold text-red-600 sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-[10px] uppercase leading-snug text-zinc-400 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="md:col-span-3"
          >
            <h3 className="font-heading text-2xl uppercase tracking-tight text-red-600 sm:text-3xl">
              Nuestros servicios
            </h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUpContainer}
              className="mt-5 grid grid-cols-2 gap-3"
            >
              {SERVICIOS.map((servicio) => (
                <motion.div
                  key={servicio.title}
                  variants={fadeUp}
                  className="group flex aspect-square flex-col items-center justify-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 p-3 text-center transition-colors hover:border-red-600 sm:p-4"
                >
                  <servicio.icon
                    className="h-8 w-8 text-red-600 transition-transform group-hover:scale-110"
                    aria-hidden
                  />
                  <h4 className="font-heading text-xs uppercase leading-tight tracking-wide text-white sm:text-sm">
                    {servicio.title}
                  </h4>
                  <p className="text-[10px] leading-snug text-zinc-400 sm:text-xs">{servicio.subtitle}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
