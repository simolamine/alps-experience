import { Package } from '@/types/package';

export const packages: Package[] = [
  {
    id: 'family-ski-week',
    slug: 'family-ski-week',
    title: 'Family Ski Week',
    subtitle: 'Perfect for families with children',
    description: 'A complete family ski experience in Morzine with accommodation, lessons, and activities for all ages.',
    heroImage: '/images/packages/family-ski-week.jpg',
    durationNights: 7,
    basePriceUSD: 3200,
    basePriceEUR: 2950,
    category: 'family',
    minGuests: 2,
    maxGuests: 8,
    inclusions: [
      '7 nights accommodation in family chalet',
      '6-day Portes du Soleil lift passes',
      'Group ski lessons for all levels',
      'Equipment rental included',
      'Daily breakfast',
      'Airport transfers from Geneva',
      'Local concierge support'
    ],
    exclusions: [
      'Lunch and dinner',
      'Personal expenses',
      'Travel insurance'
    ],
    highlights: [
      'Child-friendly slopes and ski schools',
      'Family activities beyond skiing',
      'Dedicated kids club with qualified staff',
      'Flexible lesson scheduling'
    ],
    addons: [
      {
        id: 'private-lessons',
        name: 'Private Ski Lessons',
        description: '2-hour private lesson with certified instructor',
        priceUSD: 120,
        priceEUR: 110,
        category: 'lesson'
      },
      {
        id: 'childcare',
        name: 'Full Day Childcare',
        description: 'Professional childcare while parents ski',
        priceUSD: 85,
        priceEUR: 78,
        category: 'other'
      }
    ]
  },
  {
    id: 'group-ski-spa',
    slug: 'group-ski-spa',
    title: 'Group Ski & Spa',
    subtitle: 'Perfect for friends and groups',
    description: 'Combine thrilling skiing with relaxing spa treatments in this perfect group getaway.',
    heroImage: '/images/packages/group-ski-spa.jpg',
    durationNights: 5,
    basePriceUSD: 2450,
    basePriceEUR: 2250,
    category: 'group',
    minGuests: 4,
    maxGuests: 12,
    inclusions: [
      '5 nights shared accommodation',
      '4-day Portes du Soleil lift passes',
      'Group ski lessons',
      'Daily spa access',
      'Equipment rental',
      'Welcome dinner',
      'Airport transfers'
    ],
    exclusions: [
      'Most meals',
      'Spa treatments (access only)',
      'Personal expenses'
    ],
    highlights: [
      'Group discounts available',
      'Vibrant après-ski scene',
      'Luxury spa facilities',
      'Flexible group activities'
    ],
    addons: [
      {
        id: 'spa-package',
        name: 'Premium Spa Package',
        description: 'Full body massage and facial treatment',
        priceUSD: 180,
        priceEUR: 165,
        category: 'spa'
      },
      {
        id: 'wine-tasting',
        name: 'Alpine Wine Tasting',
        description: 'Guided tasting of local French wines',
        priceUSD: 65,
        priceEUR: 60,
        category: 'dining'
      }
    ]
  },
  {
    id: 'luxury-chalet-gourmet',
    slug: 'luxury-chalet-gourmet',
    title: 'Luxury Chalet & Gourmet',
    subtitle: 'Ultimate luxury experience',
    description: 'The pinnacle of alpine luxury with private chef, premium accommodation, and exclusive experiences.',
    heroImage: '/images/packages/luxury-chalet-gourmet.jpg',
    durationNights: 7,
    basePriceUSD: 6500,
    basePriceEUR: 6000,
    category: 'luxury',
    minGuests: 2,
    maxGuests: 10,
    inclusions: [
      'Luxury private chalet',
      '6-day VIP lift passes',
      'Private ski instructor',
      'Daily housekeeping',
      'Private chef for all meals',
      'Premium wine selection',
      'Helicopter transfers available',
      '24/7 concierge service'
    ],
    exclusions: [
      'Helicopter transfers (optional)',
      'Personal shopping',
      'Spa treatments'
    ],
    highlights: [
      'Michelin-starred private chef',
      'Exclusive access to VIP areas',
      'Luxury spa in chalet',
      'Personalized itinerary planning'
    ],
    addons: [
      {
        id: 'helicopter-tour',
        name: 'Helicopter Mountain Tour',
        description: 'Scenic helicopter tour of Mont Blanc',
        priceUSD: 450,
        priceEUR: 415,
        category: 'other'
      },
      {
        id: 'wine-cellar',
        name: 'Premium Wine Cellar',
        description: 'Access to exclusive wine collection',
        priceUSD: 280,
        priceEUR: 260,
        category: 'dining'
      }
    ]
  }
];
