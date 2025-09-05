"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PackageCard } from "@/components/package-card";
import { CurrencyProvider } from "@/components/currency-provider";
import { CurrencyToggle } from "@/components/currency-toggle";
import { packages } from "@/data/packages";
import { Filter, Users } from "lucide-react";

type FilterCategory = 'all' | 'family' | 'group' | 'luxury';
type SortOption = 'price-low' | 'price-high' | 'duration' | 'name';

export default function PackagesPage() {
  const [filterCategory, setFilterCategory] = useState<FilterCategory>('all');
  const [sortBy, setSortBy] = useState<SortOption>('price-low');

  const filteredPackages = packages.filter(pkg => {
    if (filterCategory === 'all') return true;
    return pkg.category === filterCategory;
  });

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.basePriceUSD - b.basePriceUSD;
      case 'price-high':
        return b.basePriceUSD - a.basePriceUSD;
      case 'duration':
        return a.durationNights - b.durationNights;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const categoryStats = {
    all: packages.length,
    family: packages.filter(p => p.category === 'family').length,
    group: packages.filter(p => p.category === 'group').length,
    luxury: packages.filter(p => p.category === 'luxury').length,
  };

  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-pdse-navy text-white py-20 overflow-hidden">
          {/* Alpine Chalet Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pdse-navy/80 to-pdse-navy/90"></div>
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
                Ski Packages
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Discover our carefully curated ski packages designed for every type of 
                alpine adventure in the heart of Portes du Soleil.
              </p>
              
              <div className="flex justify-center mb-8">
                <CurrencyToggle />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">650km</div>
                  <div className="text-gray-300">of skiable terrain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">12</div>
                  <div className="text-gray-300">connected resorts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-gray-300">package categories</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Filter Controls */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pdse-navy">
                  <Filter className="w-5 h-5" />
                  Filter & Sort Packages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Category Filter */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">Package Type</label>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(categoryStats).map(([category, count]) => (
                        <Button
                          key={category}
                          variant={filterCategory === category ? "default" : "outline"}
                          onClick={() => setFilterCategory(category as FilterCategory)}
                          className={`${
                            filterCategory === category 
                              ? "bg-pdse-navy hover:bg-pdse-navy/90" 
                              : "border-pdse-navy text-pdse-navy hover:bg-pdse-navy hover:text-white"
                          }`}
                        >
                          {category === 'all' ? 'All Packages' : category.charAt(0).toUpperCase() + category.slice(1)}
                          <Badge variant="secondary" className="ml-2">
                            {count}
                          </Badge>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Sort Options */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">Sort By</label>
                    <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="duration">Duration</SelectItem>
                        <SelectItem value="name">Name A-Z</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Info */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {sortedPackages.length} of {packages.length} packages
                {filterCategory !== 'all' && (
                  <span className="ml-2">
                    in <strong>{filterCategory}</strong> category
                  </span>
                )}
              </p>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPackages.map((pkg, index) => (
                <PackageCard 
                  key={pkg.id} 
                  package={pkg}
                  featured={index === 0 && filterCategory === 'all'} // Feature first package when showing all
                />
              ))}
            </div>

            {/* No Results */}
            {sortedPackages.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Users className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No packages found
                </h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your filters to see more results.
                </p>
                <Button 
                  onClick={() => setFilterCategory('all')}
                  variant="outline"
                  className="border-pdse-navy text-pdse-navy hover:bg-pdse-navy hover:text-white"
                >
                  Show All Packages
                </Button>
              </div>
            )}

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <Card className="bg-pdse-ice border-pdse-navy/20">
                <CardContent className="py-12">
                  <h2 className="font-serif text-3xl font-bold text-pdse-navy mb-4">
                    Need Help Choosing?
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Our local concierge team can help you select the perfect package 
                    based on your group size, experience level, and preferences.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild className="bg-pdse-navy hover:bg-pdse-navy/90 text-white">
                      <Link href="/contact">Talk to a Concierge</Link>
                    </Button>
                    <Button size="lg" asChild className="bg-pdse-navy hover:bg-pdse-navy/90 text-white">
                      <Link href="/plan-trip">Plan Your Trip</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </CurrencyProvider>
  );
}
