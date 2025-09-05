"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { packages } from "@/data/packages";
import { useCurrency } from "@/components/currency-provider";
import { getPriceDisplay } from "@/lib/currency";
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Users, 
  CheckCircle,
  Plus,
  Package as PackageIcon 
} from "lucide-react";

interface PackageStepProps {
  data?: {
    packageId: string;
    addons: string[];
  };
  guests?: {
    adults: number;
    children: number;
  };
  dates?: {
    startDate: string;
    endDate: string;
  };
  onUpdate: (data: { packageId: string; addons: string[] }) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function PackageStep({ data, guests, dates, onUpdate, onNext, onPrev }: PackageStepProps) {
  const { currency } = useCurrency();
  const [selectedPackageId, setSelectedPackageId] = useState(data?.packageId || '');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(data?.addons || []);

  const totalGuests = (guests?.adults || 1) + (guests?.children || 0);
  const nights = dates ? Math.ceil((new Date(dates.endDate).getTime() - new Date(dates.startDate).getTime()) / (1000 * 60 * 60 * 24)) : 7;

  // Filter packages based on group size
  const availablePackages = packages.filter(pkg => 
    totalGuests >= pkg.minGuests && totalGuests <= pkg.maxGuests
  );

  const selectedPackage = packages.find(pkg => pkg.id === selectedPackageId);

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackageId(packageId);
    // Reset addons when changing package
    setSelectedAddons([]);
  };

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  const calculateTotalPrice = () => {
    if (!selectedPackage) return 0;
    
    const basePrice = selectedPackage.basePriceUSD * totalGuests;
    const addonPrice = selectedPackage.addons
      .filter(addon => selectedAddons.includes(addon.id))
      .reduce((sum, addon) => sum + (addon.priceUSD * totalGuests), 0);
    
    return basePrice + addonPrice;
  };

  const onSubmit = () => {
    if (selectedPackageId) {
      onUpdate({
        packageId: selectedPackageId,
        addons: selectedAddons
      });
      onNext();
    }
  };

