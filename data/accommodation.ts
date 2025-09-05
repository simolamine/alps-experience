import { Accommodation } from '@/types/package';

export const accommodations: Accommodation[] = [
  {
    id: 'chalet-alpina',
    name: 'Chalet Alpina',
    images: [
      '/images/accommodation/chalet-alpina-1.jpg',
      '/images/accommodation/chalet-alpina-2.jpg',
      '/images/accommodation/chalet-alpina-3.jpg'
    ],
    sleeps: '6-8 guests',
    features: [
      'Ski-in/ski-out access',
      'Private sauna',
      'Wood-burning fireplace',
      'Mountain views',
      'Modern kitchen',
      'WiFi included',
      'Parking available'
    ],
    location: 'Morzine Village Center',
    description: 'Traditional Alpine chalet with modern amenities, perfectly located for easy access to slopes and village amenities.',
    pricePerNightUSD: 450,
    pricePerNightEUR: 415,
    available: true
  },
  {
    id: 'apartment-bellevue',
    name: 'Apartment Bellevue',
    images: [
      '/images/accommodation/apartment-bellevue-1.jpg',
      '/images/accommodation/apartment-bellevue-2.jpg'
    ],
    sleeps: '4-6 guests',
    features: [
      '2 minutes from Pleney lift',
      'Balcony with valley views',
      'Fully equipped kitchen',
      'Private parking',
      'WiFi included',
      'Ski storage'
    ],
    location: 'Near Pleney Lift',
    description: 'Modern apartment with stunning valley views, ideal for families or small groups seeking comfort and convenience.',
    pricePerNightUSD: 280,
    pricePerNightEUR: 260,
    available: true
  },
  {
    id: 'luxury-penthouse',
    name: 'Luxury Penthouse Suite',
    images: [
      '/images/accommodation/luxury-penthouse-1.jpg',
      '/images/accommodation/luxury-penthouse-2.jpg',
      '/images/accommodation/luxury-penthouse-3.jpg'
    ],
    sleeps: '8-10 guests',
    features: [
      'Premium location',
      'Private hot tub',
      'Concierge service',
      'Panoramic mountain views',
      'Designer furnishings',
      'In-house spa',
      'Private chef available',
      'Helicopter landing pad access'
    ],
    location: 'Morzine Heights',
    description: 'Ultra-luxury penthouse offering the finest accommodations with unparalleled service and breathtaking 360-degree views.',
    pricePerNightUSD: 950,
    pricePerNightEUR: 880,
    available: true
  },
  {
    id: 'family-chalet',
    name: 'Family Chalet Montagne',
    images: [
      '/images/accommodation/family-chalet-1.jpg',
      '/images/accommodation/family-chalet-2.jpg'
    ],
    sleeps: '8-12 guests',
    features: [
      'Child-friendly design',
      'Games room',
      'Large garden',
      'BBQ area',
      '5 bedrooms',
      'Family dining area',
      'Crib and high chair available'
    ],
    location: 'Quiet residential area',
    description: 'Spacious family chalet designed with children in mind, offering safety, comfort, and entertainment for the whole family.',
    pricePerNightUSD: 380,
    pricePerNightEUR: 350,
    available: true
  }
];
