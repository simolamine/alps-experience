"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { PackageCard } from "@/components/package-card";
import { CurrencyProvider, useCurrency } from "@/components/currency-provider";
import { CurrencyToggle } from "@/components/currency-toggle";
import { packages } from "@/data/packages";
import { getPriceDisplay } from "@/lib/currency";
import { 
  Calendar, 
  Users, 
  CheckCircle, 
  XCircle, 
  Star, 
  ArrowLeft,
  Share2,
  MapPin,
  Clock,
  Mountain
} from "lucide-react";

interface PackageDetailPageProps {
  params: { slug: string };
}

function PackageDetailContent({ slug }: { slug: string }) {
  const { currency } = useCurrency();
  
  const packageData = packages.find(pkg => pkg.slug === slug);
  
  if (!packageData) {
    notFound();
  }

  const relatedPackages = packages
    .filter(pkg => pkg.id !== packageData.id)
    .slice(0, 2);

  const categoryColors = {
    family: "bg-green-100 text-green-800",
    group: "bg-blue-100 text-blue-800", 
    luxury: "bg-purple-100 text-purple-800"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551524164-d3fa9c8c1b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-end pb-16">
          <div className="text-white max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <Button variant="outline" size="sm" asChild className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-gray-900">
                <Link href="/packages" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Packages
                </Link>
              </Button>
              <Badge className={categoryColors[packageData.category]}>
                {packageData.category.charAt(0).toUpperCase() + packageData.category.slice(1)}
              </Badge>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">
              {packageData.title}
            </h1>
            
            {packageData.subtitle && (
              <p className="text-xl md:text-2xl text-gray-200 mb-6">
                {packageData.subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{packageData.durationNights} nights</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{packageData.minGuests}-{packageData.maxGuests} guests</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Morzine, France</span>
              </div>
            </div>
          </div>

          <div className="ml-auto">
            <CurrencyToggle />
          </div>
        </div>
      </section>
      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="space-y-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="inclusions">Inclusions</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-pdse-navy">Package Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">
                        {packageData.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <Clock className="w-8 h-8 text-pdse-navy mx-auto mb-2" />
                          <div className="font-semibold">{packageData.durationNights} Nights</div>
                          <div className="text-sm text-gray-600">Duration</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <Users className="w-8 h-8 text-pdse-navy mx-auto mb-2" />
                          <div className="font-semibold">{packageData.minGuests}-{packageData.maxGuests}</div>
                          <div className="text-sm text-gray-600">Guests</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <Mountain className="w-8 h-8 text-pdse-navy mx-auto mb-2" />
                          <div className="font-semibold">650km</div>
                          <div className="text-sm text-gray-600">Ski Area</div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-semibold text-lg mb-3 text-pdse-navy">Package Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {packageData.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="inclusions" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-green-700 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          What&apos;s Included
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {packageData.inclusions.map((inclusion, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{inclusion}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {packageData.exclusions && packageData.exclusions.length > 0 && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-red-700 flex items-center gap-2">
                            <XCircle className="w-5 h-5" />
                            Not Included
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          {packageData.exclusions.map((exclusion, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{exclusion}</span>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {packageData.addons.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-pdse-navy">Available Add-ons</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {packageData.addons.map((addon) => (
                            <div key={addon.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold">{addon.name}</h4>
                                <div className="text-lg font-bold text-pdse-navy">
                                  {getPriceDisplay(addon.priceUSD, addon.priceEUR, currency)}
                                </div>
                              </div>
                              <p className="text-sm text-gray-600">{addon.description}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="itinerary" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-pdse-navy">Sample Itinerary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {Array.from({ length: packageData.durationNights + 1 }, (_, index) => (
                          <div key={index} className="flex gap-4">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 bg-pdse-navy text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                {index + 1}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold mb-2">
                                Day {index + 1}: {index === 0 ? 'Arrival' : index === packageData.durationNights ? 'Departure' : 'Ski Day'}
                              </h4>
                              <p className="text-gray-600">
                                {index === 0 
                                  ? "Arrival at Geneva Airport, private transfer to Morzine, check-in to accommodation, welcome briefing with your concierge team."
                                  : index === packageData.durationNights
                                  ? "Final breakfast, check-out, departure transfer to Geneva Airport. Safe travels!"
                                  : "Full day skiing in Portes du Soleil, ski lessons (if included), après-ski activities, evening at leisure."
                                }
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="faqs" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-pdse-navy">Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {[
                        {
                          question: "What if I&apos;m a beginner skier?",
                          answer: "All our packages include appropriate ski lessons for your level. Our partner ski schools offer excellent beginner programs with English-speaking instructors."
                        },
                        {
                          question: "Is equipment rental included?",
                          answer: "Yes, high-quality ski equipment rental is included in all packages. We work with premium local rental shops to ensure you have the best gear."
                        },
                        {
                          question: "What happens if there&apos;s no snow?",
                          answer: "Morzine has excellent snowmaking facilities. In the rare event of poor snow conditions, we&apos;ll help arrange alternative activities or discuss rescheduling options."
                        },
                        {
                          question: "Can I modify the package?",
                          answer: "Absolutely! Our packages are starting points. We can customize duration, accommodation, add-ons, and activities to perfectly match your preferences."
                        }
                      ].map((faq, index) => (
                        <div key={index}>
                          <h4 className="font-semibold mb-2">{faq.question}</h4>
                          <p className="text-gray-600">{faq.answer}</p>
                          {index < 3 && <Separator className="mt-4" />}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Card */}
              <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle className="text-pdse-navy flex items-center justify-between">
                    Package Pricing
                    <Share2 className="w-5 h-5 text-gray-400 cursor-pointer hover:text-pdse-navy" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Starting from</div>
                    <div className="text-4xl font-bold text-pdse-navy">
                      {getPriceDisplay(packageData.basePriceUSD, packageData.basePriceEUR, currency)}
                    </div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <Button size="lg" className="w-full bg-pdse-navy hover:bg-pdse-navy/90" asChild>
                      <Link href="/plan-trip">
                        Plan Your Trip
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full border-pdse-navy text-pdse-navy hover:bg-pdse-navy hover:text-white" asChild>
                      <Link href="/contact">
                        Talk to Concierge
                      </Link>
                    </Button>
                  </div>

                  <div className="text-xs text-gray-500 text-center">
                    Final pricing based on group size, dates, and selected add-ons
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Packages */}
          {relatedPackages.length > 0 && (
            <section className="mt-20">
              <h2 className="font-serif text-3xl font-bold text-pdse-navy mb-8 text-center">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPackages.map((pkg) => (
                  <PackageCard key={pkg.id} package={pkg} />
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  );
}

export default function PackageDetailPage({ params }: PackageDetailPageProps) {
  return (
    <CurrencyProvider>
      <PackageDetailContent slug={params.slug} />
    </CurrencyProvider>
  );
}
