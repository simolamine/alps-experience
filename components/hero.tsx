import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-pdse-navy/70 to-pdse-navy/50">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero-background.jpg')`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {siteConfig.name}
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 font-light">
            {siteConfig.tagline}
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed">
            On-the-ground in Morzine. Seamless U.S.-friendly concierge. 
            Curated ski experiences across 650km of Portes du Soleil.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              asChild 
              className="bg-white text-pdse-navy hover:bg-gray-100 text-lg px-8 py-4 h-auto font-semibold"
            >
              <Link href="/plan-trip">Plan Your Trip</Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-white text-pdse-navy hover:bg-gray-100 text-lg px-8 py-4 h-auto font-semibold"
            >
              <Link href="/contact">Talk to a Concierge</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-200 mb-4">Trusted by U.S. travelers since 2020</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <span className="font-semibold">650km</span>
                <span>of pistes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">1h20</span>
                <span>from Geneva</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">12</span>
                <span>resorts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">196</span>
                <span>lifts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
