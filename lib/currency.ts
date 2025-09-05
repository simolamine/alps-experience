export type Currency = 'USD' | 'EUR';

export interface CurrencyContext {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

export const EXCHANGE_RATE_EUR_TO_USD = 1.08; // Approximate rate - in production, use live rates

export function formatPrice(amount: number, currency: Currency = 'USD'): string {
  const locale = currency === 'USD' ? 'en-US' : 'en-GB';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function convertPrice(amountUSD: number, toCurrency: Currency): number {
  if (toCurrency === 'USD') return amountUSD;
  return Math.round(amountUSD / EXCHANGE_RATE_EUR_TO_USD);
}

export function formatPriceFromUSD(amountUSD: number, currency: Currency = 'USD'): string {
  const converted = convertPrice(amountUSD, currency);
  return formatPrice(converted, currency);
}

export function getPriceDisplay(priceUSD: number, priceEUR?: number, currency: Currency = 'USD'): string {
  if (currency === 'EUR' && priceEUR) {
    return formatPrice(priceEUR, 'EUR');
  }
  return formatPriceFromUSD(priceUSD, currency);
}
