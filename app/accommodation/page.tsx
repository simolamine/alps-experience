import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { accommodations } from "@/data/accommodation";
import Link from "next/link";
import { Users, MapPin, Wifi, Car, Waves, Flame } from "lucide-react";

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Ski-in/ski-out access': MapPin,
  'Private sauna': Waves,
  'Wood-burning fireplace': Flame,
  'WiFi included': Wifi,
  'Parking available': Car,
  'Private parking': Car,
  'Balcony with valley views': MapPin,
  'Premium location': MapPin,
  'Private hot tub': Waves,
  'In-house spa': Waves,
  'Child-friendly design': Users,
  'Games room': Users,
  'Large garden': MapPin,
  'BBQ area': Flame
};

export default function AccommodationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-pdse-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Alpine Accommodation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Hand-selected chalets and apartments in prime Morzine locations, 
              managed by our local team for your comfort and convenience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{accommodations.length}</div>
                <div className="text-sm text-gray-300">Managed Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm text-gray-300">Concierge Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm text-gray-300">Quality Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accommodations.map((accommodation) => (
              <Card key={accommodation.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 bg-gray-200">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-pdse-navy text-white">
                      {accommodation.sleeps}
                    </Badge>
                  </div>
                  {accommodation.available && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600 text-white">
                        Available
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-pdse-navy">{accommodation.name}</CardTitle>
                      <p className="text-gray-600 flex items-center gap-1 mt-1">
                        <MapPin className="w-4 h-4" />
                        {accommodation.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">From</div>
                      <div className="text-lg font-bold text-pdse-navy">
                        ${accommodation.pricePerNightUSD}
                      </div>
                      <div className="text-sm text-gray-500">per night</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{accommodation.description}</p>
                  
                  <div className="space-y-2">
                    <div className="font-medium text-gray-700">Features & Amenities:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {accommodation.features.map((feature, index) => {
                        const IconComponent = featureIcons[feature] || MapPin;
                        return (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <IconComponent className="w-4 h-4 text-pdse-navy flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4 border-t">
                    <Button size="sm" className="bg-pdse-navy hover:bg-pdse-navy/90" asChild>
                      <Link href="/plan-trip">Book Now</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/contact">Check Availability</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-pdse-navy mb-4">
              Why Choose Our Managed Properties?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlike typical vacation rentals, our properties are professionally managed 
              with on-site support and guaranteed quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pdse-navy/10 rounded-full mb-4">
                  <Users className="w-8 h-8 text-pdse-navy" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-pdse-navy">24/7 Local Support</h3>
                <p className="text-gray-600 text-sm">
                  Our team is always available for any issues, questions, or special requests during your stay.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pdse-navy/10 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-pdse-navy" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-pdse-navy">Prime Locations</h3>
                <p className="text-gray-600 text-sm">
                  All properties are carefully selected for their proximity to slopes, village amenities, and transport.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pdse-navy/10 rounded-full mb-4">
                  <Waves className="w-8 h-8 text-pdse-navy" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-pdse-navy">Quality Assured</h3>
                <p className="text-gray-600 text-sm">
                  Regular inspections, professional cleaning, and maintained amenities guarantee your comfort.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pdse-ice">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-pdse-navy mb-4">
            Need Help Choosing the Perfect Property?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our local team knows every property intimately and can recommend 
            the perfect match for your group size, preferences, and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pdse-navy hover:bg-pdse-navy/90" asChild>
              <Link href="/contact">Get Recommendations</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/plan-trip">Start Booking</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
