import { MapPin, Users, DollarSign, Shield, Star, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: MapPin,
    title: "On-the-Ground Presence",
    description: "Our local team in Morzine provides 24/7 concierge support, from airport pickup to slope-side assistance. We're not just a booking platform—we're your alpine guides.",
    highlights: ["Local team based in Morzine", "24/7 concierge support", "Immediate assistance available"]
  },
  {
    icon: Star,
    title: "Curated Partnerships",
    description: "Hand-selected accommodations, premier ski schools, and exclusive restaurant partnerships. We work only with trusted providers who share our commitment to excellence.",
    highlights: ["Vetted accommodation partners", "Premier ski instruction", "Exclusive dining access"]
  },
  {
    icon: DollarSign,
    title: "USD-Friendly Pricing",
    description: "Transparent pricing in USD, no hidden fees, and protection from exchange rate fluctuations. Book with confidence knowing exactly what you'll pay.",
    highlights: ["Clear USD pricing", "No hidden fees", "Exchange rate protection"]
  }
];

const trustIndicators = [
  { icon: Shield, label: "Fully Licensed & Insured" },
  { icon: Users, label: "500+ Happy Clients" },
  { icon: Heart, label: "98% Satisfaction Rate" }
];

export function WhyUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-pdse-navy mb-6">
            Why Choose Alps Experience?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We&apos;re not just another ski operator. We&apos;re your dedicated alpine concierge, 
            ensuring every detail of your Morzine experience exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-pdse-navy/10 rounded-full mb-4 mx-auto">
                    <IconComponent className="w-10 h-10 text-pdse-navy" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-pdse-navy">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-pdse-navy rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustIndicators.map((indicator, index) => {
              const IconComponent = indicator.icon;
              return (
                <div key={index} className="flex items-center justify-center gap-3 text-gray-700">
                  <IconComponent className="w-6 h-6 text-pdse-navy" />
                  <span className="font-medium">{indicator.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
