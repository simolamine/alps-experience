import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, MapPin, Heart, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-pdse-navy text-white py-20 overflow-hidden">
        {/* Alpine Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-pdse-navy/70"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">About Alps Experience</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Your trusted alpine concierge since 2020, creating unforgettable 
              ski experiences in the heart of Portes du Soleil.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-pdse-navy mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded by alpine enthusiasts who fell in love with Morzine, Alps Experience 
                was born from a simple vision: to share the magic of this incredible region with fellow 
                travelers while providing the seamless, worry-free experience we always wished we&apos;d had 
                as visitors ourselves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-pdse-navy mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  We believe that your alpine adventure should be about making memories, not managing logistics. 
                  That&apos;s why we&apos;ve built a team of local experts who handle every detail, from the moment 
                  you land in Geneva to your final day on the slopes.
                </p>
                <p className="text-gray-600">
                  As Americans living in France, we understand the unique needs of U.S. travelers and bridge 
                  the gap between American service expectations and authentic French alpine experiences.
                </p>
              </div>
              <div className="bg-pdse-ice p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pdse-navy/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-pdse-navy" />
                    </div>
                    <div>
                      <div className="font-semibold text-pdse-navy">Based in Morzine</div>
                      <div className="text-sm text-gray-600">Living and working in the community</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pdse-navy/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-pdse-navy" />
                    </div>
                    <div>
                      <div className="font-semibold text-pdse-navy">U.S. Founded</div>
                      <div className="text-sm text-gray-600">Understanding American travel preferences</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pdse-navy/10 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-pdse-navy" />
                    </div>
                    <div>
                      <div className="font-semibold text-pdse-navy">Personal Touch</div>
                      <div className="text-sm text-gray-600">Every client gets dedicated attention</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-pdse-navy mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by these core principles that shape how we serve our clients and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-pdse-navy mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-pdse-navy">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  We&apos;re not satisfied with good enough. Every detail matters in creating extraordinary experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-pdse-navy mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-pdse-navy">Authenticity</h3>
                <p className="text-gray-600 text-sm">
                  We share the real Morzine - authentic local experiences beyond typical tourist activities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-pdse-navy mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-pdse-navy">Community</h3>
                <p className="text-gray-600 text-sm">
                  We&apos;re part of the Morzine community and work with local businesses to benefit everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-pdse-navy mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-pdse-navy">Local Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Our deep local knowledge ensures you experience Morzine like an insider, not a tourist.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-pdse-ice">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-pdse-navy mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our passionate team of alpine experts, local guides, and hospitality professionals 
              work together to create your perfect Morzine experience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <Card>
              <CardContent className="py-12">
                <div className="space-y-6">
                  <p className="text-lg text-gray-600">
                    &ldquo;We&apos;re not just a booking service - we&apos;re your local friends who happen to be experts 
                    at creating incredible alpine experiences. When you choose Alps Experience, you&apos;re joining our community.&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-pdse-navy">The Alps Experience Team</div>
                    <div className="text-gray-600">Morzine, France</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-pdse-navy mb-4">
            Ready to Experience Morzine with Local Experts?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us show you why Morzine has captured our hearts and help you create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pdse-navy hover:bg-pdse-navy/90" asChild>
              <Link href="/plan-trip">Plan Your Trip</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
