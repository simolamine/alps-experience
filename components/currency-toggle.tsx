"use client";

import { Button } from "@/components/ui/button";
import { useCurrency } from "@/components/currency-provider";

export function CurrencyToggle() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1">
      <Button
        size="sm"
        variant={currency === "USD" ? "default" : "ghost"}
        onClick={() => setCurrency("USD")}
        className={`text-xs px-3 py-1 h-auto ${
          currency === "USD" 
            ? "bg-white text-pdse-navy hover:bg-white/90" 
            : "text-white hover:bg-white/20"
        }`}
      >
        USD
      </Button>
      <Button
        size="sm"
        variant={currency === "EUR" ? "default" : "ghost"}
        onClick={() => setCurrency("EUR")}
        className={`text-xs px-3 py-1 h-auto ${
          currency === "EUR" 
            ? "bg-white text-pdse-navy hover:bg-white/90" 
            : "text-white hover:bg-white/20"
        }`}
      >
        EUR
      </Button>
    </div>
  );
}
