"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { bookingDatesSchema, BookingDatesData } from "@/lib/validators";
import { Calendar, AlertCircle, Info } from "lucide-react";

interface DateStepProps {
  data?: {
    startDate: string;
    endDate: string;
  };
  onUpdate: (data: { startDate: string; endDate: string }) => void;
  onNext: () => void;
}

export function DateStep({ data, onUpdate, onNext }: DateStepProps) {
  const [errors, setErrors] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors: formErrors }
  } = useForm<BookingDatesData>({
    resolver: zodResolver(bookingDatesSchema),
    defaultValues: data || {}
  });

  const startDate = watch('startDate');
  const endDate = watch('endDate');

  const calculateNights = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const onSubmit = (formData: BookingDatesData) => {
    setErrors([]);
    
    // Additional validation
    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const newErrors: string[] = [];
    
    if (start < today) {
      newErrors.push('Start date cannot be in the past');
    }
    
    if (end <= start) {
      newErrors.push('End date must be after start date');
    }
    
    const nights = calculateNights();
    if (nights < 2) {
      newErrors.push('Minimum stay is 2 nights');
    }
    
    if (nights > 21) {
      newErrors.push('Maximum stay is 21 nights');
    }
    
    // Check if dates are in ski season (Dec-April)
    const startMonth = start.getMonth();
    const endMonth = end.getMonth();
    if ((startMonth < 11 && startMonth > 3) || (endMonth < 11 && endMonth > 3)) {
      newErrors.push('Please note: Ski season is typically December through April');
    }
    
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }
    
    onUpdate(formData);
    onNext();
  };

  const nights = calculateNights();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-pdse-navy">
          <Calendar className="w-6 h-6" />
          When would you like to visit Morzine?
        </CardTitle>
        <p className="text-gray-600">
          Choose your preferred travel dates. We&apos;ll help you find the perfect package for your stay.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="startDate">Check-in Date *</Label>
              <Input
                id="startDate"
                type="date"
                {...register('startDate')}
                className={formErrors.startDate ? 'border-red-500' : ''}
                min={new Date().toISOString().split('T')[0]}
              />
              {formErrors.startDate && (
                <p className="text-sm text-red-500">{formErrors.startDate.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate">Check-out Date *</Label>
              <Input
                id="endDate"
                type="date"
                {...register('endDate')}
                className={formErrors.endDate ? 'border-red-500' : ''}
                min={startDate || new Date().toISOString().split('T')[0]}
              />
              {formErrors.endDate && (
                <p className="text-sm text-red-500">{formErrors.endDate.message}</p>
              )}
            </div>
          </div>

          {/* Duration Display */}
          {nights > 0 && (
            <div className="bg-pdse-ice p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-4 h-4 text-pdse-navy" />
                <span className="font-medium text-pdse-navy">Trip Duration</span>
              </div>
              <p className="text-gray-700">
                <strong>{nights} night{nights !== 1 ? 's' : ''}</strong> in beautiful Morzine
              </p>
              {nights >= 7 && (
                <p className="text-sm text-green-600 mt-1">
                  ✓ Perfect for our weekly packages with better value!
                </p>
              )}
            </div>
          )}

          {/* Validation Errors */}
          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span className="font-medium text-red-600">Please check your dates</span>
              </div>
              <ul className="text-sm text-red-600 space-y-1">
                {errors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Season Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Ski Season Information</h4>
            <div className="text-sm text-blue-800 space-y-1">
              <p>• <strong>Peak Season:</strong> December 20 - January 7, February 8 - March 8</p>
              <p>• <strong>High Season:</strong> January 8 - February 7, March 9 - April 5</p>
              <p>• <strong>Low Season:</strong> December 1-19, April 6-26</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end">
            <Button 
              type="submit"
              size="lg"
              className="bg-pdse-navy hover:bg-pdse-navy/90"
              disabled={!startDate || !endDate}
            >
              Continue to Guests
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
