"use client";

import { motion } from "framer-motion";
import { Truck, Smartphone, Droplets, Users, MessageCircle, type LucideIcon } from "lucide-react";
import { fadeUp, fadeUpContainer } from "@/lib/motion";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Promocion {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PROMOCIONES: Promocion[] = [
  {
    icon: Truck,
    title: "Recogemos tu moto gratis",
    description: "Desde tu casa o trabajo",
  },
  {
    icon: Smartphone,
    title: "Diagnóstico virtual gratis",
    description: "Envía video por WhatsApp",
  },
  {
    icon: Droplets,
    title: "Lavado incluido",
    description: "Gratis con mantenimiento general",
  },
  {
    icon: Users,
    title: "Refiere 5 amigos",
    description: "Mantenimiento gratis",
  },
];

interface PrecioItem {
  label: string;
  price: string;
}

interface Bloque {
  title: string;
  items: PrecioItem[];
}

const BLOQUES: Bloque[] = [
  {
    title: "Motos lineales básicas (110cc - 150cc)",
    items: [
      { label: "Mantenimiento básico en el local", price: "S/ 30" },
      { label: "Mantenimiento básico con recojo", price: "S/ 35" },
      { label: "Mantenimiento básico + lavado", price: "S/ 35" },
      { label: "Mantenimiento general", price: "S/ 90" },
    ],
  },
  {
    title: "Motos modernas con inyección",
    items: [
      { label: "Mantenimiento básico", price: "S/ 50" },
      { label: "Mantenimiento general", price: "S/ 140" },
    ],
  },
];

export default function PromocionesPrecios() {
  return (
    <section className="overflow-x-hidden bg-black py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h2 id="promociones" className="scroll-mt-24 font-heading text-4xl uppercase tracking-tight text-red-600 md:text-5xl">
              Promociones
            </h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUpContainer}
              className="mt-6 flex flex-col gap-4"
            >
              {PROMOCIONES.map((promo) => (
                <motion.div
                  key={promo.title}
                  variants={fadeUp}
                  className="flex items-center gap-4 rounded-lg border-l-4 border-red-600 bg-zinc-900 p-4"
                >
                  <promo.icon className="h-7 w-7 shrink-0 text-red-600" aria-hidden />
                  <div>
                    <h3 className="font-heading text-sm uppercase tracking-wide text-white sm:text-base">
                      {promo.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-zinc-400 sm:text-sm">{promo.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <h2 id="precios" className="scroll-mt-24 font-heading text-4xl uppercase tracking-tight text-red-600 md:text-5xl">
              Precios
            </h2>
            <p className="mt-1 text-xs text-zinc-500 sm:text-sm">Mano de obra. Repuestos aparte.</p>

            <div className="mt-6 flex flex-col gap-6">
              {BLOQUES.map((bloque) => (
                <div key={bloque.title}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-red-500 sm:text-sm">
                    {bloque.title}
                  </p>
                  <div className="flex flex-col gap-3">
                    {bloque.items.map((item) => (
                      <div key={item.label} className="rounded-lg bg-zinc-900 p-4">
                        <p className="text-sm font-medium text-zinc-200 md:text-base">{item.label}</p>
                        <div className="mt-2 flex items-center justify-between gap-3">
                          <span className="whitespace-nowrap text-2xl font-bold text-red-600">
                            {item.price}
                          </span>
                          <WhatsAppButton
                            message={`Hola, vengo de la sección de precios y quiero cotizar: ${item.label} (${item.price}).`}
                            variant="outline-red"
                            showIcon={false}
                            className="shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-xs"
                          >
                            <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
                            Consultar
                          </WhatsAppButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
