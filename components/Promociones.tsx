"use client";

import { motion } from "framer-motion";
import { Truck, Sparkles, Droplets, Gift, type LucideIcon } from "lucide-react";
import { fadeUp, fadeUpContainer } from "@/lib/motion";

interface Promocion {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PROMOCIONES: Promocion[] = [
  {
    icon: Truck,
    title: "Recogemos tu moto gratis",
    description: "La retiramos desde tu casa o trabajo, la reparamos y te la devolvemos lista.",
  },
  {
    icon: Sparkles,
    title: "Diagnóstico virtual gratis",
    description: "Envíanos video o foto por WhatsApp y te decimos qué tiene tu moto.",
  },
  {
    icon: Droplets,
    title: "Lavado incluido",
    description:
      "Gratis con mantenimiento general, o solo +S/5 con mantenimiento básico. Entregamos la moto lavada y siliconada.",
  },
  {
    icon: Gift,
    title: "Refiere 5 amigos = mantenimiento gratis",
    description:
      "Recomienda a 5 personas y accede a un mantenimiento sin costo. Llevamos control con cupón físico.",
  },
];

export default function Promociones() {
  return (
    <section id="promociones" className="bg-red-600 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <h2 className="font-heading text-4xl uppercase tracking-tight text-black md:text-5xl">
            Promociones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-medium text-black/80">
            Beneficios pensados para que cuidar tu moto sea más fácil.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {PROMOCIONES.map((promo) => (
            <motion.div
              key={promo.title}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-lg border-2 border-black/10 bg-[#0a0a0a] p-8"
            >
              <promo.icon className="h-10 w-10 text-red-600" aria-hidden />
              <h3 className="font-heading text-2xl uppercase tracking-wide text-white">
                {promo.title}
              </h3>
              <p className="text-zinc-400">{promo.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
