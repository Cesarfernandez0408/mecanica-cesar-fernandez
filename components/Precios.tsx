"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpContainer } from "@/lib/motion";
import WhatsAppButton from "@/components/WhatsAppButton";

interface PrecioItem {
  label: string;
  price: string;
}

interface Columna {
  title: string;
  subtitle: string;
  items: PrecioItem[];
}

const COLUMNAS: Columna[] = [
  {
    title: "Motos lineales básicas",
    subtitle: "110cc a 150cc",
    items: [
      { label: "Mantenimiento básico en el local", price: "S/ 30" },
      { label: "Mantenimiento básico con recojo a domicilio", price: "S/ 35" },
      { label: "Mantenimiento básico + lavado y siliconado", price: "S/ 35" },
      { label: "Mantenimiento general", price: "S/ 90" },
    ],
  },
  {
    title: "Motos modernas",
    subtitle: "Con inyección",
    items: [
      { label: "Mantenimiento básico", price: "S/ 50" },
      { label: "Mantenimiento general", price: "S/ 140" },
    ],
  },
];

export default function Precios() {
  return (
    <section id="precios" className="overflow-x-hidden bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-6 text-center"
        >
          <h2 className="font-heading text-4xl uppercase tracking-tight text-red-600 md:text-5xl">
            Precios
          </h2>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Precios para motos de todo cilindraje
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 md:text-base">
            Precios de mano de obra. Repuestos aparte. Varían según cilindraje y marca — consulta por tu
            modelo.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUpContainer}
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {COLUMNAS.map((columna) => (
            <motion.div
              key={columna.title}
              variants={fadeUp}
              className="rounded-lg border border-zinc-800 bg-zinc-900 p-6 md:p-8"
            >
              <h3 className="font-heading text-2xl uppercase tracking-wide text-white">
                {columna.title}
              </h3>
              <p className="text-sm uppercase tracking-widest text-red-500">{columna.subtitle}</p>

              <ul className="mt-6 flex flex-col gap-4 divide-y divide-zinc-800 md:gap-0">
                {columna.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex flex-col gap-3 pb-4 first:pt-0 md:flex-row md:items-center md:justify-between md:gap-4 md:py-4 md:pb-4"
                  >
                    <span className="text-sm text-zinc-300 md:flex-1 md:text-base">{item.label}</span>

                    <div className="flex items-center justify-between gap-3 md:w-auto md:justify-end md:gap-6">
                      <span className="whitespace-nowrap font-heading text-2xl text-white md:w-20 md:text-center md:text-3xl">
                        {item.price}
                      </span>
                      <WhatsAppButton
                        message={`Hola, vengo de la sección de precios y quiero cotizar: ${item.label} (${item.price}).`}
                        variant="outline"
                        className="shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-xs md:px-4 md:text-sm"
                      >
                        <span className="md:hidden">Consultar</span>
                        <span className="hidden md:inline">Consultar por WhatsApp</span>
                      </WhatsAppButton>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
