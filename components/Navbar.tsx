"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useMenu } from "@/lib/menu-context";
import { NAV_LINKS } from "@/lib/site-config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { menuOpen, setMenuOpen } = useMenu();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full border-b border-zinc-800 bg-[#0a0a0a] transition-shadow ${
          scrolled ? "backdrop-blur supports-[backdrop-filter]:bg-[#0a0a0a]/90 shadow-lg shadow-black/30" : ""
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8 lg:px-16">
          <Logo />

          <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-wide text-zinc-300 transition-colors hover:text-red-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <WhatsAppButton
              message="Hola, vengo de la página web y quiero más información."
              className="rounded-md px-5 py-2.5 text-sm"
            />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-md text-white lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <Menu className="h-7 w-7" aria-hidden />
          </button>
        </nav>
      </header>

      {/* Rendered as a sibling of <header>, not a descendant — an ancestor with
          backdrop-filter (the scrolled header) would otherwise become the containing
          block for this fixed overlay and break its full-screen positioning. */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col bg-black lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-4">
              <Logo />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-md text-white"
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6" aria-hidden />
              </button>
            </div>

            <ul className="flex flex-1 flex-col items-center justify-center space-y-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-heading text-2xl font-semibold uppercase tracking-wide text-white transition-colors hover:text-red-600"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="flex justify-center px-6 pb-10">
              <WhatsAppButton
                message="Hola, vengo de la página web y quiero más información."
                className="mx-auto max-w-xs rounded-md px-6 py-3 text-base"
                onClick={() => setMenuOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
