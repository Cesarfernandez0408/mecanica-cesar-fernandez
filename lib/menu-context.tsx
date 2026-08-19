"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface MenuContextValue {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const MenuContext = createContext<MenuContextValue | null>(null);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("useMenu must be used within MenuProvider");
  return ctx;
}
