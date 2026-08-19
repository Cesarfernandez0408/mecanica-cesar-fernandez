"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeUpContainer } from "@/lib/motion";

// TODO: Reemplazar con fotos reales del taller — las imágenes van en /public/galeria/foto-1.jpg, foto-2.jpg, etc.
// Mientras tanto usamos placeholders de Unsplash para mantener la estructura lista.
const GALERIA_IMAGENES = [
  {
    src: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc",
    alt: "Moto en reparación en el taller",
  },
  {
    src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890",
    alt: "Mecánico trabajando en el motor de una moto",
  },
  {
    src: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f",
    alt: "Motocicleta lista tras el mantenimiento",
  },
  {
    src: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907",
    alt: "Herramientas de taller mecánico",
  },
  {
    src: "https://images.unsplash.com/photo-1580310614729-ccd69652491d",
    alt: "Detalle de motor de motocicleta",
  },
  {
    src: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f",
    alt: "Motocicleta estacionada en taller",
  },
  {
    src: "https://images.unsplash.com/photo-1609630875171-b1321377ee65",
    alt: "Repuestos y piezas de motocicleta",
  },
  {
    src: "https://images.unsplash.com/photo-1622185135505-2d795003994a",
    alt: "Motocicleta recién lavada y lista para entrega",
  },
];

export default function Galeria() {
  return (
    <section id="galeria" className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <h2 className="font-heading text-4xl uppercase tracking-tight text-red-600 md:text-5xl">
            Galería
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Un vistazo a nuestro trabajo en el taller.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpContainer}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {GALERIA_IMAGENES.map((imagen, index) => (
            <motion.div
              key={imagen.src}
              variants={fadeUp}
              className="group relative aspect-square overflow-hidden rounded-lg border border-zinc-800 transition-colors hover:border-red-600"
            >
              <Image
                src={imagen.src}
                alt={imagen.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority={index < 4}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
