"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeUpContainer } from "@/lib/motion";

interface Foto {
  src: string;
  alt: string;
}

const fotos: Foto[] = [
  { src: "/taller-01-mantenimiento.jpeg", alt: "Moto en mantenimiento en el taller César Fernández, Tarapoto" },
  { src: "/taller-02-reparacion.jpeg", alt: "Reparación de motor de moto en el taller de Tarapoto" },
  { src: "/taller-04-lavado.jpeg", alt: "Motos en el patio del taller César Fernández, Tarapoto" },
  { src: "/taller-04-repuestos.jpeg", alt: "Repuestos y herramientas en el taller César Fernández" },
  { src: "/taller-05-trabajo-terminado.jpeg", alt: "Moto lista en el taller César Fernández, Tarapoto" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="overflow-x-hidden bg-[#0a0a0a] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-8 text-center"
        >
          <h2 className="font-heading text-4xl uppercase tracking-tight text-red-600 md:text-5xl">
            Nuestros trabajos
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpContainer}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {fotos.map((foto, index) => (
            <motion.div
              key={foto.src}
              variants={fadeUp}
              className="group relative aspect-[4/3] max-h-80 w-full overflow-hidden rounded-lg border-2 border-transparent transition-colors hover:border-red-600"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority={index < 3}
              />
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-sm text-zinc-400">
          Más trabajos próximamente. ¿Quieres que tu moto aparezca aquí?
        </p>
      </div>
    </section>
  );
}
