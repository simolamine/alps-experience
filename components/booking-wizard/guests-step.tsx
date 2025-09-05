"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { bookingGuestsSchema, BookingGuestsData } from "@/lib/validators";
import { Users, Baby, Info, ChevronLeft, ChevronRight } from "lucide-react";

interface GuestsStepProps {
  data?: {
    adults: number;
    children: number;
  };
  onUpdate: (data: { adults: number; children: number }) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function GuestsStep({ data, onUpdate, onNext, onPrev }: GuestsStepProps) {
  const [adults, setAdults] = useState(data?.adults || 1);
  const [children, setChildren] = useState(data?.children || 0);

  const {
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<BookingGuestsData>({
    resolver: zodResolver(bookingGuestsSchema),
    defaultValues: data || { adults: 1, children: 0 }
  });

  const totalGuests = adults + children;

  const onSubmit = () => {
    onUpdate({ adults, children });
    onNext();
  };

  const handleAdultsChange = (value: string) => {
    const numAdults = parseInt(value);
    setAdults(numAdults);
    setValue('adults', numAdults);
  };

  const handleChildrenChange = (value: string) => {
    const numChildren = parseInt(value);
    setChildren(numChildren);
    setValue('children', numChildren);
  };

  const getRecommendedPackages = () => {
    if (children > 0) {
      return ['Family Ski Week'];
    } else if (totalGuests >= 4) {
      return ['Group Ski & Spa', 'Luxury Chalet & Gourmet'];
    } else {
      return ['Luxury Chalet & Gourmet'];
    }
  };

  const getAccommodationNotes = () => {
    if (totalGuests <= 2) {
      return 'Perfect for romantic getaways or intimate experiences';
    } else if (totalGuests <= 4) {
      return 'Ideal for small groups or families';
    } else if (totalGuests <= 8) {
      return 'Great for larger families or friend groups';
    } else {
      return 'Perfect for large group celebrations or multi-family trips';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-pdse-navy">
          <Users className="w-6 h-6" />
          How many people are traveling?
        </CardTitle>
        <p className="text-gray-600">
          Tell us about your group so we can recommend the perfect accommodation and package.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Adults */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Adults (18+ years) *
              </Label>
              <Select value={adults.toString()} onValueChange={handleAdultsChange}>
                <SelectTrigger className={errors.adults ? 'border-red-500' : ''}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 20 }, (_, i) => (
                    <SelectItem key={i + 1} value={(i + 1).toString()}>
                      {i + 1} Adult{i > 0 ? 's' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.adults && (
                <p className="text-sm text-red-500">{errors.adults.message}</p>
              )}
            </div>

            {/* Children */}
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <Baby className="w-4 h-4" />
                Children (under 18)
              </Label>
              <Select value={children.toString()} onValueChange={handleChildrenChange}>
                <SelectTrigger className={errors.children ? 'border-red-500' : ''}>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">No Children</SelectItem>
                  {Array.from({ length: 10 }, (_, i) => (
                    <SelectItem key={i + 1} value={(i + 1).toString()}>
                      {i + 1} Child{i > 0 ? 'ren' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.children && (
                <p className="text-sm text-red-500">{errors.children.message}</p>
              )}
            </div>
          </div>

          {/* Group Summary */}
          {totalGuests > 0 && (
            <div className="bg-pdse-ice p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-pdse-navy" />
                <span className="font-medium text-pdse-navy">Your Group</span>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>{totalGuests} total guest{totalGuests !== 1 ? 's' : ''}</strong>
                  {adults > 0 && children > 0 && (
                    <span> ({adults} adult{adults !== 1 ? 's' : ''}, {children} child{children !== 1 ? 'ren' : ''})</span>
                  )}
                </p>
                <p className="text-sm text-gray-600">{getAccommodationNotes()}</p>
              </div>
            </div>
          )}

          {/* Children Information */}
          {children > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                <Baby className="w-4 h-4" />
                Family-Friendly Services
              </h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p>• Kids ski lessons with qualified English-speaking instructors</p>
                <p>• Child-friendly accommodation with safety features</p>
                <p>• Childcare services available (additional cost)</p>
                <p>• Equipment rental in children&apos;s sizes</p>
                <p>• Family dining options and kid-friendly restaurants</p>
              </div>
            </div>
          )}

          {/* Large Group Information */}
          {totalGuests >= 8 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-medium text-green-900 mb-2">Large Group Benefits</h4>
              <div className="text-sm text-green-800 space-y-1">
                <p>• Group discounts available</p>
                <p>• Private ski instruction options</p>
                <p>• Exclusive chalet rentals</p>
                <p>• Dedicated concierge for group coordination</p>
                <p>• Group dining reservations</p>
              </div>
            </div>
          )}

          {/* Recommended Packages */}
          {totalGuests > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-medium text-yellow-900 mb-2">Recommended for Your Group</h4>
              <div className="text-sm text-yellow-800">
                <p className="mb-2">Based on your group size, we recommend:</p>
                <div className="flex flex-wrap gap-2">
                  {getRecommendedPackages().map((packageName, index) => (
                    <span key={index} className="bg-yellow-200 text-yellow-900 px-2 py-1 rounded text-xs font-medium">
                      {packageName}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
              Back to Dates
            </Button>
            
            <Button 
              type="submit"
              size="lg"
              className="bg-pdse-navy hover:bg-pdse-navy/90 flex items-center gap-2"
              disabled={adults < 1}
            >
              Continue to Packages
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
