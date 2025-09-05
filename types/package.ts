export interface Package {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  heroImage: string;
  durationNights: number;
  basePriceUSD: number;
  basePriceEUR?: number;
  inclusions: string[];
  exclusions?: string[];
  highlights: string[];
  addons: Addon[];
  category: 'family' | 'group' | 'luxury';
  maxGuests: number;
  minGuests: number;
}

export interface Addon {
  id: string;
  name: string;
  description: string;
  priceUSD: number;
  priceEUR?: number;
  category: 'lesson' | 'rental' | 'spa' | 'dining' | 'transfer' | 'other';
}

export interface Accommodation {
  id: string;
  name: string;
  images: string[];
  sleeps: string;
  features: string[];
  location: string;
  description: string;
  pricePerNightUSD: number;
  pricePerNightEUR?: number;
  available: boolean;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  startDate?: string;
  endDate?: string;
  adults?: number;
  children?: number;
  packageId?: string;
  notes?: string;
  source?: 'website' | 'agents' | 'referral';
  createdAt: string;
}

export interface BookingDraft {
  id: string;
  step: number;
  payload: {
    dates?: {
      startDate: string;
      endDate: string;
    };
    guests?: {
      adults: number;
      children: number;
    };
    package?: {
      packageId: string;
      addons: string[];
    };
    contact?: {
      name: string;
      email: string;
      phone?: string;
      notes?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
