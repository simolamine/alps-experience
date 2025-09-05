export const siteConfig = {
  name: "Alps Experience",
  description: "Premium U.S.-friendly ski & snowboard packages in Morzine, France. On-the-ground concierge, curated experiences across 650km of Portes du Soleil.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000",
  ogImage: "/og-hero.jpg",
  tagline: "Premium U.S.-friendly ski & snowboard packages in Morzine, France.",
  location: "Morzine, Portes du Soleil, France",
  contact: {
    email: "info@alps-experience.com",
    phone: "+33 4 50 74 72 72",
    address: "Morzine, 74110, France"
  },
  social: {
    instagram: "https://instagram.com/pdse",
    facebook: "https://facebook.com/pdse",
    youtube: "https://youtube.com/@pdse"
  },
  stats: {
    pistes: "650km",
    transferTime: "1h20",
    resorts: "12",
    lifts: "196"
  }
};

export type SiteConfig = typeof siteConfig;
