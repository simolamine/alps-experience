"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package } from "@/types/package";
import { useCurrency } from "@/components/currency-provider";
import { getPriceDisplay } from "@/lib/currency";
import { Users, Calendar, CheckCircle } from "lucide-react";

interface PackageCardProps {
  package: Package;
  featured?: boolean;
}

export function PackageCard({ package: pkg, featured = false }: PackageCardProps) {
  const { currency } = useCurrency();

  const categoryColors = {
    family: "bg-green-100 text-green-800",
    group: "bg-blue-100 text-blue-800", 
    luxury: "bg-purple-100 text-purple-800"
  };

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 ${featured ? 'ring-2 ring-pdse-navy' : ''}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <div 
          className="h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551524164-8b0b6de29bcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
          }}
        />
        {featured && (
          <Badge className="absolute top-4 left-4 bg-pdse-navy text-white">
            Most Popular
          </Badge>
        )}
        <Badge 
          className={`absolute top-4 right-4 ${categoryColors[pkg.category]}`}
        >
          {pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}
        </Badge>
      </div>

      <CardHeader className="space-y-2">
        <CardTitle className="text-xl font-serif text-pdse-navy">
          {pkg.title}
        </CardTitle>
        {pkg.subtitle && (
          <CardDescription className="text-base">
            {pkg.subtitle}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 line-clamp-2">
          {pkg.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{pkg.durationNights} nights</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{pkg.minGuests}-{pkg.maxGuests} guests</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-700">Key Inclusions:</div>
          <div className="space-y-1">
            {pkg.inclusions.slice(0, 3).map((inclusion, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                <span className="line-clamp-1">{inclusion}</span>
              </div>
            ))}
            {pkg.inclusions.length > 3 && (
              <div className="text-sm text-gray-500">
                +{pkg.inclusions.length - 3} more inclusions
              </div>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-6 border-t">
        <div className="space-y-1">
          <div className="text-sm text-gray-500">From</div>
          <div className="text-2xl font-bold text-pdse-navy">
            {getPriceDisplay(pkg.basePriceUSD, pkg.basePriceEUR, currency)}
          </div>
          <div className="text-xs text-gray-500">per person</div>
        </div>
        
        <Button asChild className="bg-pdse-navy hover:bg-pdse-navy/90">
          <Link href={`/packages/${pkg.slug}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
