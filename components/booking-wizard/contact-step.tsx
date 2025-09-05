"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { bookingContactSchema, BookingContactData } from "@/lib/validators";
import { User, Mail, Phone, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

interface ContactStepProps {
  data?: {
    name: string;
    email: string;
    phone?: string;
    notes?: string;
  };
  onUpdate: (data: { name: string; email: string; phone?: string; notes?: string; consent?: boolean }) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ContactStep({ data, onUpdate, onNext, onPrev }: ContactStepProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<BookingContactData>({
    resolver: zodResolver(bookingContactSchema),
    defaultValues: data || { consent: false }
  });

  const consent = watch('consent');

  const onSubmit = (formData: BookingContactData) => {
    onUpdate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      notes: formData.notes,
      consent: formData.consent
    });
    onNext();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-pdse-navy">
          <User className="w-6 h-6" />
          Contact Information
        </CardTitle>
        <p className="text-gray-600">
          We&apos;ll use this information to send you a personalized proposal and coordinate your trip.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name *
              </Label>
              <Input
                id="name"
                placeholder="John Smith"
                {...register('name')}
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register('email')}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 123-4567"
              {...register('phone')}
            />
            <p className="text-sm text-gray-500">
              Optional, but helpful for urgent trip coordination
            </p>
          </div>

          {/* Special Requests */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Special Requests or Questions
            </Label>
            <Textarea
              id="notes"
              placeholder="Tell us about dietary requirements, skiing experience, accessibility needs, celebration occasions, or any special requests..."
              rows={4}
              {...register('notes')}
            />
            {errors.notes && (
              <p className="text-sm text-red-500">{errors.notes.message}</p>
            )}
            <p className="text-sm text-gray-500">
              Help us personalize your experience with any special requirements or preferences
            </p>
          </div>

          {/* Information About Process */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">What Happens Next?</h4>
            <div className="text-sm text-blue-800 space-y-1">
              <p>1. <strong>Proposal:</strong> We&apos;ll send you a detailed proposal within 24 hours</p>
              <p>2. <strong>Customize:</strong> Work with us to perfect your itinerary</p>
              <p>3. <strong>Book:</strong> Secure your dates with a deposit</p>
              <p>4. <strong>Enjoy:</strong> We handle everything for your perfect trip</p>
            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(checked) => setValue('consent', checked as boolean)}
              className={errors.consent ? 'border-red-500' : ''}
            />
            <div className="space-y-1">
              <Label htmlFor="consent" className="text-sm font-normal">
                I agree to be contacted by Alpine Experience regarding my booking inquiry. 
                We respect your privacy and will only use this information to provide you with our services. *
              </Label>
              {errors.consent && (
                <p className="text-sm text-red-500">{errors.consent.message}</p>
              )}
            </div>
          </div>

          {/* Privacy Note */}
          <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded">
            <p>
              Your personal information is securely stored and will only be used to process your booking 
              and provide customer service. We do not share your information with third parties except 
              our trusted partners necessary for your trip (accommodation, activities, transfers).
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <Button 
              type="button"
              variant="outline"
              onClick={onPrev}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Package
            </Button>
            
            <Button 
              type="submit"
              size="lg"
              className="bg-pdse-navy hover:bg-pdse-navy/90 flex items-center gap-2"
              disabled={!consent}
            >
              Review Booking
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
