"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/package-card";
import { packages } from "@/data/packages";

export function PackagesGrid() {
  // Show only the first 3 packages on the home page
  const featuredPackages = packages.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-pdse-navy mb-6">
            Curated Alpine Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From family-friendly adventures to luxury escapes, we&apos;ve crafted the perfect 
            ski packages for every type of traveler seeking the ultimate Morzine experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPackages.map((pkg, index) => (
            <PackageCard 
              key={pkg.id} 
              package={pkg}
              featured={index === 1} // Make the middle card featured
            />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild className="border-pdse-navy text-pdse-navy hover:bg-pdse-navy hover:text-white">
            <Link href="/packages">
              View All Packages
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
