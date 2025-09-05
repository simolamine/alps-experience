import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Activity, Car, Utensils, Waves, GraduationCap, Mountain } from "lucide-react";

const services = [
  {
    id: "lessons",
    title: "Ski & Snowboard Lessons",
    icon: GraduationCap,
    description: "Professional instruction for all levels with certified English-speaking instructors",
    features: ["Group and private lessons", "All skill levels welcome", "Kids programs available", "Equipment included"],
    pricing: "From $65/person for group lessons"
  },
  {
    id: "passes",
    title: "Lift Passes",
    icon: Mountain,
    description: "Access to the entire Portes du Soleil ski area with 650km of slopes",
    features: ["Multi-day passes available", "Hands-free payment", "Online booking", "Group discounts"],
    pricing: "From $52/day adult pass"
  },
  {
    id: "rentals",
    title: "Equipment Rental",
    icon: Activity,
    description: "High-quality ski and snowboard equipment from premium brands",
    features: ["Latest model equipment", "Professional fitting", "Helmet included", "Damage protection"],
    pricing: "From $35/day complete ski set"
  },
  {
    id: "dining",
    title: "Dining Experiences",
    icon: Utensils,
    description: "Authentic Alpine cuisine from mountain huts to Michelin-starred restaurants",
    features: ["Restaurant reservations", "Private dining", "Wine pairings", "Dietary accommodations"],
    pricing: "Various pricing options"
  },
  {
    id: "spa",
    title: "Spa & Wellness",
    icon: Waves,
    description: "Relax and rejuvenate after your alpine adventures",
    features: ["Mountain spas", "Massage therapy", "Sauna & hot tubs", "Wellness programs"],
    pricing: "From $80/treatment"
  },
  {
    id: "transfers",
    title: "Airport Transfers",
    icon: Car,
    description: "Comfortable transportation from Geneva Airport to Morzine",
    features: ["Door-to-door service", "Professional drivers", "Winter tire equipped", "Luggage included"],
    pricing: "From $120/vehicle one-way"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-pdse-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Alpine Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Everything you need for the perfect Morzine experience, carefully curated 
              and seamlessly coordinated by our local team.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-pdse-navy/10 rounded-full mb-4">
                      <IconComponent className="w-8 h-8 text-pdse-navy" />
                    </div>
                    <CardTitle className="text-xl text-pdse-navy">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-pdse-navy rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t">
                      <Badge variant="secondary" className="mb-3">
                        {service.pricing}
                      </Badge>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-pdse-navy hover:bg-pdse-navy/90" asChild>
                          <Link href="/plan-trip">Book Now</Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href="/contact">Learn More</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pdse-ice">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-pdse-navy mb-4">
            Ready to Plan Your Perfect Trip?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our local concierge team will help you select the perfect combination of services for your group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pdse-navy hover:bg-pdse-navy/90" asChild>
              <Link href="/plan-trip">Start Planning</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Talk to Concierge</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
