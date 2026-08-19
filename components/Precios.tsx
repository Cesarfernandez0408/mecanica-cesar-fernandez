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
    <section id="precios" className="bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
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

              <ul className="mt-6 flex flex-col divide-y divide-zinc-800">
                {columna.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex flex-1 items-baseline justify-between gap-4 sm:justify-start">
                      <span className="text-zinc-300">{item.label}</span>
                      <span className="font-heading text-xl text-white">{item.price}</span>
                    </div>
                    <WhatsAppButton
                      message={`Hola, vengo de la sección de precios y quiero cotizar: ${item.label} (${item.price}).`}
                      variant="outline"
                      showIcon={false}
                      className="shrink-0 rounded-md px-4 py-2 text-xs"
                    >
                      Consultar por WhatsApp
                    </WhatsAppButton>
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
