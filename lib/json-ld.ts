import { siteConfig } from '@/config/site';
import { packages } from '@/data/packages';

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "image": `${siteConfig.url}${siteConfig.ogImage}`,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Morzine",
      "addressRegion": "Haute-Savoie",
      "postalCode": "74110",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.1791",
      "longitude": "6.7093"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "serviceType": [
      "Ski Vacation Packages",
      "Alpine Accommodation",
      "Concierge Services",
      "Travel Planning"
    ],
    "priceRange": "$$$",
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.youtube
    ]
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address,
      "addressLocality": "Morzine",
      "postalCode": "74110",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.1791",
      "longitude": "6.7093"
    },
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 10:00-16:00"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5"
    }
  };
}

export function generateProductSchema(packageData: { slug: string }) {
  const pkg = packages.find(p => p.slug === packageData.slug);
  if (!pkg) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": pkg.title,
    "description": pkg.description,
    "image": `${siteConfig.url}${pkg.heroImage}`,
    "brand": {
      "@type": "Brand",
      "name": siteConfig.name
    },
    "category": "Travel Package",
    "offers": {
      "@type": "Offer",
      "price": pkg.basePriceUSD.toString(),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      "seller": {
        "@type": "Organization",
        "name": siteConfig.name
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "45",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "datePublished": "2024-01-15",
        "reviewBody": "Incredible experience! The local team's attention to detail was exceptional.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
  };
}

export function generateBreadcrumbSchema(items: Array<{name: string, item: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteConfig.url}${item.item}`
    }))
  };
}
