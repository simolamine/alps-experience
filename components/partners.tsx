import { Card, CardContent } from "@/components/ui/card";

const partners = [
  {
    name: "ESF Morzine",
    category: "Ski School",
    description: "Premier ski instruction",
    logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Intersport",
    category: "Equipment",
    description: "Premium ski & snowboard rental",
    logo: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "L'Aubergade",
    category: "Dining",
    description: "Authentic Alpine cuisine",
    logo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Spa des Cimes",
    category: "Wellness",
    description: "Luxury spa & wellness center",
    logo: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Mountain Collective",
    category: "Transportation",
    description: "Premium transfer services",
    logo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Alpine Properties",
    category: "Accommodation",
    description: "Luxury chalet management",
    logo: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const categoryColors = {
  "Ski School": "bg-blue-100 text-blue-800",
  "Equipment": "bg-green-100 text-green-800",
  "Dining": "bg-orange-100 text-orange-800",
  "Wellness": "bg-purple-100 text-purple-800",
  "Transportation": "bg-gray-100 text-gray-800",
  "Accommodation": "bg-red-100 text-red-800"
};

export function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-pdse-navy mb-6">
            Trusted Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We work exclusively with the finest local businesses in Morzine to ensure 
            every aspect of your alpine experience meets our exacting standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partners.map((partner, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-16 h-16 rounded-lg bg-cover bg-center flex-shrink-0 ring-2 ring-gray-100"
                    style={{ backgroundImage: `url('${partner.logo}')` }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-lg text-pdse-navy leading-tight">
                        {partner.name}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        categoryColors[partner.category as keyof typeof categoryColors] || "bg-gray-100 text-gray-800"
                      }`}>
                        {partner.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            Join our network of satisfied partners and guests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-pdse-navy">50+</div>
              <div className="text-sm text-gray-600">Local Partners</div>
            </div>
            <div className="hidden sm:block w-px bg-gray-200 mx-8"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pdse-navy">5 Years</div>
              <div className="text-sm text-gray-600">In Morzine</div>
            </div>
            <div className="hidden sm:block w-px bg-gray-200 mx-8"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pdse-navy">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
