"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Currency, CurrencyContext } from "@/lib/currency";

const CurrencyCtx = createContext<CurrencyContext | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <CurrencyCtx.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyCtx.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyCtx);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
