"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { packages } from "@/data/packages";
import { useCurrency } from "@/components/currency-provider";
import { getPriceDisplay } from "@/lib/currency";
import { BookingData } from "./booking-wizard";
import { 
  Calendar, 
  Package as PackageIcon, 
  User, 
  Mail, 
  Phone, 
  MessageSquare,
  CheckCircle,
  ChevronLeft,
  Send,
  AlertCircle
} from "lucide-react";

interface ReviewStepProps {
  bookingData: BookingData;
  onSubmit: () => void;
  onPrev: () => void;
  isSubmitting: boolean;
}

export function ReviewStep({ bookingData, onSubmit, onPrev, isSubmitting }: ReviewStepProps) {
  const { currency } = useCurrency();
  
  const selectedPackage = packages.find(pkg => pkg.id === bookingData.package?.packageId);
  const totalGuests = (bookingData.guests?.adults || 1) + (bookingData.guests?.children || 0);
  
  const calculateNights = () => {
    if (bookingData.dates) {
      const start = new Date(bookingData.dates.startDate);
      const end = new Date(bookingData.dates.endDate);
      return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const calculateTotalPrice = () => {
    if (!selectedPackage) return 0;
    
    const basePrice = selectedPackage.basePriceUSD * totalGuests;
    const addonPrice = selectedPackage.addons
      .filter(addon => bookingData.package?.addons.includes(addon.id))
      .reduce((sum, addon) => sum + (addon.priceUSD * totalGuests), 0);
    
    return basePrice + addonPrice;
  };

  const categoryColors = {
    family: "bg-green-100 text-green-800",
    group: "bg-blue-100 text-blue-800", 
    luxury: "bg-purple-100 text-purple-800"
  };

  const nights = calculateNights();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-pdse-navy">
            <CheckCircle className="w-6 h-6" />
            Review Your Booking Request
          </CardTitle>
          <p className="text-gray-600">
            Please review all details before submitting your booking request. 
            Our team will send you a detailed proposal within 24 hours.
          </p>
        </CardHeader>
        <CardContent>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="font-medium text-green-900">Almost Done!</span>
            </div>
            <p className="text-sm text-green-800">
              This is not a confirmed booking yet. After submission, our concierge team will prepare 
              a personalized proposal with final pricing, availability, and payment options.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Trip Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-pdse-navy">
            <Calendar className="w-5 h-5" />
            Trip Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {bookingData.dates && (
              <div>
                <div className="font-medium text-gray-700 mb-1">Dates</div>
                <div className="text-sm">
                  {new Date(bookingData.dates.startDate).toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    month: 'short', 
                    day: 'numeric' 
                  })} - {new Date(bookingData.dates.endDate).toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="text-xs text-gray-500">{nights} nights</div>
              </div>
            )}

            {bookingData.guests && (
              <div>
                <div className="font-medium text-gray-700 mb-1">Guests</div>
                <div className="text-sm">
                  {bookingData.guests.adults} Adult{bookingData.guests.adults !== 1 ? 's' : ''}
                  {bookingData.guests.children > 0 && (
                    <span>, {bookingData.guests.children} Child{bookingData.guests.children !== 1 ? 'ren' : ''}</span>
                  )}
                </div>
                <div className="text-xs text-gray-500">Total: {totalGuests} guests</div>
              </div>
            )}

            <div>
              <div className="font-medium text-gray-700 mb-1">Location</div>
              <div className="text-sm">Morzine, France</div>
              <div className="text-xs text-gray-500">Portes du Soleil</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Package Details */}
      {selectedPackage && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-pdse-navy">
              <PackageIcon className="w-5 h-5" />
              Selected Package
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{selectedPackage.title}</h3>
                  <Badge className={categoryColors[selectedPackage.category]}>
                    {selectedPackage.category.charAt(0).toUpperCase() + selectedPackage.category.slice(1)}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-3">{selectedPackage.description}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Base price</div>
                <div className="text-xl font-bold text-pdse-navy">
                  {getPriceDisplay(selectedPackage.basePriceUSD, selectedPackage.basePriceEUR, currency)}
                </div>
                <div className="text-sm text-gray-500">per person</div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Included in this package:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {selectedPackage.inclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    <span>{inclusion}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            {bookingData.package?.addons && bookingData.package.addons.length > 0 && (
              <>
                <Separator />
                <div>
                  <h4 className="font-medium mb-2">Selected Add-ons:</h4>
                  <div className="space-y-2">
                    {selectedPackage.addons
                      .filter(addon => bookingData.package?.addons.includes(addon.id))
                      .map(addon => (
                        <div key={addon.id} className="flex justify-between items-center text-sm">
                          <div>
                            <div className="font-medium">{addon.name}</div>
                            <div className="text-gray-600">{addon.description}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">
                              {getPriceDisplay(addon.priceUSD, addon.priceEUR, currency)} × {totalGuests}
                            </div>
                            <div className="text-xs text-gray-500">
                              = {getPriceDisplay(addon.priceUSD * totalGuests, addon.priceEUR ? addon.priceEUR * totalGuests : undefined, currency)}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}

      {/* Contact Information */}
      {bookingData.contact && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-pdse-navy">
              <User className="w-5 h-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <User className="w-4 h-4 text-gray-500" />
              <span>{bookingData.contact.name}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gray-500" />
              <span>{bookingData.contact.email}</span>
            </div>
            
            {bookingData.contact.phone && (
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>{bookingData.contact.phone}</span>
              </div>
            )}
            
            {bookingData.contact.notes && (
              <div className="flex items-start gap-3">
                <MessageSquare className="w-4 h-4 text-gray-500 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-gray-700 mb-1">Special Requests:</div>
                  <p className="text-sm text-gray-600">{bookingData.contact.notes}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Price Estimate */}
      {selectedPackage && (
        <Card>
          <CardHeader>
            <CardTitle className="text-pdse-navy">Price Estimate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>{selectedPackage.title} × {totalGuests}</span>
                <span className="font-medium">
                  {getPriceDisplay(selectedPackage.basePriceUSD * totalGuests, selectedPackage.basePriceEUR ? selectedPackage.basePriceEUR * totalGuests : undefined, currency)}
                </span>
              </div>
              
              {bookingData.package?.addons && bookingData.package.addons.length > 0 && (
                <>
                  {selectedPackage.addons
                    .filter(addon => bookingData.package?.addons.includes(addon.id))
                    .map(addon => (
                      <div key={addon.id} className="flex justify-between text-sm">
                        <span>{addon.name} × {totalGuests}</span>
                        <span>
                          {getPriceDisplay(addon.priceUSD * totalGuests, addon.priceEUR ? addon.priceEUR * totalGuests : undefined, currency)}
                        </span>
                      </div>
                    ))}
                  <Separator />
                </>
              )}
              
              <div className="flex justify-between text-xl font-bold text-pdse-navy">
                <span>Estimated Total</span>
                <span>{getPriceDisplay(calculateTotalPrice(), undefined, currency)}</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <p className="font-medium mb-1">This is an estimate only</p>
                  <p>
                    Final pricing will be provided in your personalized proposal and may vary based on 
                    specific dates, accommodation availability, and any customizations you request.
                  </p>
                </div>
              </div>
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
          disabled={isSubmitting}
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Contact
        </Button>
        
        <Button 
          onClick={onSubmit}
          size="lg"
          className="bg-pdse-navy hover:bg-pdse-navy/90 flex items-center gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting Request...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Booking Request
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
