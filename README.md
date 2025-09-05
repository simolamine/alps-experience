# Alps Experience

A premium ski & snowboard booking platform for U.S. travelers visiting Morzine, France. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎿 Features

### Customer-Facing
- **Multi-step Booking Wizard** - Guided trip planning with real-time pricing
- **Package Browser** - Filter and compare ski packages with USD/EUR pricing
- **Contact Forms** - Lead generation with validation and API integration
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **SEO Optimized** - JSON-LD schema, sitemap, and meta tags

### Business Features
- **B2B Agent Portal** - Commission structure and partnership applications
- **Lead Management** - API endpoints for CRM integration
- **Currency Toggle** - Real-time USD/EUR price conversion
- **Content Management** - Structured data for packages and accommodations

### Technical
- **Next.js 14 App Router** - Modern React framework with Server Components
- **TypeScript** - Full type safety throughout the application
- **Tailwind CSS + shadcn/ui** - Consistent, accessible design system
- **Form Validation** - Zod schemas with React Hook Form
- **API Routes** - RESTful endpoints for leads and booking drafts

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd pdse
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Environment Setup**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Configure your environment variables:
   \`\`\`env
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   RESEND_API_KEY=your_resend_api_key_here
   EMAIL_TO=info@alps-experience.com
   GA4_ID=G-XXXXXXXXXX
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
pdse/
├── app/                      # Next.js App Router pages
│   ├── (routes)/            # Main application routes
│   ├── api/                 # API endpoints
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with fonts and metadata
│   ├── page.tsx             # Homepage
│   ├── sitemap.ts           # Dynamic sitemap generation
│   └── robots.ts            # SEO robots.txt
├── components/              # Reusable React components
│   ├── ui/                  # shadcn/ui components
│   ├── booking-wizard/      # Multi-step booking flow
│   ├── header.tsx           # Site navigation
│   ├── footer.tsx           # Site footer
│   └── ...                  # Feature-specific components
├── lib/                     # Utility functions
│   ├── currency.ts          # Price formatting and conversion
│   ├── validators.ts        # Zod validation schemas
│   ├── json-ld.ts          # SEO structured data
│   └── utils.ts            # General utilities
├── data/                    # Static data and content
│   ├── packages.ts          # Ski package definitions
│   └── accommodation.ts     # Property listings
├── types/                   # TypeScript type definitions
├── config/                  # Configuration files
│   └── site.ts             # Site-wide configuration
└── public/                  # Static assets
\`\`\`

## 🎨 Design System

Built with **Tailwind CSS** and **shadcn/ui** components for consistency and accessibility.

### Color Palette
- **Primary Navy**: `#0A3D62` - Main brand color
- **Glacier Blue**: `#3C99DC` - Secondary accent
- **Ice Blue**: `#E3F2FD` - Light backgrounds
- **Neutral**: `#0F172A` / `#F8FAFC` - Text and backgrounds

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Code**: Geist Mono

### Components
All UI components are built with **shadcn/ui** for:
- Consistent styling
- Accessibility compliance
- Easy customization
- TypeScript support

## 📊 API Endpoints

### Leads Management
- `POST /api/lead` - Create new lead from contact forms
- `GET /api/lead` - Retrieve lead statistics (development)

### Booking Management  
- `POST /api/booking-draft` - Save booking wizard progress
- `GET /api/booking-draft` - Retrieve booking statistics (development)

### Request/Response Examples

**Create Lead:**
\`\`\`json
POST /api/lead
{
  "name": "John Smith",
  "email": "john@example.com",
  "phone": "+1-555-123-4567",
  "adults": 2,
  "children": 1,
  "startDate": "2024-02-15",
  "endDate": "2024-02-22",
  "packageId": "family-ski-week",
  "notes": "First time skiing",
  "source": "website",
  "consent": true
}
\`\`\`

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   \`\`\`bash
   npm install -g vercel
   vercel
   \`\`\`

2. **Configure Environment Variables**
   Add your production environment variables in the Vercel dashboard.

3. **Deploy**
   \`\`\`bash
   vercel --prod
   \`\`\`

### Other Platforms

The application can be deployed to any platform supporting Next.js:
- **Netlify** - Static site generation
- **Railway** - Full-stack deployment
- **DigitalOcean App Platform** - Containerized deployment

## 🧪 Testing

### Running Tests
\`\`\`bash
# Unit tests with Vitest
npm run test

# E2E tests with Playwright
npm run test:e2e

# Type checking
npm run type-check

# Linting
npm run lint
\`\`\`

### Test Coverage
- **Unit Tests**: Component functionality and utilities
- **Integration Tests**: API endpoints and form submissions
- **E2E Tests**: Critical user journeys (booking flow, contact forms)

## 🔧 Configuration

### Currency Settings
Configure exchange rates and default currency in `lib/currency.ts`:
\`\`\`typescript
export const EXCHANGE_RATE_EUR_TO_USD = 1.08; // Update as needed
\`\`\`

### Package Data
Modify ski packages in `data/packages.ts`:
\`\`\`typescript
export const packages: Package[] = [
  {
    id: 'new-package',
    title: 'New Package',
    basePriceUSD: 2500,
    // ... other properties
  }
];
\`\`\`

### Site Configuration
Update site details in `config/site.ts`:
\`\`\`typescript
export const siteConfig = {
  name: "Alps Experience",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  // ... other settings
};
\`\`\`

## 📈 SEO Features

### Implemented
- **Meta Tags** - Dynamic titles, descriptions, and Open Graph
- **JSON-LD Schema** - Organization, LocalBusiness, and Product markup
- **Sitemap** - Automatically generated from routes and data
- **Robots.txt** - Search engine crawling guidelines
- **Structured Data** - Rich snippets for better search results

### Performance
- **Lighthouse Score**: Target 90+ across all metrics
- **Core Web Vitals**: Optimized loading and interactivity
- **Image Optimization**: Next.js automatic optimization
- **Font Loading**: Optimized Google Fonts integration

## 🤝 Contributing

### Development Workflow
1. Create feature branch from `main`
2. Make changes with proper TypeScript types
3. Add tests for new functionality
4. Update documentation as needed
5. Submit pull request with description

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Extended Next.js configuration
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Structured commit messages

## 📞 Support

### Technical Issues
- Create GitHub issue with reproduction steps
- Include browser/device information
- Attach relevant error messages or screenshots

### Business Inquiries
- Email: dev@pdse.example
- Documentation: This README and inline code comments

## 📄 License

Copyright (c) 2024 Alps Experience. All rights reserved.

This is proprietary software. Unauthorized copying, modification, or distribution is prohibited.

---

## 🏔️ About Alps Experience

We're your dedicated alpine concierge, creating unforgettable ski experiences in Morzine, France for U.S. travelers. With on-the-ground expertise and seamless service, we handle every detail so you can focus on making memories.

**Ready to experience the Alps?** Visit [pdse.example](https://pdse.example) or contact our concierge team.