  const categoryColors = {
    family: "bg-green-100 text-green-800",
    group: "bg-blue-100 text-blue-800", 
    luxury: "bg-purple-100 text-purple-800"
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-pdse-navy">
            <PackageIcon className="w-6 h-6" />
            Choose Your Perfect Package
          </CardTitle>
          <p className="text-gray-600">
            Select the package that best fits your group of {totalGuests} guest{totalGuests !== 1 ? 's' : ''} 
            for {nights} night{nights !== 1 ? 's' : ''}.
          </p>
        </CardHeader>
        <CardContent>
          {/* Trip Summary */}
          <div className="bg-pdse-ice p-4 rounded-lg mb-6">
            <h4 className="font-medium text-pdse-navy mb-2">Your Trip Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-pdse-navy" />
                <span>{nights} nights</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-pdse-navy" />
                <span>{totalGuests} guest{totalGuests !== 1 ? 's' : ''}</span>
              </div>
              {dates && (
                <div className="text-gray-600">
                  {new Date(dates.startDate).toLocaleDateString()} - {new Date(dates.endDate).toLocaleDateString()}
                </div>
              )}
            </div>
          </div>

          {/* Package Selection */}
          <div className="space-y-4">
            {availablePackages.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">
                  No packages are available for a group of {totalGuests} guests.
                </p>
                <p className="text-sm text-gray-500">
                  Please adjust your group size or contact us for a custom package.
                </p>
              </div>
            ) : (
              availablePackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedPackageId === pkg.id
                      ? 'border-pdse-navy bg-pdse-ice'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => handlePackageSelect(pkg.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedPackageId === pkg.id
                            ? 'border-pdse-navy bg-pdse-navy'
                            : 'border-gray-300'
                        }`}>
                          {selectedPackageId === pkg.id && (
                            <div className="w-full h-full rounded-full bg-white scale-50"></div>
                          )}
                        </div>
                        <h3 className="font-semibold text-lg">{pkg.title}</h3>
                        <Badge className={categoryColors[pkg.category]}>
                          {pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-3">{pkg.description}</p>
                      
                      <div className="space-y-1 mb-3">
                        <div className="text-sm font-medium text-gray-700">Key Inclusions:</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                          {pkg.inclusions.slice(0, 4).map((inclusion, index) => (
                            <div key={index} className="flex items-center gap-1 text-sm text-gray-600">
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                              <span className="truncate">{inclusion}</span>
                            </div>
                          ))}
                        </div>
                        {pkg.inclusions.length > 4 && (
                          <div className="text-sm text-gray-500">
                            +{pkg.inclusions.length - 4} more inclusions
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="text-right ml-4">
                      <div className="text-sm text-gray-500">From</div>
                      <div className="text-2xl font-bold text-pdse-navy">
                        {getPriceDisplay(pkg.basePriceUSD, pkg.basePriceEUR, currency)}
                      </div>
                      <div className="text-sm text-gray-500">per person</div>
                      <div className="text-xs text-gray-400 mt-1">
                        Total: {getPriceDisplay(pkg.basePriceUSD * totalGuests, pkg.basePriceEUR ? pkg.basePriceEUR * totalGuests : undefined, currency)}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Add-ons */}
      {selectedPackage && selectedPackage.addons.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-pdse-navy">
              <Plus className="w-5 h-5" />
              Enhance Your Experience
            </CardTitle>
            <p className="text-gray-600">
              Add optional services to make your trip even more special.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {selectedPackage.addons.map((addon) => (
                <div
                  key={addon.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id={addon.id}
                      checked={selectedAddons.includes(addon.id)}
                      onCheckedChange={() => handleAddonToggle(addon.id)}
                    />
                    <div className="flex-1">
                      <label htmlFor={addon.id} className="font-medium cursor-pointer">
                        {addon.name}
                      </label>
                      <p className="text-sm text-gray-600">{addon.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-pdse-navy">
                      {getPriceDisplay(addon.priceUSD, addon.priceEUR, currency)}
                    </div>
                    <div className="text-xs text-gray-500">per person</div>
                    <div className="text-xs text-gray-400">
                      Total: {getPriceDisplay(addon.priceUSD * totalGuests, addon.priceEUR ? addon.priceEUR * totalGuests : undefined, currency)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Price Summary */}
      {selectedPackage && (
        <Card>
          <CardHeader>
            <CardTitle className="text-pdse-navy">Price Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>{selectedPackage.title} × {totalGuests}</span>
                <span className="font-medium">
                  {getPriceDisplay(selectedPackage.basePriceUSD * totalGuests, selectedPackage.basePriceEUR ? selectedPackage.basePriceEUR * totalGuests : undefined, currency)}
                </span>
              </div>
              
              {selectedAddons.length > 0 && (
                <>
                  {selectedPackage.addons
                    .filter(addon => selectedAddons.includes(addon.id))
                    .map(addon => (
                      <div key={addon.id} className="flex justify-between text-sm">
                        <span>{addon.name} × {totalGuests}</span>
                        <span>
                          {getPriceDisplay(addon.priceUSD * totalGuests, addon.priceEUR ? addon.priceEUR * totalGuests : undefined, currency)}
                        </span>
                      </div>
                    ))}
                  <hr />
                </>
              )}
              
              <div className="flex justify-between text-lg font-bold text-pdse-navy">
                <span>Total Estimate</span>
                <span>{getPriceDisplay(calculateTotalPrice(), undefined, currency)}</span>
              </div>
              
              <p className="text-xs text-gray-500">
                Final pricing will be confirmed based on exact dates, accommodation selection, and any customizations.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between">
        <Button 
          type="button"
          variant="outline"
          onClick={onPrev}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Guests
        </Button>
        
        <Button 
          onClick={onSubmit}
          size="lg"
          className="bg-pdse-navy hover:bg-pdse-navy/90 flex items-center gap-2"
          disabled={!selectedPackageId}
        >
          Continue to Contact
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
